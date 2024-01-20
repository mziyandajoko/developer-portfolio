import Link from 'next/link'

function HireMeButton() {
  return (
    <div className='flex items-center py-10'>

<Link href='mailto:joko.mzee@gmail.com' target={'_blank'} 
            className='font-semibold  text-black  w-36 h-36 bg-purple-50 rounded-full flex justify-center items-center text-center p-5 shadow-xl
       hover:bg-light hover:text-dark p-42'>Hire Me</Link>
            </div>
  )
  }

export default HireMeButton