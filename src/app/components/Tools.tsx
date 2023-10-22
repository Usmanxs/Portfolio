

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
    <div className="flex flex-col items-center bg-white dark:bg-gray-700 rounded-lg p-4 shadow-md w-80 h-90 overflow-hidden">
      <div className="flex flex-wrap h-32">
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
      <h3 className="bold font-right text-2xl">{tagline}</h3>
      <p className=' mb-0 text-justify bottom-0'>{description}</p>
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
      
        
      ],
      tagline: "Experinced with modern web frameworks",
      description:
        "I have worked with popular industry standard frameworks for building large applications and i have implemented design systems with complex state management to create rich and interactive applications",
    },
    {
      paths: [

        "/mysqllogo.svg",
        "/mongologo.svg", 
        'firebase.svg',
        'prisma.svg'
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
      paths: ["/typescript.svg",  "/javascript.svg"],
      tagline: "Typescript/Javascript is my primary language of choice",
      description:
        "Most of my projects are built with Typescript. I just love the tooling and overall developement experience.",
    },
   
  ];

  return (<section className=' w-screen '>

    <div id='Tools'>
      <div className="flex flex-col items-center my-5">
        <h2 className="text-4xl text-center m-7">My Tools</h2>
        <p className="mb-5 max-w-lg text-center text-2xl m-5">
          These are the tools that I am experienced with and have used in my projects.
        </p>
        
        <div className=" grid lg:grid-cols-3 gap-4 md:grid-cols-2 sm:grid-cols-1 mb-7 justify-center">
          {tools &&
            tools.map((item, index) => {
              return <ToolView key={index} tool={item} />;
            })}
        </div>
      </div>
    </div>
            </section>
  );
};

export default Tools;
