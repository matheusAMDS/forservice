import Head from 'next/head'
import { Box, Button, Heading, Flex, Text, Image } from '@chakra-ui/core'
import NextLink from 'next/link'
import AppLayout from 'components/AppLayout'
import Container from 'components/Container'
import Paper from 'components/Paper'

const Home: React.FC = () => {
  return (
    <AppLayout>
      <Head>
        <title>ForService</title>
      </Head>
      
      <Box w="full" bg="green.300" py={5}>
        <Container>
          <Flex 
            w="full" 
            justifyContent="center" 
            alignItems="center" 
            flexWrap="wrap"
          >
            <Box mr={10} w="full" maxW={700}>
              <Heading size="2xl">Bem vindo ao ForService</Heading>
              <Text fontSize={25} color="gray.600" fontWeight="semibold">
                Encontre pequenos serviços e começe a trabalhar imediatamente!
              </Text>
              
              <Flex justifyContent="space-around" my={10}>
                <NextLink href="/services">
                  <Button size="lg" variantColor="teal" leftIcon="search">
                    Procurar Serviços
                  </Button>
                </NextLink>
                <NextLink href="/services/new">
                  <Button size="lg" variantColor="teal" leftIcon="add">
                    Postar serviço
                  </Button>
                </NextLink>
              </Flex>
            </Box>
            <Image src="home-image.svg" size="sm" />
          </Flex>
        </Container>
      </Box>

      <Container my={6}>
        <Heading>Aqui você encontrará serviços relacionados à</Heading>
        <Flex justifyContent="space-between" flexWrap="wrap" my={6}>
          <Paper m={2} w={170}>
            <Text fontWeight="semibold">Design e Multimídia</Text>
          </Paper>
          <Paper m={2} w={170}>
            <Text fontWeight="semibold">Programação e TI</Text>
          </Paper>
          <Paper m={2} w={170}>
            <Text fontWeight="semibold">Marketing e Vendas</Text>
          </Paper>
          <Paper m={2} w={170}>
            <Text fontWeight="semibold">Tradução e Conteúdos</Text>
          </Paper>
          <Paper m={2} w={170}>
            <Text fontWeight="semibold">Finanças e Administração</Text>
          </Paper>
        </Flex>
      </Container>
    </AppLayout>
  )
}

export default Home