import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

        <div className="w-full h-screen flex items-center justify-center text-blue-500">
          <h1 className="text-blue-500 font-bold">Next TS + Tailwind Template</h1>
        </div>
    </div>
  )
}

export default Home