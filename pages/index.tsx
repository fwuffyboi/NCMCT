import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Script from 'next/script'
import { Navbar } from '../components/navbar-smthBig'
// import styles from '../styles/somethingBIG.css'

const Home: NextPage = () => {
  return (
    <div className='h-screen bg-slate-700'>
        <Navbar />
        <link rel="stylesheet" 
            type="text/css" 
            href="/smthBig.css">
        </link>
        <link rel="preconnect" 
              href="https://fonts.gstatic.com">
        </link>
        <link href="https://fonts.googleapis.com/css2?family=Chakra+Petch:wght@600;700&apos;display=swap" 
              rel="stylesheet">        
        </link>
        
        <div className="bg-slate-700 text-5xl">
            <h1>Hello.</h1>
            <br />
            <h1>This site is currently dormant as the developers are rethinking it&apos;s future.</h1>
            <br />
            <h1>Thank you for visiting.</h1>
            <br /><br />
            <h1>Sincerely, The Cosmos-Cat Team<a className='blink'>_</a></h1>
        </div>
        
        <div className="parent bg-cover bg-slate-700" id="bottom">
            <div className="block1 bg-slate-700">
                <Image src='/cautionImg.png' layout='fill' className="c1" />
                <div className="c2"></div>
                <div className="c3"></div>
            </div>

            <div className="block2 bg-cover bg-slate-700">
                <Image src='/cautionImg.png' layout='fill' className="c1" />
                <div className="c2"></div>
                <div className="c3"></div>
            </div>
        </div>
    </div>
  )
}

export default Home
