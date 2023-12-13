import Image from 'next/image'

export default function Home() {
  return (
   <main className='container'>
    <Image src={'/assets/home/background-home-desktop.jpg'}  height={500} alt='home background image' layout='fill' objectFit='cover' objectPosition='center' />
    Hello world
    </main>
  )
}
