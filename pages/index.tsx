import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Script from 'next/script'
import { Navbar } from '../components/navbar-smthBig'
// import styles from '../styles/somethingBIG.css'
// TODO: Fix weird page colors
const Home: NextPage = () => {
    const textGap = "py-5";

  return (
    <div className='h-screen bg-slate-800'>
        <Navbar />

        <div className="text-5xl m-5">
            <h1 className={textGap}>Hello.</h1>
            <h1 className={textGap}>This site is currently dormant as the developers are rethinking it&apos;s future.</h1>
            <h1 className={textGap}>To view the old site, click on the archive icon above.</h1>
            <h1 className={textGap}>Thank you for visiting.</h1>
            <h1 className={textGap}>Sincerely, The Cosmos-Cat Team<span className='blink'>_</span></h1>
        </div>

        <div className="parent bg-cover bg-slate-700" id="bottom">
            
            <div className="block1 bg-slate-700">
                <Image src='/cautionImg.png' layout='fill' className="c1" />
                <div className="c2"></div>
                <div className="c3"></div>
            </div>

            <div className="block2">
                <Image src='/cautionImg.png' layout='fill' className="c1" />
                <div className="c2"></div>
                <div className="c3"></div>
            </div>

            <div className="block3">
                <Image src='/cautionImg.png' layout='fill' className="c1" />
                <div className="c2"></div>
                <div className="c3"></div>
            </div>

            <div className="block4">
                <Image src='/cautionImg.png' layout='fill' className="c1" />
                <div className="c2"></div>
                <div className="c3"></div>
            </div>

            <div className="block5">
                <Image src='/cautionImg.png' layout='fill' className="c1" />
                <div className="c2"></div>
                <div className="c3"></div>
            </div>
        </div>
    </div>
  )
}

export default Home
