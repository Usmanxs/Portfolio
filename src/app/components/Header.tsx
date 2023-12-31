'use client';
import Image from 'next/image';
import React from 'react'
import { useState, useEffect } from 'react'
import {motion} from 'framer-motion'

import { Link as ScrollLink } from 'react-scroll'

import {useTheme} from 'next-themes'
import { FiSun, FiMoon } from 'react-icons/fi'

import { CgClose, CgMenuRight } from 'react-icons/cg'

interface HeaderProps {
 
}
const Header: React.FC<HeaderProps> = () => {
  
    const [navCollapse, setNavCollapse] = useState(true)
    const [scroll, setScroll] = useState(false)
    const { theme, setTheme } = useTheme()

    useEffect(() => {
        const updateScroll = () => {
            window.scrollY >= 90 ? setScroll(true) : setScroll(false)
        }
        window.addEventListener('scroll', updateScroll)
    }, [])

  const navs = ['Home','Skills', 'Projects','Tools' ,'Contact']
  return (
   
       <motion.header className={`backdrop-filter backdrop-blur-lg flex ${scroll ? 'border-b bg-white bg-opacity-40' : 'border-b-0 flex  ' } dark:bg-grey-900 dark:bg-opacity-40 border-gray-200 dark:border-b-0 z-30 min-w-full flex flex-col w-full fixed  `}
        initial={{opacity:0}}
       animate={{opacity:1}}
        transition={{delay:0.2,duration:0.2 , type:'spring'}}
        >
                
    <nav className='lg:w-3/4 2xl:w-3/4 w-full md:px-6 2xl:px-0 mx-auto py-4 hidden sm:flex  justify-evenly'>
      
      <ul className='flex  gap-12'>
                    {navs.map((e, i) => (
                        <li key={i}>
                            <ScrollLink
                                className='hover:text-gray-700 hover:dark:text-gray-500 transition-colors uppercase cursor-pointer'
                                to={e}
                                offset={-60}
                                smooth={true}
                                duration={500}
                                isDynamic={true}
                            >
                                {e}
                            </ScrollLink>
                        </li>
                    ))}
                    <span
                        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                        className='hover:bg-gray-100 hover:dark:bg-gray-700 p-1.5 rounded-full cursor-pointer transition-colors'>
                        {theme === 'dark' ? <FiSun /> : <FiMoon />}
                    </span>
                </ul>
            </nav>

            <nav className='p-4 flex sm:hidden items-center justify-end'>
  
                <div className='flex items-center gap-4'>
                    <span
                        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                        className='bg-gray-100 dark:bg-gray-700 p-1.5 rounded-full cursor-pointer transition-colors'>
                        {theme === 'dark' ? <FiSun /> : <FiMoon />}
                    </span>
                    <CgMenuRight size={20} onClick={() => setNavCollapse(false)} />
                </div>
            </nav>

            <div className={`flex  min-h-screen w-screen absolute md:hidden top-0 ${!navCollapse ? 'right-0' : 'right-[-100%]'} bottom-0 z-50 ease-in duration-300`}>
                <div className="w-1/4" onClick={() => setNavCollapse(true)}></div>

                <div className="flex flex-col p-4 gap-5 bg-gray-100/95 backdrop-filter backdrop-blur-sm dark:bg-grey-900/95 w-3/4">
                    <CgClose className='self-end my-2' size={20} onClick={() => setNavCollapse(true)} />

                    {navs.slice(0, 4).map((e) => (
                        <ScrollLink
                            key={e}
                            className='hover:text-purple-600 py-1.5 px-4 rounded transition-colors capitalize cursor-pointer'
                            to={e}
                            offset={-60}
                            smooth={true}
                            duration={500}
                            isDynamic={true}
                            onClick={() => setNavCollapse(true)}
                        >
                            {e}
                        </ScrollLink>
                    ))}
                    <ScrollLink
                        to='Contact'
                        offset={-60}
                        smooth={true}
                        duration={500}

                        onClick={() => setNavCollapse(true)}
                        className='px-6 py-1.5 rounded-md cursor-pointer bg-gray-600 hover:bg-gray-700 text-white text-center'>
                        Contact
                    </ScrollLink>
                </div>
            </div>
       </motion.header>

  );
};


export default Header
