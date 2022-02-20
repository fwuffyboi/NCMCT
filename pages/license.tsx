import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Navbar } from '../components/navbar'
import { Footer } from '../components/footer'

const Home: NextPage = () => {
  return (
    <div id="root">
      <Navbar />
      <noscript>You need to enable JavaScript to run this app.</noscript>

      <div className="bg-gradient-to-r from-gray-800 to-black flex h-1 sm:h-screen lg:h-screen">
        
        {/*screen 2, about the developers.*/}
        <div className=''>
        <h1 className="text-white text-5xl pb-5 px-5 py-5">Project license</h1>
            <p className='text-white text-1xl pb-5 px-5 py-5'>
                &#34;Copyright © 2022 fwuffyboi &amp; JolteonYellow<br /><br />

                Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:<br /><br />

                 - The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.<br />

                 - THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.&#34;
            </p>
        </div>

      </div>
      <Footer />
    </div>
  )
}

export default Home
