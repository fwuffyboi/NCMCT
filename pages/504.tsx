import type { NextPage } from 'next'
import Link from 'next/link'

const FourZeroThree: NextPage = () => {
    return (
        <div className="flex h-screen bg-black text-white">
            <div className="m-auto">
                <svg xmlns="http://www.w3.org/2000/svg" width="128" height="128" fill="white" viewBox="0 0 16 16">
                    <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                </svg>
                <h1 className="text-2xl">Gateway error. (504)</h1>
                <h1 className="text-2xl">Please try that again, if this problem persists, contact us below.</h1>
                <Link href="mailto:biscuitisnotacookie@protonmail.com">
                    <a className="text-2xl cursor-pointer">biscuitisnotacookie@protonmail.com</a>
                </Link>
            </div>
        </div>
    )
  }
  
export default FourZeroThree