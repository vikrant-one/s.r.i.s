import Head from 'next/head'
import Aboutus from '../components/Aboutus'
import Carosel from '../components/Carosel'
import HeaderTop from '../components/HeaderTop'
import Join from '../components/Join'
import Quote from '../components/Quote'
import TimeLine from '../components/TimeLine'
import Footer from "../components/Footer"
import styles from '../styles/Scroll.module.css'

import Vedio from '../components/Vedio'

 function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>S.R. International Academy</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section  className=" absolute  overflow-hidden "  >
      <HeaderTop />
      <Carosel />
      <Aboutus />
      <Vedio />
      <Join />
      <TimeLine />
      <Quote />
      <Footer /> 
      </section>

      
    
    </div>
  )
}

export default Home;
