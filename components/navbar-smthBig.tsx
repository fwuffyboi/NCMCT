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
            <Link href="https://github.com/fwuffyboi/cosmos3">
              <div className="">
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                </svg>
                {/*<h1>GitHub</h1>*/}
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