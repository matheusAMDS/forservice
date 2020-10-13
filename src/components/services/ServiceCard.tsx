import Paper from 'components/Paper'
import { Text, Heading, Box, Button, Divider, Badge, Stack, Link, Collapse } from '@chakra-ui/core'
import { Service } from 'services/Service'
import { useState } from 'react'
import { ImWhatsapp } from 'react-icons/im'
import { formatDistanceToNow } from 'date-fns'
import ptbrLocale from 'date-fns/locale/pt-BR'

interface Props {
  service: Service
  onClick?: any
}

function timeDistanceToNow(date: Date | string): string {
  if (typeof date === 'string')
    return formatDistanceToNow(new Date(date), { locale: ptbrLocale })
  
  return formatDistanceToNow(date, { locale: ptbrLocale })
}

const ServiceCard: React.FC<Props> = ({ service, onClick}) => {
  const [ showFull, setShowFull ] = useState(false)

  return (
    <Paper onClick={onClick} w="full" my={3}>
      <Text fontSize={17} color="gray.400">
        Há {timeDistanceToNow(service.createdAt)} atrás
      </Text>

      <Box>
        <Heading as="h2" size="lg" mb={4}>
          {service.title}
          <Badge fontSize={18} fontWeight="semibold" variantColor="green" mx={4}>
            {service.value == 0 ? 'Comunitário' : `R$${service.value}`}
          </Badge>
        </Heading>
        <Collapse 
          isOpen={showFull} 
          startingHeight={72} 
          whiteSpace="pre-wrap">
          {service.description}
        </Collapse>
        <Text 
          color="teal.400" 
          onClick={() => setShowFull(!showFull)} 
          mt={2} cursor="pointer"
        >
          {showFull ? 'Colapsar' : 'Ver mais'}
        </Text>
      </Box>
      
      <Divider />
      <Stack isInline justifyContent="space-between" align="center">
        <Text fontWeight="semibold" fontSize={20} color="green.500">
          {service.category}
        </Text>
        <Link 
          href={`https://wa.me/${service.whatsapp}`} 
          target="_blank" 
          color="transparent"
        >
          <Button 
            bg="#25D366" 
            size="lg"
            _hover={{}} leftIcon={ImWhatsapp} 
            color="white"
          >
            Entrar em contato
          </Button>
        </Link>
      </Stack>
    </Paper>
  )
}

export default ServiceCard