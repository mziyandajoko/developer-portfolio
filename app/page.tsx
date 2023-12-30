import Image from 'next/image'
import backgroundImage from '@/assets/home/background-home-desktop.jpg'
import HireMeButton from '@/app/components/hireMeButton/page'
export default function Home() {
  return (
   <main className='text-white  '>
    <Image
      alt="Mountains"
      src={backgroundImage}
      placeholder="blur"
      quality={100}
      fill
      sizes="100vw"
      style={{
        objectFit: 'cover',
        
      }}
      className='-z-10'
    />
      <div className='flex min-h-screen flex-col items-center justify-between p-24 z-30 md:flex-row'>
        <div className='flex flex-col items-start w-full md:w-[60%]'>

        <h1>Mziyanda Joko</h1>
        <h2>Web Developer</h2>
        <p className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, aliquam magni,
           obcaecati dolor laboriosam tempore quis voluptatem libero laborum soluta,
           laudantium quam. Modi culpa numquam quo necessitatibus amet recusandae aspernatur.
        </p>
        </div>
        <div>
         <HireMeButton/>
        </div>

      </div>
    </main>
  )
}
