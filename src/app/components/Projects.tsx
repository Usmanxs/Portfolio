import React from "react"
import Image from "next/image"
import Link from "next/link"
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs"

const projects = [
  {
    name: "Ebook",
    description:
      "Its an inventory management system for salesmen, ensuring real-time tracking and organization of product stock.  The system aims to provide accurate inventory insights, minimize errors, and optimize overall sales performance",
    image: "/ebook.PNG",
    paths: [
  
  
      "next.svg",
      "typescript.svg",
      "prisma.svg",
      "mysqllogo.svg"
      
    ],
    github:"https://github.com/Usmanxs/ebook",
    link: "https://ebook.usmanxs.com",
  },
  {
    name: "LMS",
    description:
    "Library Mangement System to organize and store data. The system utilizes the Google Books API to organize data related to the book that is authors, cover picture  and description . It provides functionalities such as book search, retrieving book details, displaying book covers, and checking book availability.",
    image: "/lms.png",
    paths: [
      
      
      "/solidjs.svg",
      "typescript.svg",
      "prisma.svg",
      "mysqllogo.svg"
      
    ],
    github: "https://github.com/Usmanxs/NCBA-Library",
    link: "https://www.lms.usmanxs.com/",
  },
  {
    name: "Crypto",
    description: "It is an crapto exchange site where you can vary the coins and its prices.",
    image: "/crypto.png",
    paths: [
  
  
      "/reactlogo.svg",
      
      
    ],
    github: "https://github.com/Usmanxs/crypto",
    link: "https://crypto.usmanxs.com/",
  },
  
  
]

const Projects = () => {
  return (
    <section id="Projects" className="min-h-[90vh]  w-full " >
     <h2 className="text-4xl text-center m-7 ">Projects</h2>

      <div className="flex flex-col space-y-24 justify-center m-16" >
        {projects.map((project, idx) => {
          return (
            <div key={idx}>
             
                <div className="flex flex-col  ml-32   md:flex-row ">
                  <div className=" md:w-full flex justify-center ">
                    <Link href={project.link}>
                      <Image
                        src={project.image}
                        alt="img"
                        width={600}
                        height={300}
                        className="rounded-xl shadow-xl  hover:opacity-70"
                      />
                    </Link>
                  </div>
                  <div className="my-8 lg:mx-12 md:w-full md:m-2">
                  <h2 className="text-4xl  mb-7 ">{project.name}</h2>
                    <p className="text-xl lg:w-58 mb-4 text-justify text-neutral-600 dark:text-neutral-400">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap  mb-1">
                      {project.paths &&
                        project.paths.map((item) => {
                          return (
                            <img
                              key={item}
                              className="max-h-8 mr-2"
                              src={item}
                              alt="Tool"
                            />
                          );
                        })}
                    </div>
                        <div className="flex flex-row align-bottom mt-4 gap-4">
                      <Link href={project.github} target="_blank">
                        <BsGithub
                          size={30}
                          className=" hover:-translate-y-1 transition-transform cursor-pointer "
                        />
                      </Link>
                      <Link href={project.link} target="_blank">
                        <BsArrowUpRightSquare
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
               </div>
          )
        })}
        
      </div>
    </section>
  )
}

export default Projects
