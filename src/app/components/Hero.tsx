'use client'
import Image from 'next/image'
import { useTheme } from 'next-themes'
import { Link as ScrollLink } from 'react-scroll'
import Typewriter from 'typewriter-effect';
import { IoIosArrowForward } from 'react-icons/io';
import { lazy} from 'react';
import { easeIn, motion } from 'framer-motion'

const Hero = () => {
    const { theme } = useTheme()
  

    return (
        <motion.section  id='Home' className={`  ${theme === 'dark' && "bg-grey-900"} relative min-h-[90vh] w-full mx-auto overflow-hidden`}
       
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

                    <p className='text-sm md:text-base text-gray-600 dark:text-gray-300'>
                    Currently I am working on webapps. 
                     
                   <p>
                    I do both frontend and backend development.</p>
                    </p>


                    <ScrollLink
                        className="w-fit text-sm md:text-base py-2 px-4 cursor-pointer flex items-center gap-1 rounded-md bg-violet-600 hover:bg-violet-700 dark:bg-violet-700 hover:dark:bg-violet-800 transition-colors group text-white"
                        to={'About'}
                        offset={-60}
                        smooth={true}
                        duration={500}
                        isDynamic={true}
                    >
                        About Me
                        <IoIosArrowForward className='group-hover:translate-x-1 transition-transform' />
                    </ScrollLink>
                </div>
            
                <div className="relative mx-auto lg:mx-0 mt-12 md:mt-16 lg:mt-0">
                    <div className="w-56 h-56 md:w-80 md:h-80 lg:-translate-x-16">
                    <Image alt='avatar' width={1000} height={1000} className="rounded-full w-full h-full object-cover" src={'/hero.png'} />
                    </div>
                </div>
                     

            </div>


        </motion.section>
    )
}

export default Hero