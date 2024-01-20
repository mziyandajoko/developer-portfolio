import Image from 'next/image'
import backgroundImage from '@/assets/home/background-home-desktop.jpg'
import HireMeButton from '@/app/components/hireMeButton/page'
import Heading_1 from './components/headers/heading-1/page'
export default function Home() {
  return (
   <main className='text-white md:flex md:flex-col justify-around'>
    <Image
      alt="Mountains"
      src={backgroundImage}
      placeholder="blur"
      quality={100}
      fill
      sizes="100vh"
      style={{
        objectFit: 'cover',
        
        
      }}
      className='-z-10'
    />
      <div className='flex flex-col md:justify-between p-20 z-30 md:flex-row'>
        <div className='flex flex-col items-start w-full md:w-[60%]'>

        <h2 className='text-2xl  md:text-3xl text-purple-200'>Web Developer</h2>
       <Heading_1 title='Mziyanda Joko' className='' />
        <p className='text-sm flex items-center md:text-base'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, aliquam magni,
           obcaecati dolor laboriosam tempore quis voluptatem libero laborum soluta,
           laudantium quam. Modi culpa numquam quo necessitatibus amet recusandae aspernatur.
        </p>
        <button className=' py-2 mt-5  bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 rounded-lg'>Resume</button>
        </div>
        <div>
         <HireMeButton />
        </div>

      </div>
    </main>
  )
}
 