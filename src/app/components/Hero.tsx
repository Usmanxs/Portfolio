'use client'
import Image from 'next/image'
import { useTheme } from 'next-themes'
import Typewriter from 'typewriter-effect';
import { IoIosArrowForward } from 'react-icons/io';
import Link from 'next/link';
import { lazy} from 'react';
import { delay, easeIn, motion } from 'framer-motion'

const Hero = () => {
    const { theme } = useTheme()

      
    

    return (
        <motion.section  id='Home' className={`  ${theme === 'dark' && "bg-black"} relative  mx-auto sm:m-0`}
       
           >
  

            <div className="py-16 lg:py-48 flex flex-col-reverse lg:flex-row justify-around gap-10 lg:gap-0" >
            
                <div className="flex flex-col gap-4 md:gap-6 text-left lg:w-1/2 2xl:w-1/3 mx-4 md:mx-6 xl:mx-0"
                 
                   >
                  
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
                                wrapperClassName: "text-gray-700 dark:text-gray-600 text-lg md:text-2xl font-medium",
                                cursorClassName: "text-gray-700 dark:text-gray-600 text-lg md:text-2xl"
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
           
            
                </div>
            
                <div className="relative mx-auto lg:mx-0 mt-0 md:mt-16 lg:mt-0">
                    <div className="    lg:w-96 lg:h-80 sm:w-62 sm:h-46 object-fit">
                    <Image alt='avatar' width={650} height={700} className="" src={'/uxs.jpg'} />
                    </div>
                </div>
                     

            </div>


        </motion.section>
    )
}

export default Hero