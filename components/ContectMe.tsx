
import { Squares } from "@/components/ui/squares-background"
import Image from 'next/image'
import { SocialLinks } from "@/components/ui/social-links"

const socials = [
  {
    name: "Instagram",
    image: "https://link-hover-lndev.vercel.app/instagram.png",
  },
  {
    name: "LinkedIn",
    image: "https://link-hover-lndev.vercel.app/linkedin.png",
  },
  {
    name: "Github",
    image: "/git.png",
  },
  {
    name: "Blog",
    image: "/blog.jpg",
  },
]
function ContectMe() {
  return (
    <div >
      <div className="relative h-screen  overflow-hidden bg-[#060606] z-50">
   
      <div className="absolute w-screen h-screen ">
        
                <Squares 
            
            direction="diagonal"
            speed={0.5}
            squareSize={40}
            borderColor="#333" 
            hoverFillColor="#222"
            />
                </div> 
<div className="py-16  flex flex-col-reverse lg:flex-row justify-around gap-10 lg:gap-0 text-white" >
          


            
        
            <div className="relative rounded-lg bg-black   mx-auto lg:mx-0 mt-0 md: lg:mt-0">
              
                <div className=" bg-black   lg:w-96 lg:h-80 sm:w-62  sm:h-46 object-fit">
                <Image alt='avatar' width={650} height={700} className=" " src={'/uxs.jpg'} />
                <div className="relative z-2 items-start align-middle px-4 py-10 md:items-center ">
                   <SocialLinks socials={socials} />
                </div>
                </div>
            </div>
                 

        
        </div>
     <div>
     </div>
       <Image alt='avatar' width={650} height={700} className="" src={'/uxs.jpg'} />
      </div>
    </div>
  )
}

export default ContectMe