import Footer from '@/components/frame/Footer'
import Layout from '@/components/frame/Layout'
import Nav from '@/components/frame/Nav'
import store, { wrapper } from '@/modules/store'
import '@/styles/globals.css'
import { AppProps } from 'next/app'
import { Provider } from 'react-redux'


function App({ Component, pageProps: {...pageProps}  }: AppProps) {
  return (
  <Provider store = {store}>
      <Nav/>
      <Layout>
          <Component {...pageProps} />
      </Layout> 
      <Footer/>
    </Provider>
  )
}

export default wrapper.withRedux(App) 
// export default App