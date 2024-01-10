import Link from 'next/link'

function HireMeButton() {
  return (
   <div className=''>
            <Link href='mailto:joko.mzee@gmail.com' target={'_blank'} 
            className='font-semibold h-20 w-20 bg-white text-black hover:shadow-md border hover:border-solid hover:border-black 
            rounded-full  
            hover:bg-light hover:text-dark p-42'>Hire Me</Link>
    </div> 
  )
  }

export default HireMeButton