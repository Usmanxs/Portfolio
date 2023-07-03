import Image from 'next/image'

import Header from './components/Header'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Tools from './components/Tools'
import Contact from './components/Contact'


export default function Home() {
  return (
    <>
     <Header/>
     <Hero/>
   
     <Skills/>
     <Projects/>
     <Tools/>
     <Contact/>

     
    </>
  )
}
