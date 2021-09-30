import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import ArticleSection from '../components/articles/ArticleSection'
import Footer from '../components/Footer'
import IntroSection from '../components/IntroSection'
import Navbar from '../components/Navbar'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>I-Fun Times Magazine</title>
        <meta name="description" content="I-Fun Times Magazine for people by young social activists, isomo scholarship" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

   
      <div className="px-2 py-2 md:py-10 md:px-10 lg:px-20">
           {/* navbar */}
      <Navbar/>
      <div className="flex justify-center">
        <div className="w-full md:w-4/5">
        <div>
        <IntroSection/>
        <ArticleSection/>
        <hr />
        <Footer/>
        </div>
        </div>
      </div>
      </div>
 


    </div>
  )
}

export default Home
