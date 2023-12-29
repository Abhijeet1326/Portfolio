import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import Head from 'next/head'
import React, { useEffect, useRef } from 'react'
import Image from 'next/image'
import profilePic from "../../public/images/profile/Untitled.png"
import { useInView, useMotionValue, useSpring } from 'framer-motion'
import Skills from '@/components/Skills'
import Experience from '@/components/Experience'
import Education from '@/components/Education'

const AnimatedNumbers = ({value}) => {
    const ref = useRef(null);
    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue, { duration:3000 });
    const isInView = useInView(ref, {once:true});

    useEffect(() => {
      if(isInView){
        motionValue.set(value);
      }
    }, [isInView, motionValue, value])
 
    useEffect(() => {
        springValue.on("change", (latest) => {
            if(ref.current && latest.toFixed(0) <= value) {
                ref.current.textContent = latest.toFixed(0)
            }
        })      
      }, [springValue, value])
    

    return <span ref={ref}></span>
}

const About = () => {
  return (
    <>
        <Head>
            <title>CodeBucks | About Page</title>
            <meta name='description' content='any description'/>
        </Head>
        <main className='flex w-full flex-col items-center justify-center dark:text-light '>
            <Layout className='py-16'>
                <AnimatedText text="Consistent, Tenacious, Dedicated, Succeeding." className='mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8'/>
                <div className='grid w-full grid-cols-8 gap-16 sm:gap-8'>
                    <div className='col-span-3 flex-col items-start justify-start xl:col-span-4 md:order-2 md:col-span-8'>
                        <h2 className='mb-4 text-left font-bold uppercase text-dark/75 dark:text-light'>Biography</h2>
                        <p className='font-medium'>
                        As a budding web developer, Abhijeet Rajput possesses a keen passion for transforming digital landscapes through 
                        innovative and user-centric web solutions. Armed with a solid foundation in programming languages such as 
                        HTML, CSS, and JavaScript, has successfully completed academic projects showcasing a 
                        knack for crafting visually appealing and functional websites.
                        </p>

                        <p className='font-medium my-4'>
                        With a commitment to staying abreast of the latest industry trends and technologies, 
                        I am poised to contribute fresh perspectives and creative problem-solving skills to any web development team. 
                        </p>

                        <p className='font-medium'>
                        Beyond technical prowess, I will bring a strong work ethic, a quick learning ability, and a collaborative spirit, 
                        making me a promising addition to the dynamic world of web development.
                        </p>
                    </div>

                    <div className='col-span-3 relative h-max rounded-2xl p-8
                    border-2 border-solid border-dark bg-light dark:bg-dark dark:border-light xl:col-span-4 md:order-1 md:col-span-8
                    '>
                        <div className='absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light'/>
                        <Image src={profilePic} alt="AB" className="w-full h-auto rounded-2xl"
                            priority
                            sizes='(max-width: 768px) 100vw,
                            (max-width:1200px 50vw,
                            33vw'
                        />
                    </div>

                    <div className='col-span-2 flex flex-col items-end justify-between xl:col-span-8 xl:flex-row xl:items-center md:order-3'>
                        {/* Clients */}
                        <div className='flex flex-col items-end justify-center dark:text-blue-600 xl:items-center'>
                            <span className='inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl'>
                                <AnimatedNumbers value={3}/>+
                            </span>
                            <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light/75
                            sm:text-base xs:text-sm md:text-lg xl:text-center
                            '>satisfied clients</h2>
                        </div>
                        
                        {/* projects */}
                        <div className='flex flex-col items-end justify-center dark:text-blue-600 xl:items-center'>
                            <span className='inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl'>
                                <AnimatedNumbers value={6}/>+
                            </span>
                            <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light/75
                            sm:text-base xs:text-sm md:text-lg xl:text-center
                            '>projects completed</h2>
                        </div>

                        {/* experience */}
                        <div className='flex flex-col items-end justify-center dark:text-blue-600 xl:items-center'>
                            <span className='inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl'>
                                <AnimatedNumbers value={1}/>+ 
                            </span>
                            <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light/75
                            xl:text-center sm:text-base xs:text-sm md:text-lg
                            '>years of ecperience</h2>
                        </div>
                    </div>
                </div>
                <Skills />
                <Experience />
                <Education />
            </Layout>
        </main>
    </>
  )
}

export default About