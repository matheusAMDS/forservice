import { AppProps } from 'next/app'
import { Provider } from 'next-auth/client'
import { ThemeProvider } from 'contexts/ThemeContext'

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <Provider session={pageProps.session}>
      <ThemeProvider>
        <Component {...pageProps} />
      </ThemeProvider>
    </Provider>
  )
}

export default App
