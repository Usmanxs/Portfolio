'use client'
import React from 'react';
import {skills} from './SkillView';
import { motion } from 'framer-motion';
import { SkillView } from './SkillView';


const Skills: React.FC = () => {


  const renderedSkills = skills.map((skill, skillIndex) => (
    <SkillView  key={skillIndex} {...skill} />
  ));

  return (
    <section  className='h-full w-full p-0 m-0'>
   <div id='Skills' className='my-5'>

    <h2 className="text-4xl text-center my-14 ">Skills</h2>
      <motion.div
      className='flex justify-center'
  
    >
        <div className="  grid lg:grid-cols-3 gap-4 md:grid-cols-2 sm:grid-cols-1 mb-7 justify-center">{renderedSkills}</div>
      </motion.div>
  
      </div>
        </section>
  );
};

export default Skills;