import Layout from '@/components/Layout'
import Head from 'next/head'
import Image from 'next/image'
import profilePic from "../../public/images/profile/homepage.png"
import AnimatedText from '@/components/AnimatedText'
import Link from 'next/link'
import { LinkArrow } from '@/components/icons'
import HireMe from '@/components/HireMe'
import lightBulb from "../../public/images/svgs/miscellaneous_icons_1.svg"

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        
      </Head>
      <main className='flex items-center text-dark w-full min-h-screen mb-100 dark:text-light pt-0'>
        <Layout className='pt-0 md:pt-16 sm:pt-8 xl:pt-0'>
          <div className="flex justify-between items-center w-full lg:flex-col">
            <div className='w-1/2 md:w-full '>
            <Image src={profilePic} alt="CodeBucks" className="w-full h-auto lg:hidden md:inline-block md:w-full " priority
              sizes='(max-width: 768px) 100vw,
                      (max-width:1200px 50vw,
                      50vw'
            />
            </div>
            <div className='w-1/2 flex flex-col items-center self-center lg:w-full lg:text-center'>
              <AnimatedText text="Transforming Ideas Into Digital Realities Through Code and Design." className='!text-6xl !text-left
              xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl
              '/>
              <p className='my-4 text-xl font-medium md:text-md sm:text-xs '>
              Passionate Frontend Software Developer with a flair for creating visually appealing and highly functional user interfaces. 
              Dedicated to delivering seamless and responsive web experiences through a combination of technical 
              expertise and creative problem-solving
              </p>

              <h2 className='font-bold text-primary self-start text-2xl  md:text-md sm:text-[16px] dark:text-blue-600'>Email: abhijeetrajputsac@gmail.com</h2>
              <h2 className='font-bold text-primary self-start text-2xl  md:text-md sm:text-[16px] dark:text-blue-600'>Conatct: +91 9594076439</h2>

              <div className='flex items-center self-start mt-2 lg:self-center'>
                <Link href="https://drive.google.com/file/d/1auJKpyggseD-t-uVnUh46TglgcXk3-Cj/view?usp=sharing" className="flex items-center
                 bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold 
                hover:bg-light hover:text-dark border-2 border-solid border-transparent dark:bg-light dark:text-dark hover:border-dark
                  hover:dark:text-light hover:dark:bg-blue-700 hover:dark:border-light md:p-2 md:px-4 md:text-base
                 " target='_black'>
                Resume <LinkArrow className={"w-6 ml-1"}/></Link>
                
                <Link href="mailto:abc@gmail.com" target={"_blank"} className='dark:text-light ml-4 text-lg font-medium 
                 text-dark underline md:text-base dark:hover:text-blue-700'>
                  Contact
                </Link>  
              </div>
            </div>
          </div>
        </Layout>
        <HireMe />
        <div className='absolute right-8 bottom-1 inline-block w-24 md:hidden  '>
          <Image src={lightBulb} alt='AB' className='w-full h-auto '/>
        </div>
      </main>
    </>
  )
}
