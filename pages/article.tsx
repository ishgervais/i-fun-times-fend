
import Head from 'next/head'
import React from 'react'
import Article from '../components/articles/Article'
import ArticleSection from '../components/articles/ArticleSection'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

export default function article():JSX.Element {
  return (
    <div>
      <Head>
        <title>I-Fun Times Magazine | Article</title>
        <meta name="description" content="I-Fun Times Magazine for people by young social activists, isomo scholars" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

   
      <div className="px-2 py-2 md:py-10 md:px-10 lg:px-20">
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

