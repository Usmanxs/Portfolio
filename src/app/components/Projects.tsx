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
    link: "https://ebook.usman.digital",
  },
  {
    name: "Haraj group",
    description:
      "The Haraj Group CRM WordPress site for real estate was a custom-built platform designed to streamline property management and enhance client interactions. It featured integrated property listings, lead management tools, and interactive maps tailored specifically for the real estate industry.",
    image: "/haraj.PNG",
    paths: [
  
  
      "wordpress.svg",
      "analytics.svg",
      "manager.svg",
      "mysqllogo.svg"
      
    ],
    github:"https://github.com/Usmanxs/themes",
    link: "https://Harajgroup.online",
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
      "mysqllogo.svg",
      "amazon-s3.svg"
      
    ],
    github: "https://github.com/Usmanxs/NCBA-Library",
    link: "https://www.lms.usman.digital/",
  },
  {
    name: "Crypto",
    description: "It is an crapto exchange site where you can vary the coins and its prices.",
    image: "/crypto.png",
    paths: [
  
  
      "/reactlogo.svg",
      
      
    ],
    github: "https://github.com/Usmanxs/crypto",
    link: "https://crypto.usman.digital/",
  },
  
  
]

const Projects = () => {
  return (
    <section id="Projects" className="min-h-[90vh] w-full overflow-hidden">
    <h2 className="text-4xl text-center m-7">Projects</h2>
  
    <div className="flex flex-col space-y-8 md:space-y-12 justify-center mx-4 md:mx-12 lg:mx-24">
      {projects.map((project, idx) => (
        <div key={idx} className="flex flex-col md:flex-row md:space-x-8">
          <div className="md:w-1/2 flex justify-center">
            <Link href={project.link}>
              <Image
                src={project.image}
                alt="img"
                width={600}
                height={300}
                className="rounded-xl shadow-xl hover:opacity-70"
              />
            </Link>
          </div>
          <div className="md:w-1/2 my-8">
            <h2 className="text-3xl lg:text-4xl mb-4">{project.name}</h2>
            <p className="text-lg lg:text-xl mb-4 text-justify text-neutral-600 dark:text-neutral-400">
              {project.description}
            </p>
            <div className="flex flex-wrap mb-4">
              {project.paths &&
                project.paths.map((item, index) => (
                  <img
                    key={index}
                    className="max-h-8 mr-2 mb-2"
                    src={item}
                    alt="Tool"
                  />
                ))}
            </div>
            <div className="flex items-center gap-4">
              <Link href={project.github} target="_blank">
                <BsGithub
                  size={30}
                  className="hover:-translate-y-1 transition-transform cursor-pointer"
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
      ))}
    </div>
  </section>
  
  )
}

export default Projects
