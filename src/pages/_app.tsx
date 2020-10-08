import { AppProps } from 'next/app'

import { ThemeProvider } from 'contexts/ThemeContext'

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default App
