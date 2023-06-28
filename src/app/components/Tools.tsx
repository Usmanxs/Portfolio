'use client'
import React from 'react';

interface Tool {
  paths: string[];
  tagline: string;
  description: string;
}

interface Props {
  tool: Tool;
}

const ToolView: React.FC<Props> = ({ tool }) => {
  const { paths, tagline, description } = tool;

  return (
    <div className="max-w-xs mx-4 my-2">
      <div className="flex flex-wrap mb-7">
        {paths &&
          paths.map((item) => {
            return (
              <img
                key={item}
                className="max-h-12 mr-2"
                src={item}
                alt="Tool"
              />
            );
          })}
      </div>
      <h3 className="mb-3 bold font-right text-xl">{tagline}</h3>
      <p className='text-base'>{description}</p>
    </div>
  );
};

const Tools: React.FC = () => {
  const tools: Tool[] = [
    {
      paths: ["/htmllogo.svg", "/css.svg", "/jslogo.svg"],
      tagline: "I have sound knowledge of core building blocks of web",
      description:
        "I have built many websites with plain html, css and javascript. I can easily design customized user interfaces and responsive layouts for websites. I can create highly performant and bloat free websites",
    },
    {
      paths: [
        "/reactlogo.svg",
        "/nextjslogo.svg",
        "/solidjs.svg",
        "/muilogo.svg",
        
      ],
      tagline: "Experinced with modern web frameworks",
      description:
        "I have worked with popular industry standard frameworks for building large applications and i have implemented design systems with complex state management to create rich and interactive applications",
    },
    {
      paths: [
        "/postgreslogo.svg",
        "/mysqllogo.svg",
        "/mongologo.svg",
        "/redislogo.svg",
      ],
      tagline: "I am familar with SQL, NO SQL and caching databases",
      description:
        "I really like sql databases but i also like the simplicity of no-sql databases. I have used both in my projects and i am pretty confident about working with them",
    },
    {
      paths: ["/nodelogo.svg"],
      tagline: "I build backend servers and api in Nodejs",
      description:
        "I like to keep things simple and elegent so i use nodejs for backend services and api. I love the nodejs community",
    },
    {
      paths: [
   
        "/jestlogo.svg",
        "/gitactlogo.svg",
      ],
      tagline: "I do Test Driven Developement with CI/CD",
      description:
      "I am a fan of the test driven approach of writing software. I think its hard but its worth it. I have created several  CI/CD piplines and automated workflows. I have worked with testing frameworks which are used by teams at industry level",
    },
    {
      paths: ["/typescript.svg",  "/javascript.svg","/php.svg"],
      tagline: "Typescript/Javascript is my primary language of choice",
      description:
        "Most of my projects are built with Typescript. I just love the tooling and overall developement experience. I have also experience in php,",
    },
    {
      paths: ["/dockerlogo.svg"],
      tagline: "I containerize my applications using docker",
      description:
        "I use docker for packaging my applications and services. I use docker-compose for setting up my developement, testing and staging environments",
    }
  
  ];

  return (
    <div id='Tools'>
      <div className="flex flex-col items-center mb-5">
        <h2 className="text-4xl text-center m-7">My Tools</h2>
        <p className="mb-5 max-w-lg text-center text-2xl m-5">
          These are the tools that I am experienced with and have used in my projects.
        </p>
        <div className="lg:grid grid-cols-3 gap-7  mb-7 justify-center">
          {tools &&
            tools.map((item, index) => {
              return <ToolView key={index} tool={item} />;
            })}
        </div>
      </div>
    </div>
  );
};

export default Tools;
