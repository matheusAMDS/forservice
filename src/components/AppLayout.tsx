import { Box, Heading, Text, Link, Flex, Button } from '@chakra-ui/core'
import NextLink from 'next/link'

const AppLayout: React.FC = ({ children }) => {
  return (
    <Flex w="full" maxW="100vw" minH="100vh" flexDirection="column" flexWrap="nowrap">
      <Flex w="full" p={4} bg="green.300" justifyContent="space-around" alignItems="center">
        <NextLink href="/">
          <Heading textAlign="center" cursor="pointer">ForService</Heading>
        </NextLink>

        <NextLink href="/signin">
          <Link 
            fontSize="xl" 
            fontWeight="semibold" 
            textDecoration='none' 
            _hover={{ color: 'white' }}
          >
            Entrar
          </Link>
        </NextLink>
      </Flex>

      <Box flexGrow={1} w="100%" h="full" bg="gray.100">
        {children}
      </Box>

      <Box w="full" p={3} bg="gray.400" maxH={200}>
        <Text textAlign="center">
          Developed by{' '}
          <Link href="https://github.com/matheusAMDS" target="_blank">
            Matheus Andrade
          </Link>
        </Text>
      </Box>
    </Flex>
  )
}

export default AppLayout