import Link from 'next/link'
import Image from 'next/image'

export const Navbar = () => {
  return (
    <div className="nav">
      <nav className="bg-slate-800 flex filter drop-shadow-md px-4 py-4 h-20 items-center">
        <div className="h-12 px-3 cursor-pointer hover:-translate-y-1 transition ease-in-out delay-50 duration-100">
          <Link href="/oldsite">
            <div>
              <Image src="/favicon.ico" alt="favicon.ico" width="48" height="48"/>
            </div>   
          </Link>
        </div>
        <div className="h-12 px-3 cursor-pointer hover:-translate-y-1 transition ease-in-out delay-50 duration-100">
          <Link href="/oldsite">
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="currentColor" viewBox="0 0 16 16">
                <path d="M12.643 15C13.979 15 15 13.845 15 12.5V5H1v7.5C1 13.845 2.021 15 3.357 15h9.286zM5.5 7h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1zM.8 1a.8.8 0 0 0-.8.8V3a.8.8 0 0 0 .8.8h14.4A.8.8 0 0 0 16 3V1.8a.8.8 0 0 0-.8-.8H.8z"/>
              </svg>
            </div>   
          </Link>
        </div>
      </nav>
    </div>
  )
}