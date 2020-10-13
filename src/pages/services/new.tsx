import AppLayout from 'components/AppLayout'
import Container from 'components/Container'
import { Input, Select, Stack, Heading, Button, Textarea, useToast } from '@chakra-ui/core'
import Head from 'next/head'
import { categories } from 'utils/category'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/router'
import { ServiceCreateParams, create } from 'services/Service'
import { useEffect } from 'react'
import { useSession } from 'next-auth/client'

const NewService: React.FC = () => {
  const { register, handleSubmit } = useForm()
  const router = useRouter()
  const toast = useToast()
  const [session, loading] = useSession()

  const onSubmit = handleSubmit(async values => {
    try {
      await create({
        ...values,
        value: Number(values.value)
      } as ServiceCreateParams)
      router.push('/services')
    } catch (error) {
      toast({
        title: 'Error during service creation',
        duration: 4000,
        status: 'error'
      })
    }
  })

  if (loading) return <AppLayout />

  if (!loading && !session) {
    console.log('eita') 
    router.push('/signin')
  }

  return !loading && (
    <AppLayout>
      <Head>
        <title>Postar Serviço | ForService</title>
      </Head>

      <Container>
        <Heading textAlign="center">Postar Serviço</Heading>
        <Stack 
          as="form" 
          spacing={5} 
          w="full" maxW={800} 
          mx="auto" my={6}
          onSubmit={onSubmit}
        >
          <Input size="lg" placeholder="Título" ref={register} name="title" />
          
          <Stack isInline spacing={4}>
            <Select size="lg" placeholder="Categoria" ref={register} name="category">
              {categories.map(category => (
                <option value={category.name} key={category.id}>
                  {category.name}
                </option>
              ))}
            </Select>
            <Input 
              size="lg" 
              type="number" 
              placeholder="Valor (R$)"
              ref={register}
              name="value"
            />
          </Stack>
          
          <Input placeholder="Whatsapp" size="lg" ref={register} name="whatsapp" />
          <Textarea 
            placeholder="Descrição do serviço" 
            size="lg" minH="xs"
            ref={register}
            name="description"
          />
          <Button size="lg" type="submit" variantColor="teal">
            Postar
          </Button>
        </Stack>
      </Container>
    </AppLayout>
  )
}

export default NewService