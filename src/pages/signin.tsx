import { Button, Heading, Input, Stack, Flex, Text } from '@chakra-ui/core'
import Head from 'next/head'
import AppLayout from 'components/AppLayout'
import Container from 'components/Container'
import { signIn } from 'next-auth/client'
import { FcGoogle } from 'react-icons/fc'
import { FunctionComponent } from 'react'

interface AuthProviderButtonProps {
  provider: string
  icon?: FunctionComponent
}

const AuthProviderButton: React.FC<AuthProviderButtonProps> = ({ provider, icon, children }) => {
  const callbackUrl = 'http://localhost:3000/services'

  return (
    <Button
      leftIcon={provider === 'email' ? 'email' : icon} 
      size="lg" 
      bg="white" 
      mx="auto"
      my={2}
      onClick={async () => await signIn(provider, { callbackUrl })}
    >
      {children}
    </Button>
  )
}

const SignIn: React.FC = () => {
  return (
    <AppLayout>
      <Head>
        <title>Entrar | ForService</title>
      </Head>
      <Container> 
        <Heading textAlign="center">Fazer Login com</Heading>
        <Flex w="full" maxW={620} mx="auto" my={6} flexDirection="column" alignItems="center">
          <Stack w="full" isInline>
            <Input size="lg" type="email" placeholder="E-mail" />
            <Button size="lg" variantColor="teal">
              Login
            </Button>
          </Stack>
          <Text fontSize={18} fontWeight="semibold" my={2}>Ou</Text>
          <AuthProviderButton provider="google" icon={FcGoogle}>
            Entrar com Google
          </AuthProviderButton>
       
        </Flex>
      </Container>
    </AppLayout>
  )
}

export default SignIn