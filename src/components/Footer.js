import React from 'react'
import Layout from './Layout'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className='w-full border-t-2 border-solid border-dark font-medium text-lg dark:text-light dark:border-blue-700
      sm:text-base
    '>
        <Layout className='py-8 flex justify-between items-center lg:flex-col lg:py-6 xl:py-10'>
            <span>{new Date().getFullYear()} &copy; All Rights Reserved.</span>
            <div className='felx items-center lg:py-2'>
                Build With <span className='text-primary text-2xl px-1 dark:text-blue-700'>&#9825;</span> 
                by&nbsp; <Link href="/" className='underline'>AbhijeetRajput</Link>
            </div>
            <Link href="mailto:abhijeetrajputsac@gmail.com" target={"_blank"} className='underline hover:dark:text-blue-600'>Mail Me</Link>
        </Layout>
    </footer>
  )
}

export default Footer