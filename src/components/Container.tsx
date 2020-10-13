import { Box, BoxProps, Flex } from '@chakra-ui/core'

const Container: React.FC<BoxProps> = ({ children, w, py, my }) => {
  return (
    <Box 
      h="full"
      w="full" maxW={w || 1180} 
      mx="auto" my={my} py={py || 4} 
      
    >
      {children}
    </Box>
  )
}

export default Container