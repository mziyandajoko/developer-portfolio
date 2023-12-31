import React from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import {motion} from 'framer-motion'
import Logo from './Logo'
import { GithubIcon, LinkedInIcon } from '../icons/icons'

const CustomLink = ({title, href, className=""}) => {
    const router = useRouter();
    return(
        <Link href={href} className={`${className} relative group`}>
         {title}
            <span className={`h-[1px] inline-block  bg-dark left-0 -bottom-0.5 w-0 absolute 
             group-hover:w-full transition-[width] ease duration-300
             
             ${router.asPath === href ? 'w-full' : 'w-0'}
             `}>&nbsp;</span>
        </Link>
    );
} 

function Navbar() {
  return (
    <header className='w-full px-32 py-8  font-medium flex items-center justify-between'>
    <nav>
        <CustomLink href='/' title='Home' className='mr-4 '/>
        <CustomLink href='/About' title='About' className='mx-4' />
        <CustomLink href='/portfolio' title='portfolio' className='mx-4' />
        <CustomLink href='/articles' title='articles' className='ml-4' />
    </nav>


    <nav 
    className='flex items-center justify-center flex-wrap h-auto'>
        <motion.a 
        target={"_blank"}
        whileHover={{y: -2}}
        whileTap={{scale: 0.9}}
        className='mr-2 w-6' href='https://github.com/mziyandajoko/'><GithubIcon /></motion.a>
        <motion.a href='https://www.linkedin.com/in/mziyanda-joko-72b40b134/' target={"_blank"}
        whileHover={{y: -2}}
        whileTap={{scale: 0.9}} 
        className='mr-2 w-6'><LinkedInIcon /></motion.a>
        
    </nav>
    <div className='absolute left-[50%] top-2 translate-x-[-50%]'>
    <Logo />

    </div>
    </header>
  )
}

export default Navbar