"use client"
import React, { use, useEffect,useRef } from 'react'
import Image from "next/image"
import Link from "next/link";
import {useInView , useAnimation, motion } from 'framer-motion';
function About() {
  const mainControls = useAnimation();
  const ref =useRef(null)
  const isInView  = useInView(ref,{once:true})
  useEffect(()=>{
    if(isInView){
      mainControls.start("visible")
      
    }
  },[useInView])
  return (
    <motion.section id="About" className="min-h-[90vh] pt-12 bg-gradient-to-b from-white to-gray-100/20 dark:from-grey-900 dark:to-grey-900"
    variants={{
      hidden:{opacity:0, y:-75},
      visible:{opacity:1, y:0}
    }}
    initial="hidden"
    animate={'visible'}
    transition={{duration:0.5, delay:0.25}}

    >
    <h2 className="text-4xl text-center">About Me</h2>

    <div className="w-full lg:w-11/12 2xl:w-4/6 mt-2 lg:mt-20 mx-auto flex flex-col md:gap-4 lg:flex-row justify-between">
        <div className="p-3 w-56 self-start md:w-2/5 lg:w-72  flex flex-col gap-2 items-center rounded-2xl mx-auto lg:mx-16 hover:-translate-y-2 transition-transform duration-300 ">
            <Image alt="profile" width={1000} height={1000} loading={'lazy'} className="w-full h-60 md:h-80 rounded-2xl object-cover grayscale hover:grayscale-0 transition-all bg-violet-100" src={'/about.png'} />
            <span className="font-medium font-sans"></span>
        </div>
        <div className="flex-1 text-left mx-4  md:mt-0 md:mx-0 md:p-6">
                    <div className="flex flex-col gap-2.5">
                        <p className="text-lg md:text-xl my-2 text-gray-600 dark:text-gray-300">My name is Usman and always love learn new edge cutting technologies,
                        I like to learn, solve problems, take
               challenges and build creative things using code. I have a passion for
              technology and a desire to always push the limits of what is
              possible. I am always open to new opportunities.</p>
                        <div className="flex items-center gap-4 md:mt-4">
                            { <Link href={'/resume.pdf'} target="_blank" className="text-sm md:text-base bg-gray-600 dark:bg-gray-700 text-white w-fit rounded-md py-2 px-6 hover:shadow-xl transition-shadow">Resume</Link>}
                        </div>
                    </div>
                </div>
 
    </div>
</motion.section>
  )
}

export default About
