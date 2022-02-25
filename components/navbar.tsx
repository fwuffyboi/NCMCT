import Link from 'next/link'

export const Navbar = () => {
    return (
      <div className="nav">
        <nav className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 flex filter drop-shadow-md bg-white px-4 py-4 h-20 items-center">
          <div className="h-12 px-3 cursor-pointer hover:-translate-y-1 transition ease-in-out delay-50 duration-100">
            <Link href="/">
              <div>
                <img src="/favicon.ico" alt="favicon.ico" width="48" height="48"/>
              </div>   
            </Link>
          </div>

          <div className="h-12 px-3 cursor-pointer hover:-translate-y-1 transition ease-in-out delay-50 duration-100">
            <Link href="https://trello.com/b/q4vqqj0z/cosmos-cat">
              <div className="">
                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 1000 1000" >
                  <g><g><path d="M898.1,10H101.9C51.3,10,10,51.3,10,101.9v796.3c0,50.5,41.3,91.9,91.9,91.9h796.3c50.5,0,91.9-41.3,91.9-91.9V101.9C990,51.3,948.7,10,898.1,10z M438.8,745c0,33.7-27.6,61.3-61.3,61.3H255c-33.7,0-61.3-27.6-61.3-61.3V255c0-33.7,27.6-61.3,61.3-61.3h122.5c33.7,0,61.3,27.6,61.3,61.3V745z M806.3,561.3c0,33.7-27.6,61.3-61.3,61.3H622.5c-33.7,0-61.3-27.6-61.3-61.3V255c0-33.7,27.6-61.3,61.3-61.3H745c33.7,0,61.3,27.6,61.3,61.3V561.3z"/></g></g>
                </svg>
                {/*<h1>Trello</h1>*/}
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

        </nav>
      </div>
    )
}