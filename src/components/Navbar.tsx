import Link from "next/link";

export default function Navbar() {
  return (
    <div className="flex flex-wrap">
    <div className="w-full">
      <nav className="flex items-center justify-between px-2 py-3 rounded" style={{ backgroundColor: "#c76691" }}>
        <div className="container px-4 mx-auto flex items-center justify-between">

          {/* Logo and Title */}
          <div className="flex items-center space-x-3">
            <img className="h-12 w-12" src="https://utfs.io/f/ShHtJId4pBZ8MkHiQoA7Y5S9bmv8Ki4BEpPrt6ZXnkofdgGu"/>
            <a className="text-lg font-bold uppercase text-white" href="/">
              Study Pawtner
            </a>
          </div>
  
          {/* Navigation Links */}
          <div className="flex items-center space-x-6">
            <a className="px-4 py-2 text-base uppercase font-bold leading-snug text-white hover:opacity-75" href="/">
              Home Page
            </a>
            <a className="px-4 py-2 text-base uppercase font-bold leading-snug text-white hover:opacity-75" href=".../pet">
              Pet Page
            </a>
          </div>
        </div>
      </nav>
    </div>
  </div>  
  )
}