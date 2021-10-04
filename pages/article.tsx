
import Head from 'next/head'
import { useContext, useEffect, useState } from 'react'
import Article from '../components/articles/Article'
import ArticleSection from '../components/articles/ArticleSection'
import { UserContext } from '../components/context/ContextProvider'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import { checkLocalStorage } from '../util/checkLocalStorage'

export default function article():JSX.Element {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const {mode}:any = useContext(UserContext)
  // setting the theme
// eslint-disable-next-line react-hooks/rules-of-hooks
const [dark,setDark] = useState(false)
// eslint-disable-next-line react-hooks/rules-of-hooks
useEffect(() => {
 let darkmode:any = checkLocalStorage("darkmode")
 setDark(darkmode)
},[mode])

  return (
    <div>
      <Head>
        <title>I-Fun Times Magazine | Article</title>
        <meta name="description" content="I-Fun Times Magazine for people by young social activists, isomo scholars" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

   
      <div className={`px-2 py-2 md:py-10 md:px-10 lg:px-20 ${dark?' darkMode':''}`}>
           {/* navbar */}
      <Navbar/>
      <div className="flex justify-center">
        <div className="w-full md:w-4/5">
        <div>
        <Article/>
        <h1 className="text-black text-2xl font-bold p-2">Other articles</h1>
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

