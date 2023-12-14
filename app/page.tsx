import Image from 'next/image'
import backgroundImage from '@/assets/home/background-home-desktop.jpg'
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
      <div className='flex min-h-screen flex-col items-center justify-between p-24 z-30'>
        <div className='flex flex-col items-center'>

        <h1>Mziyanda Joko</h1>
        <h2>Web Developer</h2>
        <p className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, aliquam magni,
           obcaecati dolor laboriosam tempore quis voluptatem libero laborum soluta,
           laudantium quam. Modi culpa numquam quo necessitatibus amet recusandae aspernatur.
        </p>
        </div>
        <div>
          Hire Me
        </div>

      </div>
    </main>
  )
}
