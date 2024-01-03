import Link from 'next/link'


const CumstomLink = ({href, tittle, className=''}) => {
  return <Link href={href} className={className}>
   {tittle}
  </Link>
}

function Navbar() {
  
  return (
    <div>

    <header className= 'hidden text-white  w-full fixed  top-0 , left-0 right-0 z-10 md:flex '>
    <nav className=' m-10  mx-auto md:flex md:justify-between '>
  
    <CumstomLink href='/' tittle='Home' className='px-4'/>
    <CumstomLink href='/pages/about' tittle='About' className='px-4'/>
    <CumstomLink href='/pages/projects' tittle='Projects' className='px-4'/>
    <CumstomLink href='/pages/contact' tittle='Contact' className='px-4'/>
    
   </nav>
    </header>
    </div>
  )
}

export default Navbar
