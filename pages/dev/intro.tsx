import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Navbar } from '../../components/navbar'

const Home: NextPage = () => {
  return (
    <div>
      <Navbar />
      <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 items-center justify-center flex h-1/2 sm:h-3/5 lg:h-screen">
        <div className=''>
          <h1 className="text-white text-5xl text-center pb-5">Welcome To Cosmos Cat</h1>
          <p className='text-white text-3xl text-center'>Social media, open source.</p>
          <div>

          </div>
        </div>

      </div>
    </div>
  )
}

export default Home
