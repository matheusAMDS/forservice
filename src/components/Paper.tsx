import { Box, BoxProps } from '@chakra-ui/core'

const Paper: React.FC<BoxProps> = ({ children, p, m, rounded, w, position }) => {
  return (
    <Box
      w={w && "full"}
      maxW={w}
      p={p || 4} m={m}
      bg="white" 
      boxShadow="3px 3px 10px #ddd" 
      cursor="pointer"
      rounded={rounded || "md"}
      position={position}
    >
      {children}
    </Box>
  )
}

export default Paper