import Link from 'next/link'

function HireMeButton() {
  return (
   <div>
            <Link href='mailto:joko.mzee@gmail.com' target={'_blank'} 
            className='font-semibold p-32 flex items-center justify-center bg-white text-black hover:shadow-md border hover:border-solid hover:border-black 
            rounded-full w-40 h-40 
            hover:bg-light hover:text-dark'>Hire Me</Link>
    </div> 
  )
  }

export default HireMeButton