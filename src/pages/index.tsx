import Head from 'next/head'
import { Box, Button, Heading, Flex, Text, Image } from '@chakra-ui/core'
import NextLink from 'next/link'
import AppLayout from 'components/AppLayout'
import Container from 'components/Container'
import Paper from 'components/Paper'
import { categories } from 'utils/category'

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
            justifyContent={{basis: "center", md: "space-between"}} 
            alignItems="center" 
            flexWrap="wrap"
          >
            <Box w="full" maxW={500}>
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
          {categories.map(category => (
            <NextLink 
              href={`/services?category=${category.id}`} 
              key={category.id}
            >
              <Paper m={2} w={170} cursor="pointer">
                <Text fontWeight="semibold">{category.name}</Text>
              </Paper>
            </NextLink>
          ))}
        </Flex>
      </Container>
    </AppLayout>
  )
}

export default Home