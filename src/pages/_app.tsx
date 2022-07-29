import Footer from '@/components/frame/Footer'
import Layout from '@/components/frame/Layout'
import Nav from '@/components/frame/Nav'
import  { wrapper } from '@/modules/store'
import '@/styles/globals.css'
import { AppProps } from 'next/app'
import { Provider } from 'react-redux'


function App({ Component, pageProps: {...pageProps}  }: AppProps) {
  return (
    <div>
      <Nav/>
      <Layout>
          <Component {...pageProps} />
      </Layout> 
      <Footer />
    </div>
  )
}

export default wrapper.withRedux(App) 
// export default App