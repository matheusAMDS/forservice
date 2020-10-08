import { Button, Heading, Input, Link, Stack } from '@chakra-ui/core'
import NextLink from 'next/link'
import Head from 'next/head'
import AppLayout from 'components/AppLayout'
import Container from 'components/Container'

const SignIn: React.FC = () => {
  return (
    <AppLayout>
      <Head>
        <title>Entrar | ForService</title>
      </Head>
      <Container> 
        <Heading textAlign="center">Fazer Login</Heading>
        <Stack 
          as="form" 
          w="full" maxW={700} 
          mx="auto" my={6}
          spacing={5}
        >
          <Input size="lg" type="email" placeholder="E-mail" />
          <Input size="lg" type="password" placeholder="Senha" />
          <Button variantColor="teal" size="lg">Entrar</Button>
          <NextLink href="/signup">
            <Link textAlign="center" fontWeight="semibold" fontSize={20}>
              Não está cadastrado?
            </Link>
          </NextLink>
        </Stack>
      </Container>
    </AppLayout>
  )
}

export default SignIn