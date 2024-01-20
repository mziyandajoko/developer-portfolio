import Link from 'next/link'


const CumstomLink = ({href, tittle, className=''}) => {
  return <Link href={href} className={`${className} relative group`}>
    {tittle}
    {/* <span className='h-[1px] inline-block w-0 bg-dark  absolute -bottom-0.1 left-0
      group-hover:w-full transition-[width] ease-in-out duration-300
    '>&nbsp;</span> */}
  </Link>
}

function Navbar() {
  
  return (
    <div>

    <header className= ' text-white  bg-slate-500 w-full fixed  top-0  left-0 right-0 z-10'>
    <nav className='flex justify-between m-5'>
      <div className=''>
        Logo
      </div>
      <div className='hidden md:flex'>
        <CumstomLink href='/' tittle='Home' className='px-4'/>
        <CumstomLink href='/pages/about' tittle='About' className='px-4'/>
        <CumstomLink href='/pages/projects' tittle='Projects' className='px-4'/>
        <CumstomLink href='/pages/contact' tittle='Contact' className='ml-4'/>
      </div>
   </nav>
    </header>
    </div>
  )
}

export default Navbar
