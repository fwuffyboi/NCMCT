import type { NextPage } from 'next'
import Link from 'next/link'

const Home: NextPage = () => {
    return (
        <div className="flex h-screen bg-black text-white items-center justify-center flex lg:h-screen">
            <div className="m-auto">
                <svg xmlns="http://www.w3.org/2000/svg" width="128" height="128" fill="white" viewBox="0 0 16 16">
                    <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"/>
                </svg>
                <h1 className="text-2xl">This site is in development. </h1>
                <h1 className="text-2xl">If you would like to see it&apos;s current progress, click the link below.</h1>
                <div className="text-2xl">
                    <Link href="/dev/">
                        /dev/
                    </Link>
                </div>
                <h1 className="text-2xl">----------------------------------------------------</h1>
                <br />
                <h1 className="text-2xl">If you believe this was in error, contact us below.</h1>
                <Link href="mailto:biscuitisnotacookie@protonmail.com">
                    <a className="text-2xl cursor-pointer">biscuitisnotacookie@protonmail.com</a>
                </Link>
            </div>
        </div>
    )
  }
  
export default Home