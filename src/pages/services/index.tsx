import { GetServerSideProps } from 'next'
import Head from 'next/head'
import { 
  Button, 
  Checkbox, 
  CheckboxGroup,
  Divider, 
  Heading, 
  Select, 
  Stack,
  Text
} from '@chakra-ui/core'
import Paper from 'components/Paper'
import { Service, ServiceIndexValue } from 'services/Service'
import ServiceCard from 'components/services/ServiceCard'
import { categories, getCategory } from 'utils/category'
import AppLayout from 'components/AppLayout'
import Container from 'components/Container'
import { useRouter } from 'next/router'
import { useState } from 'react'
import superjson from 'superjson'
import { PrismaClient } from '@prisma/client'

interface Props {
  services: Service[]
  category: string
}

const Services: React.FC<Props> = ({ services, category }) => {
  const router = useRouter()
  const [ queryCategory, setQueryCategory ] = useState('')
  const [ queryValue, setQueryValue ] = useState([])

  const makeQuery = () => {
    const query = {
      category: queryCategory !== 'all' && queryCategory,
      value: queryValue.length === 1 ? queryValue[0] : undefined
    }
    const queryUrl = Object.entries(query)
      .filter(([key, value]) => value)
      .map(([key,value]) => `${key}=${value}`)
      .join('&')

    router.push(`/services?${queryUrl}`)
  }

  return (
    <AppLayout>
      <Head>
        <title>Serviços | ForService</title>
      </Head>

      <Container w={850} py={8}>
        <Stack isInline alignItems="center" mb={4}>
          <Heading w="full">
            { category ? category : 'Todos os Serviços'}
          </Heading>
          <Button 
            variantColor="teal" 
            leftIcon="add" 
            onClick={() => router.push('/services/new')}
          >
            Postar Serviço
          </Button>
        </Stack>
        <Paper p={4}>
          <Stack isInline align="center">
            <Stack flexGrow={1} isInline align="center">
              <Select 
                w="full" maxW={300} 
                onChange={e => setQueryCategory(e.target.value)}
              >
                <option value="all">Todos os Serviços</option>
                {categories.map(category => (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                ))}
              </Select>
              <Divider orientation="vertical"/>
              <CheckboxGroup 
                isInline 
                variantColor="teal" 
                onChange={values => setQueryValue(values)}
              >
                <Checkbox value="community">Comunitário</Checkbox>
                <Checkbox value="paid">Pago</Checkbox>
              </CheckboxGroup>
            </Stack>
            <Button onClick={makeQuery} variantColor="teal">
              Pesquisar
            </Button>
          </Stack>
        </Paper>
        
        <Stack w="full" mx="auto" mt={5} spacing={4}>
          {services.length > 0
            ? services.map(service => (
              <ServiceCard service={service} key={service.id}/>
            ))
            : <Text 
                fontSize={22} 
                fontWeight="semibold" 
                color="gray.500" 
                textAlign="center"
              >
                Não há serviços disponíveis
              </Text>
          }
        </Stack>
      </Container>
    </AppLayout>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const category = Number(query.category)
  const value = query.value as ServiceIndexValue
  const categoryName = category ? getCategory(category).name : undefined
  const prisma = new PrismaClient()
  const services = await prisma.service.findMany({
    orderBy: {createdAt: 'desc'},
    where: {
      category: categoryName,
      value: value && (value === 'community' ? { equals: 0 } : { gt: 0 })
    }
  })

  prisma.$disconnect()
  
  return {
    props: {
      services: superjson.serialize(services).json,
      category: category && getCategory(category).name
    }
  }
}

export default Services