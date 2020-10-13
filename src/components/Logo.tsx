import { Heading, Text, BoxProps, Icon, Box } from '@chakra-ui/core'

interface Props extends BoxProps {
  size?: number
}

const Logo: React.FC<Props> = ({ size, onClick }) => {
  return (
    <Box 
      color="black" 
      fontSize={size || 34}
      fontWeight="bold"
      cursor="pointer"
      onClick={onClick}
    >
      <Text color="green.400" display="inline" mr={-1}>
        For
      </Text>
      <Icon name="attachment" color="gray.500" />
      <Text display="inline">Service</Text>
    </Box>
  )
}

export default Logo