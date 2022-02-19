import Link from 'next/link'

export const Footer = () => {
    return (
      <div className="nav text-sm">
        <nav className="bg-gradient-to-r from-gray-800 to-black px-2 text-white py-1">
          <div className="flex">
            <div className="px-2 w-1/8 h-12">
              <Link href="/">
                Home
              </Link>
            </div>
            <div className="px-2 w-1/8 h-12">
              <Link href="/dev">
                Dev
              </Link>
            </div>
            <div className="px-2 w-1/8 h-12">
              <Link href="/sitemap.xml">
                Sitemap
              </Link>
            </div>
            
            <div className="px-2 w-1/8 h-12">
              <Link href="https://github.com/fwuffyboi/cosmos3">GitHub</Link>
            </div>

            <div className="w-1/8 px-2 h-12">
            <Link href="/license">License</Link>
            </div>
            
            <div className="w-1/8 px-2 h-12">
              <h1>Icons by </h1>
              <div className="text-blue-400">
                <Link href="https://icons.getbootstrap.com">
                    Bootstrap
                </Link>
              </div>
            </div>
            
            <div className="text-smn px-2 w-1/8">

              <div className="text-blue-400 text-sm">
                <Link href="https://github.com/JolteonYellow">
                  JolteonYellow
                </Link>
              </div>
              <div className="text-blue-400 text-sm">
                <Link href="https://github.com/fwuffyboi">
                  Fwuffyboi
                </Link>
              </div>
            </div>

            <div className="w-1/8 px-2 h-12">
              <img className="block mx-auto h-12 rounded-full sm:mx-0 sm:shrink-0" src="https://avatars.githubusercontent.com/u/46378904?v=4" alt="JolteonYellow's github profile picture" />
            </div>
            <div className="w-1/8 px-2 h-12">
              <img className="block mx-auto h-12 rounded-full sm:mx-0 sm:shrink-0" src="https://avatars.githubusercontent.com/u/73500040?v=4" alt="Fwuffyboi's github profile picture" />
            </div>
            
          </div>

        </nav>
      </div>
    )
}