import { Button, Heading, Input, Link, Stack } from '@chakra-ui/core'
import NextLink from 'next/link'
import Head from 'next/head'
import AppLayout from 'components/AppLayout'
import Container from 'components/Container'

const SignUp: React.FC = () => {
  return (
    <AppLayout>
      <Head>
        <title>Cadastre-se | ForService</title>
      </Head>
      <Container>
        <Heading textAlign="center">Cadastro</Heading>
        <Stack 
          as="form" 
          w="full" maxW={700} 
          mx="auto" my={6}
          spacing={5}
        >
          <Stack isInline spacing={4}>
            <Input size="lg" placeholder="Nome" />
            <Input size="lg" placeholder="Sobrenome" />
          </Stack>
          <Input size="lg" type="email" placeholder="E-mail" />
          <Input size="lg" type="password" placeholder="Senha" />
          <Input size="lg" placeholder="WhatsApp" />
          <Button variantColor="teal" size="lg">Cadastrar</Button>
          <NextLink href="/signin">
            <Link textAlign="center" fontWeight="semibold" fontSize={20}>
              Já está cadastrado?
            </Link>
          </NextLink>
        </Stack>
      </Container>
    </AppLayout>
  )
}

export default SignUp