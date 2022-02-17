import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Intro: NextPage = () => {
  return (
    // Div for whole intro page.
    <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 h-screen">
      <div className='absolute translate-y-1/2 top-1/2 -translate-x-1/2 left-1/2'>
        <h1 className="text-white text-5xl text-center pb-5">Welcome To Cosmos Cat</h1>
        <p className='text-white text-3xl text-center'>Social media, open source.</p>
        <div >

        </div>
      </div>

    </div>
  )
}

export default Intro
