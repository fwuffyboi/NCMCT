import Link from 'next/link'

export const Navbar = () => {
    return (
      <div className="nav">
        <nav>
          <div className="nav-left h-20 p-5">
            <Link href="/api/home">
              <img src="/favicon.ico" alt="logo" className='h-12 cursor-pointer hover:-translate-y-1 transition ease-in-out delay-150 duration-200'/>
            </Link>          
          </div>
          <div className="">
            
          </div>
        </nav>
      </div>
    )
}