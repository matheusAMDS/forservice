import { Box, Text, Link, Flex, Stack, Avatar } from '@chakra-ui/core'
import NextLink from 'next/link'
import { useSession } from 'next-auth/client'
import Logo from 'components/Logo'
import UserProfileMenu from 'components/user/UserProfileMenu'

const AppLayout: React.FC = ({ children }) => {
  const [ session, loading ] = useSession()
  console.log(session)
  return (
    <Flex 
      w="full" maxW="100vw" 
      minH="100vh" 
      flexDirection="column" 
      flexWrap="nowrap"
      bg="gray.100"
      fontSize={{basis: 14, md: 16}}
    >
      <Flex 
        w="full" p={4} 
        bg="white" 
        justifyContent="space-around" 
        alignItems="center"
        boxShadow="1px 1px 7px gray"
      >
        <NextLink href="/"><Logo /></NextLink>

        <Stack isInline spacing={4}>
          {!loading && (
            session ? (
              <UserProfileMenu user={session.user} />
            ) : (
              <NextLink href="/signin">
                <Link 
                  fontSize="xl" 
                  fontWeight="semibold" 
                  textDecoration='none' 
                >
                  Entrar
                </Link>
              </NextLink>
            )
          )}
          
        </Stack>
      </Flex>

      <Box flexGrow={1} w="full" h="full" px={{basis: 2, md: 0}}>
        {children}
      </Box>

      <Box w="full" p={3} bg="gray.700" maxH={200}>
        <Text textAlign="center" fontWeight="semibold" color="gray.400">
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