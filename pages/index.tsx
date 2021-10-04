import type { NextPage } from 'next'
import Head from 'next/head'
import { useContext, useEffect, useState } from 'react'
import ArticleSection from '../components/articles/ArticleSection'
import { UserContext } from '../components/context/ContextProvider'
import Footer from '../components/Footer'
import IntroSection from '../components/IntroSection'
import Navbar from '../components/Navbar'
import { checkLocalStorage } from '../util/checkLocalStorage'

const Home: NextPage = () => {

  const {mode}:any = useContext(UserContext)
  // setting the theme
const [dark,setDark] = useState(false)
useEffect(() => {
 let darkmode:any = checkLocalStorage("darkmode")
 setDark(darkmode)
},[mode])

  return (
    <div>
      <Head>
        <title>I-Fun Times Magazine</title>
        <meta name="description" content="I-Fun Times Magazine for people by young social activists, isomo scholars" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

   
      <div className={`px-2 py-2 md:py-10 md:px-10 lg:px-20 ${dark?' darkMode':''}`}>
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
