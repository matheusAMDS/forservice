import AppLayout from 'components/AppLayout'
import Container from 'components/Container'
import { Input, Select, Stack, Heading, Button, Textarea } from '@chakra-ui/core'
import Head from 'next/head'

const NewService: React.FC = () => {
  return (
    <AppLayout>
      <Head>Postar Serviço | ForService</Head>
      <Container>
        <Heading textAlign="center">Postar Serviço</Heading>
        <Stack as="form" spacing={5} w="full" maxW={800} mx="auto" my={6}>
          <Input size="lg" placeholder="Título"/>
          <Stack isInline spacing={4}>
            <Select size="lg" placeholder="Categoria">
              <option value=""></option>
            </Select>
            <Input size="lg" type="number" placeholder="Valor (R$)" />
          </Stack>
          <Textarea placeholder="Descrição do serviço" size="lg" minH="xs"/>
          <Button size="lg" type="submit" variantColor="teal">
            Postar
          </Button>
        </Stack>
      </Container>
    </AppLayout>
  )
}

export default NewService