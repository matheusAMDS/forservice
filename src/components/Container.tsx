import { Box, BoxProps, Flex } from '@chakra-ui/core'

const Container: React.FC<BoxProps> = ({ children, w, p, my }) => {
  return (
    <Box 
      h="full"
      w="full" maxW={w || 1180} 
      mx="auto" my={my} p={p || 4} 
      
    >
      {children}
    </Box>
  )
}

export default Container