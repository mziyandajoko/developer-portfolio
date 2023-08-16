 import AnimatedText from '@/components/animatedText/AnimatedText'
import Layout from '@/components/layout/Layout'
import Head from 'next/head'
import Image from 'next/image'
import React from 'react'
 
 export const About = () => {
   return (
    <>
        <Head>
            <title>Mziyanda Joko | About Page</title>
            <meta name="description" content="Mziyanda Joko  About Page" />
        </Head>
        <main className='flex w-full flex-col items-center justify-center'>
            <Layout className='pt-16'>
                <AnimatedText className='mb-16'  text='Crafting Exceptional Digital Experiences: Elevating Brands with Bespoke Web Development Solutions'/>
                <div className=' grid w-full grid-cols-8 gap-16'>
                    <div className='col-span-3 flex flex-col items-start justify-start'>
                        <h2 className='mb-4 text-lg font-bold uppercase text-dark/75'>About Me</h2>
                        <p className='font-medium'>
                        I am dedicated to crafting exceptional digital experiences that help businesses thrive online.
                         With a keen eye for detail and a passion for innovation, 
                         I meticulously tailor each project to suit your unique needs and objectives. 
                         By seamlessly blending technology with creativity, I bring your vision to life 
                         with intuitive and visually stunning websites,web applications, 
                         and e-commerce platforms.
                        </p>
                    </div>
                    <div className='col-span-3 relative h-max rounded-2xl border-2 border-dark border-solid
                    bg-light p-8
                    '>
                        <div className='absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark' />
                        {/* <Image src={profilePic} alt='aboot me profile image' className='w-full h-auto rounded-2xl'/> */}
                    </div>
                </div>

            </Layout>
        </main>
    </>
   )
 }
 