import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Layout from '@/components/layout/Layout'
import profilePic from '../../public/images/profile/developer-pic-1.png'
import AnimatedText from '@/components/animatedText/AnimatedText'
import Link from 'next/link'
import { LinkArrow } from '@/components/icons/icons'
import HireMe from '@/components/animatedText/HireMe'
import lightBulb from '../../public/images/svgs/miscellaneous_icons_1.svg'

export default function Home() {
  return (
    <>
      <Head>
        <title>Joko Mziyanda portfolio</title>
        <meta name="description" content="Generated by create next app" />
        
      </Head>
      <main className='flex items-center text-dark w-full min-h-screen'>
          <Layout className='pt-0'  >
            <div className='flex items-center justify-between w-ful'>
              <div className='w-1/2'>
                <Image alt='Mziyanda Joko' src={profilePic} className=' w-full h-auto' />
              </div>
              <div className='w-1/2 flex flex-col item-center self-center'>
                
                  <AnimatedText Text='Turning Vision Into Reality With Code And Design.' classname='!text-6xl !text-left'/>
                <p className='my-4 text-base font-medium '>Hi, my name is Mziyanda Joko but you can call me Joko
My passion for coding began during high school, since then I was sold and wanted to know more and the journey never stopped ever since. I am also a sports person and play Cricket on weekends when I am not coding something on the side</p>
                <div className='flex item-center  self-start mt-2'>
                <Link href='/MziyandaJokoFrontEndDeveloper.pdf' target={'_blank'}
                className='flex items-center bg-dark text-white text-lg font-semibold px-6 p-2.5 rounded-lg
                hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark 
                '
                download={true}
                >Resume <LinkArrow className='w-6 ml-1' /></Link>
                  <Link href='mailto:joko.mzee@gmail.com' target={'_blank'} className='ml-4 capitalize text-dark underline font-medium text-lg flex items-center'>Contact</Link>
                </div>
              </div>
            </div>
          </Layout>
          <HireMe />
        <div className='absolute right-8 bottom-8 inline-block w-24'>
          <Image src={lightBulb} alt="lightBulb"  className='w-full h-auto'/>
        </div>
      </main>
    </>
  )
}