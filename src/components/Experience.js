import React, { useRef } from 'react'
import { motion, useScroll } from 'framer-motion'
import LiIcons from './LiIcons'

const Details = ({position , company, companyLink, time, address, work}) => {
    const ref = useRef(null)
    return <li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]'>
        
        <LiIcons reference={ref}/>
        <motion.div
            initial={{y:50}}
            whileInView={{y:0}}
            transition={{duration:0.5, type:"spring"}}
        >
            <h3 className='capitalize font-bold text-2xl md:text-xl xs:text-lg'>{position}&nbsp;
            <a href={companyLink} target="_blank" className='text-primary capitalize'>@{company}</a>
            </h3>
            <span className='capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm'>
                {time} | {address}
            </span>
            <p className='font-medium w-full md:text-sm'>
                {work}
            </p>
        </motion.div>
    </li>
}

const Experience = () => {


    const ref = useRef(null);
    const {scrollYProgress} = useScroll({
        target:ref,
        offset:["start end", "center start"]
    });

  return (
    <div className='my-64'>
        <h2 className='font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-5xl md:mb-16'>Experience</h2>

        <div ref={ref} className='w-[75%] mx-auto relative lg:w-[90%] md:w-full'>
        <motion.div className='absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-blue-500 
        md:w-[3px] md:left-[30px] xs:left-[20px]'
            style={{scaleY:scrollYProgress}}
        />

            <ul className='w-full flex flex-col items-start justify-between ml-4 xs:ml-2'>
                <Details position="Intern" company="Jet Kings" time="2022-2022" address="Modern College, Vashi"
                    work="Responsible for uploading student data on the Company's Official Website.
                    My attention to detail ensured accuracy, and my efficient work ethic allowed me to meet deadlines consistently, 
                    contributing to streamlined data operations."
                />

                <Details position="Intern" company="Hamari Pahchan NGO" time="Winter 2022" address="Remote"
                    work="Engaged in impactful NGO work, I spearheaded donation drives, crafted compelling posters using Canva, 
                    and employed creative writing to convey the organization's mission effectively. Contributed to successful campaigns, 
                    fostering community involvement."
                />

                <Details position="Cashier" company="NovaAce" time="2023-04 | 2023-08" address="Xperia Mall, Dombivli"
                    work="Managed financial transactions with precision, ensuring accurate cash handling and customer satisfaction.
                    Developed strong interpersonal skills through daily customer interactions, enhancing communication abilities. 
                    Demonstrated reliability and accountability in a fast-paced environment, fostering a disciplined work ethic."
                />
            </ul>
        </div>
    </div>
  )
}

export default Experience