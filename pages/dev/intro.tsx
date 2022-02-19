import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Navbar } from '../../components/navbar'

const Home: NextPage = () => {
  return (
    <div id="root">
      <Navbar />
      
      <noscript>You need to enable JavaScript to run this app.</noscript>
      <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 items-center justify-center flex h-1 sm:h-screen lg:h-screen">
        
        {/*screen 1, title.*/}
        <div className=''>
          <h1 className="text-white text-5xl pb-5">Welcome To Cosmos Cat</h1>
          <p className='text-white text-3xl text-center'>Social media, open source.</p>
        </div>

      </div>

      <div className="bg-gradient-to-r from-gray-800 to-black items-left justify-left p-3 flex h-1 sm:h-screen lg:h-screen">
        
        {/*screen 2, about the developers.*/}
        <div className=''>
        <h1 className="text-white text-5xl pb-5">DO THIS</h1>
          <h1 className="text-white text-5xl pb-5">--</h1>
          <p className='text-white text-3xl text-left'>--</p>
        </div>

      </div>
    </div>
  )
}

export default Home
