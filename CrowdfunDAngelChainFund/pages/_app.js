"use client"
import Layout from '../components/Layout'
import  '../style/global.css'
function MyApp({ Component, pageProps }) {
  return( 
     <Layout>
   <Component {...pageProps} />
  </Layout>
  )
}

export default MyApp
