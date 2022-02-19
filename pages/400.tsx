import type { NextPage } from 'next'
import Link from 'next/link'

const FourZeroZero: NextPage = () => {
    return (
        <div className="flex h-screen bg-black text-white">
            <div className="m-auto">
            <svg xmlns="http://www.w3.org/2000/svg" width="128" height="128" fill="white" viewBox="0 0 16 16">
                <path d="M11.46.146A.5.5 0 0 0 11.107 0H4.893a.5.5 0 0 0-.353.146L.146 4.54A.5.5 0 0 0 0 4.893v6.214a.5.5 0 0 0 .146.353l4.394 4.394a.5.5 0 0 0 .353.146h6.214a.5.5 0 0 0 .353-.146l4.394-4.394a.5.5 0 0 0 .146-.353V4.893a.5.5 0 0 0-.146-.353L11.46.146zM8 4c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995A.905.905 0 0 1 8 4zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
            </svg>
                <h1 className="text-2xl">Bad request. (400)</h1>
                <h1 className="text-2xl">If you believe this was in error, contact us below.</h1>
                <Link href="mailto:biscuitisnotacookie@protonmail.com">
                    <a className="text-2xl cursor-pointer">biscuitisnotacookie@protonmail.com</a>
                </Link>
            </div>
        </div>
    )
  }
  
export default FourZeroZero