import React from 'react'
import Head from 'next/head'
import Layout from '@/components/Layout'
import AnimatedText from '@/components/AnimatedText'
import Link from 'next/link'
import Image from 'next/image'
import { GithubIcon } from '@/components/icons'
import project1 from "../../public/images/projects/weather.png"
import project2 from "../../public/images/projects/todolist.png"
import project6 from "../../public/images/projects/firstwebsite.png"
import project3 from "../../public/images/projects/sankegame.png"
import project4 from "../../public/images/projects/forecast.png"
import project5 from "../../public/images/projects/keepnotes.png"
import {motion} from "framer-motion"

const FramerImage = motion(Image);

const FeaturedProject = ({type, title, summary, img , link, github}) => {
    return (
        <article className='w-full  flex items-center justify-between relative rounded-br-2xl
            rounded-3xl border border-solid border-dark bg-light shadow-2xl p-12 dark:bg-dark dark:border-light
            lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4
        '>
            <div className='absolute top-0 -right-3 -z-10 w-[100.5%] h-[103%] rounded-[2.5rem] bg-dark rounded-br-3xl dark:bg-light
            xs:-right-2 xs:h-[102%] xs:w-full xs:rounded-[1.5rem]'/>
            <Link href={link} target='_blank'
                className='w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full'>
                <FramerImage src={img} alt={title} className='w-full h-auto' 
                    whileHover={{scale:1.05}}
                    transition={{duration:0.2}}
                    priority
                    sizes='(max-width: 768px) 100vw,
                    (max-width:1200px 50vw,
                    33vw'
                />
            </Link>

            <div className='w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6'>
                <span className='text-primary font-medium text-xl dark:text-primaryDark xs:text-base'>{type}</span>
                    <Link href={link} target='_blank'>
                        <h2 className='my-2 w-full text-left text-4xl font-bold hover:underline underline-offset-2 dark:text-light sm:text-lg'>{title}</h2>
                    </Link>
                <p className='my-1 font-medium text-dark dark:text-light sm:text-sm'>{summary}</p>
                <div className='mt-2 flex items-center'>
                    <Link href={github} target='_blank' className='w-10'>
                        <GithubIcon />
                    </Link>
                    <Link href={link} target='_blank' className='dark:bg-light dark:text-dark ml-4 rounded-lg bg-dark text-light 
                    p-2 px-6 text-lg font-semibold sm:px-4 sm:text-base hover:dark:bg-blue-700 hover:bg-blue-800'>
                        Visit Project
                    </Link>
                </div>
            </div>
        </article>
    )
}

const Project = ({title, type, img, link, github}) => {
    return (
        <article className='w-full flex flex-col items-center justify-center rounded-2xl
            border border-solid border-dark bg-light p-6 relative dark:bg-dark dark:border-light xs:p-4
        '>
            <div className='absolute top-0 -right-3 -z-10 w-[101.8%] h-[103%] rounded-[2rem] bg-dark rounded-br-3xl dark:bg-light
            md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]'/>
            <Link href={link} target='_blank'
                className='w-full cursor-pointer overflow-hidden rounded-lg'>
                <FramerImage src={img} alt={title} className='w-full h-auto' 
                    whileHover={{scale:1.05}}
                    transition={{duration:0.2}}
                    priority
                    sizes='(max-width: 768px) 100vw,
                    (max-width:1200px 50vw,
                    33vw'
                />
            </Link>

            <div className='w-full flex flex-col items-start justify-between mt-4'>
                <span className='text-primary font-medium text-xl dark:text-primaryDark lg:text-lg md:text-base'>{type}</span>
                    <Link href={link} target='_blank'>
                        <h2 className='my-2 w-full text-left text-2xl font-bold hover:underline underline-offset-2 dark:text-light
                        lg:text-2xl sm:text-xl'>
                        {title}</h2>
                    </Link>
                <div className='mt-2 flex items-center justify-between w-full'>
                    <Link href={link} target='_blank' className='underline text-lg font-bold  dark:text-light md:text-base
                    hover:dark:text-blue-600 hover:text-blue-800'>
                        Visit 
                    </Link>

                    <Link href={github} target='_blank' className='w-8 md:w-6'>
                        <GithubIcon />
                    </Link>
                </div>
            </div>
        </article>
    )
}

const  projects =  () => {
  return (
    <div>
        <>
            <Head>
                <title>Codebucks | Projects Page</title>
                <meta name='description' content='any description'></meta>
            </Head>
            <main className='w-full mb-16 flex flex-col items-center justify-center dark:text-light'>
                <Layout className='py-32'>
                    <AnimatedText text="Imagination Trumps Knowledge!" className='mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl '/>

                    <div className='grid grid-cols-12 gap-14 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0'>
                        
                    <div className='col-span-12'>
                            <FeaturedProject 
                                    title="TODO List Application" link="https://todolist-h4rq.onrender.com/"  type="Feature Project" img={project2} 
                                    github="https://github.com/Abhijeet1326/TODO-List"
                                    summary="A streamlined task management application, hosted on render.com, facilitating efficient 
                                    organization and execution of user-defined to-do lists. Utilized technologies include body-parser,
                                     Express.js, EJS, and MongoDB for seamless development and data management."
                            />
                        </div>

                        <div className='col-span-6 sm:col-span-12'>
                            <Project title="Snake Game" link="https://drive.google.com/file/d/1GRXTba18DpSwzPsWQV94oVnAOoa5QWf-/view?usp=sharing"  type="Project" img={project3} 
                            github="https://github.com/Abhijeet1326/Snake_Game"/>
                        </div>

                        <div className='col-span-6 sm:col-span-12'>
                            <Project title="Weather Forecast" link="https://github.com/Abhijeet1326/Weather-Forecast.git"  type="Feature Project" img={project4} 
                            github="https://github.com/Abhijeet1326/Weather-Forecast.git"/>
                        </div>

                        <div className='col-span-12'>
                            <FeaturedProject 
                                title="Make Notes" link="https://github.com/Abhijeet1326/Keep-Notes-Clone"  type="Feature Project" 
                                img={project5} github="https://github.com/Abhijeet1326/Keep-Notes-Clone"
                                summary="Developed applications inspired by Google Keep Notes, featuring similar note-taking functionality 
                                and organizational features. Utilized React in conjunction with Material-UI Icons for the 
                                development of the project."
                            />
                        </div>

                        

                        <div className='col-span-6 sm:col-span-12'>
                            <Project title="Weather App" link="https://weatherapp-lctn.onrender.com/"  
                            type="Feature Project" img={project1} github="/"/>
                        </div>

                        <div className='col-span-6 sm:col-span-12'>
                            <Project title="First WebSite" link="https://abhijeet1326.github.io/portfolio-website-1/"  
                            type="First Project" img={project6} github="https://github.com/Abhijeet1326/portfolio-website-1"/>
                        </div>
                    </div>
                </Layout>
            </main>
        </>
    </div>

  )
}

export default projects