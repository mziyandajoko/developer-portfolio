import Image from 'next/image'
import React from 'react'
import hireMeImage from '../../../public/images/profile/FlutterReactWordpressDeveloper.png'
import Link from 'next/link'

const HireMe = () => {
  return (
    <div className='fixed left-4 bottom-4 flex items-center justify-center overflow-hidden'>
        <div className='w-48 h-auto flex items-center justify-center relative'>

        <Image alt='Hire me' src={hireMeImage} />
        <div>
            <Link href='mailto:joko.mzee@gmail.com' target={'_blank'} 
            className='font-semibold flex items-center justify-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark text-light shadow-md border border-solid border-dark 
            rounded-full w-20 h-20 
            hover:bg-light hover:text-dark'>Hire Me</Link>
        <div/>
        </div>
    </div>
    </div>

  )
}

export default HireMe