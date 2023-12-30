import Link from 'next/link'

function Navbar() {
  
  return (
    <div>

    <nav className= 'hidden text-white  w-full fixed  top-0 , left-0 right-0 z-10 md:flex '>
    <ul className=' m-10  mx-auto md:flex md:justify-between '>
  
    <li className='px-10'><Link  href="/" >
      Home
    </Link>
    </li>
    <li>
    <Link  href="/pages/about" >
      About
    </Link>
    </li>
    <li><Link  href="/pages/Projects" >
      Projets page
    </Link>
    </li>
    <li>
    <Link  href="/pages/Contact">
      Contact page
    </Link>
    </li>
   </ul>
    </nav>
    </div>
  )
}

export default Navbar
