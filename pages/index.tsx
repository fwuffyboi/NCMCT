import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Script from 'next/script'
import { Navbar } from '../components/navbar'
// import styles from '../styles/somethingBIG.css'
// TODO: Fix weird page colors
const IndexPage: NextPage = () => {
    const textGap = "py-5";

  return (
    <div className='h-screen bg-slate-800'>
        <Navbar />

        <div className="text-9xl font-bold m-5">
            <h1>TPAPI</h1>
        </div>
    </div>
  )
}

export default IndexPage
