import { Flex, Box } from '@chakra-ui/core'
import AppLayout from 'components/AppLayout'
import Container from 'components/Container'
import NextLink from 'next/link'

const ServicesLayout: React.FC = ({ children }) => {
  return (
    <AppLayout>
      {children}
    </AppLayout>
  )
}

export default ServicesLayout