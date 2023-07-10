'use client'
import Image from 'next/image'
import { useTheme } from 'next-themes'
import Typewriter from 'typewriter-effect';
import { IoIosArrowForward } from 'react-icons/io';
import Link from 'next/link';
import { lazy} from 'react';
import { easeIn, motion } from 'framer-motion'

const Hero = () => {
    const { theme } = useTheme()
  

    return (
        <motion.section  id='Home' className={`  ${theme === 'dark' && "bg-black"} relative h-screen w-full mx-auto lg:overflow-hidden`}
       
           >
  

            <div className="py-16 lg:py-48 flex flex-col-reverse lg:flex-row justify-around gap-10 lg:gap-0">

                <div className="flex flex-col gap-4 md:gap-6 text-left lg:w-1/2 2xl:w-1/3 mx-4 md:mx-6 xl:mx-0">
                  
                    <h1 className="text-4xl md:text-6xl font-bold relative">
                        I&apos;m Muhammad Usman
                    </h1>
                    <div className="flex flex-row items-start md:items-center gap-1.5">
                        <h2 className="text-lg md:text-2xl">
                            I AM
                        </h2>
                        <Typewriter
                            options={{
                                strings: 'Full Stack Developer',
                                autoStart: true,
                                loop: true,
                                deleteSpeed: 50,
                                delay: 50,
                                wrapperClassName: "text-violet-700 dark:text-violet-600 text-lg md:text-2xl font-medium",
                                cursorClassName: "text-violet-700 dark:text-violet-600 text-lg md:text-2xl"
                            }}
                        />
                    </div>

                    <p className='text-md md:text-justify  dark:text-gray-300'>
                    Currently I am working on webapps. 
                     
                   
                    I do both frontend and backend development.
                    I like to learn, solve problems, take
               challenges and build creative things using code. I have a passion for
              technology and a desire to always push the limits of what is
              possible. I am always open to new opportunities.</p>
           
                <div className="flex items-center   md:mt-4">
                            { <Link href={'/resume.pdf'} target="_blank" className="text-sm md:text-base bg-violet-600 dark:bg-violet-700 text-white w-fit rounded-md py-2 px-6 hover:shadow-xl transition-shadow">Resume</Link>}
                        </div>
                </div>
            
                <div className="relative mx-auto lg:mx-0 mt-12 md:mt-16 lg:mt-0">
                    <div className="    lg:w-full lg:h-90 ">
                    <Image alt='avatar' width={650} height={700} className="  lg:object-contain xl:rounded-none max-lg:rounded-lg max-lg:w-44 max-lg:h-48  " src={'/uxs.jpg'} />
                    </div>
                </div>
                     

            </div>


        </motion.section>
    )
}

export default Hero