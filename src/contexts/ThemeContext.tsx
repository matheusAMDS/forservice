import { ThemeProvider as ChakraProvider, CSSReset, theme } from '@chakra-ui/core'

export const ThemeProvider: React.FC = ({ children }) => {
  return (
    <ChakraProvider theme={theme}>
      <CSSReset />
      {children}
    </ChakraProvider>
  )
}