import { Box, BoxProps } from '@chakra-ui/core'
import { forwardRef } from 'react'

const Paper: React.FC<BoxProps> = forwardRef(({ 
  children, 
  p, m, maxW,
  rounded, w, 
  position, 
  cursor, h,
  onClick, my
}, ref) => {
  return (
    <Box
      w={w || "full"}
      maxW={maxW}
      p={p || 4} m={m} my={my}
      bg="white" 
      rounded={rounded || "md"}
      position={position}
      cursor={cursor}
      h={h && "full"}
      maxH={h}
      onClick={onClick}

    >
      {children}
    </Box>
  )
})

export default Paper