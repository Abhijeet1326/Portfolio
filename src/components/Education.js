import React, { useRef } from 'react'
import { motion, useScroll } from 'framer-motion'
import LiIcons from './LiIcons'

const Details = ({type , time, address, info}) => {
    const ref = useRef(null)
    return <li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]'>
        
        <LiIcons reference={ref}/>
        <motion.div
            initial={{y:50}}
            whileInView={{y:0}}
            transition={{duration:0.5, type:"spring"}}
        >
            <h3 className='capitalize font-bold text-2xl md:text-xl xs:text-lg'>{type}</h3>
            <span className='capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm'>
                {time} | {address}
            </span>
            <p className='font-medium w-full md:text-sm'>
                {info}
            </p>
        </motion.div>
    </li>
}

const Education = () => {


    const ref = useRef(null);
    const {scrollYProgress} = useScroll({
        target:ref,
        offset:["start end", "center start"]
    });

  return (
    <div className='my-64 pb-20'>
        <h2 className='font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-5xl md:mb-16'>
            Education
        </h2>

        <div ref={ref} className='w-[75%] mx-auto relative lg:w-[90%] md:w-full'>
        <motion.div className='absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-blue-500
        md:w-[3px] md:left-[30px] xs:left-[20px]'
            style={{scaleY:scrollYProgress}}
        />

            <ul className='w-full flex flex-col items-start justify-between ml-4 xs:ml-2'>
                <Details type="Bachelor Of Science In Computer Science" time="2021-2024" address="KBP College, Vashi | CGPA: 9.1" 
                info="Relevant courses included Data Structures and Algorithms, Computer Systems Engineering, and Artificial 
                Intelligence."
                />

                <Details type="HSC (Science)" time="2019-2021" address="Holy Angel's Jr College, Dombivli | Percentage: 89.83" 
                info="Completed my Higher Secondary Certificate in science stream with subjects such as chemistry, physics, 
                mathematics and Information Technology"
                />

                <Details type="Complete Web Development BootCamp" time="2022-2023" address="Udemy" 
                info="Completed coursework in advanced topics such as RHTML, CSS, Javascript, Node, 
                React, PostgreSQL, Web3 and DApps"
                />
            </ul>
        </div>
    </div>
  )
}

export default Education