import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

export default function Home() {

  const router = useRouter()

 
   useEffect(() => {
      
        router.push('/dashboard')
   
   })
   

  return (
    <>
     
       </>
  )
}
