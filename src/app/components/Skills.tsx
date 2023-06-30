'use client'
import React from 'react';
import { motion } from 'framer-motion';


interface Skill {
  title: string;
  ico: string;
  description: string;
}

const skills: Skill[] = [
  {
    title: "Problem Solving",
    ico: "/problemsolving.svg",
    description: "I create efficient solutions for problems. I break down complex problems into small functional units and solve them one at a time",
  },
  {
    title: "Attention to detail",
    ico: "/detail.svg",
    description: "I make unbiased inspections about my work, mostly thinking according to the perspective of the consumer and improving the experience accordingly",
  },
  {
    title: "Simplifying things",
    ico: "/simplyfying.svg",
    description: "I keep complexity at minimum. I avoid complex meaningless abstractions that give no clue how they work. I write clean code that my team can understand easily",
  },
  {
    title: "Good Communication",
    ico: "/communication.svg",
    description: "I like to stay positive and express ideas through good communication and keep friendly relationship with team members. I listen and ask relevant questions",
  },
 
  {
    title: "Always learning",
    ico: "/learning.svg",
    description: "I am always learning new things to stay motivated and make myself better every day. I learn things quickly and get productive very fast",
  },
  {
    title: "Knowledgeable",
    ico: "/knowledgeable.svg",
    description: "I try to get a deeper understanding of tools that I use. I like to know how things work under the hood",
  }
];
const SkillView: React.FC<Skill> = ({ ico, title, description }) => {
  return (
    <div className="max-w-xs sm:max-w-sm md:max-w-md mx-auto mb-6 sm:mb-8">
      <div className="flex flex-col items-center bg-white dark:bg-gray-800 rounded-lg p-4 m-4 shadow-md w-64 h-72 ">
        <img className="w-16 h-16  sm:w-1/4 mb-2" src={ico} alt={title} />
        <h3 className="text-lg sm:text-xl  font-medium mb-2">{title}</h3>
        <p className="text-sm text-gray-500 dark:text-gray-400 font-medium text-justify ">{description}</p>
      </div>
    </div>
  );
};

const Skills: React.FC = () => {


  const renderedSkills = skills.map((skill, skillIndex) => (
    <SkillView  key={skillIndex} {...skill} />
  ));

  return (
    <section  className='min-h-[90vh] m-3 w-full'>
   <div id='Skills' className='my-5'>

    <h2 className="text-4xl text-center my-14 ">Skills</h2>
      <motion.div
    className=" w-full  "
    >
        <div className=" lg:grid grid-cols-4 mb-7 justify-center">{renderedSkills}</div>
      </motion.div>
  
      </div>
        </section>
  );
};

export default Skills;