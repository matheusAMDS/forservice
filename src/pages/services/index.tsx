import AppLayout from 'components/AppLayout'
import Container from 'components/Container'
import { GetServerSideProps } from 'next'
import Head from 'next/head'
import { Box, Button, Divider, Flex, Heading, Stack, Tag, Text } from '@chakra-ui/core'
import Paper from 'components/Paper'
import { ImWhatsapp } from 'react-icons/im'

const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: {}
  }
}

const Services: React.FC = () => {
  const services = [
    {
      id: '1',
      title: 'Site institucional',
      category: 'Programação e TI',
      description: `
      Site institucional para uma ONG de caridade. Consiste de:
        - Landing Page
        - Página com formulario de doaçãom
      `,
      value: 3000,
      createdAt: new Date(),
      user: {
        name: 'Carlos Eduardo',
        whatsapp: '+5579999999999'
      }
    }
  ]

  return (
    <AppLayout>
      <Head>
        <title>Serviços | ForService</title>
      </Head>
      <Container>
        <Heading>Procurar Serviços</Heading>
        <Flex w="full" maxW={650} mx="auto">
          {services.map(service => (
            <Paper key={service.id} w="full" position="relative">
              <Text fontSize={17} color="gray.400">
                {service.createdAt.toDateString()}
              </Text>
              <Heading as="h2" size="lg">{service.title}</Heading>
              <Text fontSize={18} fontWeight="semibold" color="gray.500">
                R${service.value}
              </Text>              
              <Button 
                bg="#25D366" 
                size="lg" mt={6}
                _hover={{}} leftIcon={ImWhatsapp} 
                color="white"
              >
                Entrar em contato
              </Button>
              <Divider  mt={4}/>
              <Box w="full">
                <Tag variantColor="green" variant="outline">
                  {service.category}
                </Tag>
              </Box>
            </Paper>
          ))}
        </Flex>
      </Container>
    </AppLayout>
  )
}

export default Services