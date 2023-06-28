import Image from 'next/image'

import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Tools from './components/Tools'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function Home() {
  return (
    <>
     <Header/>
     <Hero/>
     <About/>
     <Skills/>
     <Projects/>
     <Tools/>
     <Contact/>
     <Footer/>
     
    </>
  )
}
