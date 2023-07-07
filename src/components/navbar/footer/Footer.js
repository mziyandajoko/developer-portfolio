import Layout from '@/components/layout/Layout'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className='w-full border-t-2 border-solid border-dark font-medium text-lg'>
        <Layout className='py-8 flex item-center justify-between'> 
            <span>{new Date().getFullYear()} &copy; All Rights Reserved</span>
            <Link href='#'>Build by Mziyanda Joko</Link>
            <Link href='#'>Say Hello</Link>

        </Layout>

    </footer>
  )
}

export default Footer