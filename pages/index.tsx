import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.scss'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

export default function Home(){
  const router = useRouter()
  useEffect(() => {
    const timer = setTimeout(() => router.push('new/index.html'), 10);
  }, []);
  // router.push('new/Andrey.htm')
  return (
    <>
      <div className={styles.container}>
        <Head>
          <title>Next App</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
      </div>
      
    </>
  )
}