import { Squares } from "@/components/ui/squares-background";
import Image from "next/image";
import { SocialLinks } from "@/components/ui/social-links";

const socials = [
  {
    name: "Instagram",
    image: "/instagram.png",
    url: "https://instagram.com",
  },
  {
    name: "LinkedIn",
    image: "/linkedin.png",
    url: "https://www.linkedin.com/in/usmanxs/",
  },
  {
    name: "Github",
    image: "/git.png",
    url: "https://github.com/Usmanxs",
  },
  {
    name: "Blog",
    image: "/blog.png",
    url: "https://blog.usman.digital/",
  },
];

function ContectMe() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#060606] z-50">
      {/* Animated Squares Background */}
      <div className="absolute w-full h-full">
        <Squares
          direction="diagonal"
          speed={0.5}
          squareSize={40}
          borderColor="#333"
          hoverFillColor="#222"
        />
      </div>

      {/* Main Content */}
      <div className="relative w-full max-w-screen-lg py-16 px-4 lg:px-0 flex flex-col lg:flex-row justify-center items-center lg:items-start gap-10 text-white z-10">
        {/* Left Section */}
        <div className="flex flex-col items-center lg:items-start">
          <div className="relative rounded-lg bg-black mx-auto lg:mx-0">
            <div className="bg-black w-80 h-80 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
              <Image
                alt="avatar"
                width={650}
                height={700}
                className="w-full h-full object-cover rounded-lg"
                src={"/uxs.jpg"}
              />
            </div>
          </div>
          <div className="mt-12 md:p-4 sm:p-2 flex justify-center lg:justify-start">
            <SocialLinks socials={socials} />
          </div>
        </div>

        {/* Right Section */}
        <div className="flex-1 flex flex-col items-center lg:items-start  sm:mb-28 sm:pb-48 md:2 md:2">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 text-center lg:text-left">
            Let’s Connect
          </h1>
          <p className="text-sm sm:text-base lg:text-lg text-center lg:text-left max-w-lg mb-8">
            I am always excited to connect with professionals, developers, and
            enthusiasts! Feel free to reach out to me through any of the
            platforms listed here or drop me a message below.
          </p>

          {/* Contact Form */}
          <form className="w-full max-w-lg">
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-neutral-300 mb-2"
              >
                Your Name
              </label>
              <input
                id="name"
                type="text"
                className="w-full px-4 py-2 rounded-md bg-neutral-800 text-white focus:ring-2 focus:ring-primary outline-none"
                placeholder="Enter your name"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-neutral-300 mb-2"
              >
                Your Email
              </label>
              <input
                id="email"
                type="email"
                className="w-full px-4 py-2 rounded-md bg-neutral-800 text-white focus:ring-2 focus:ring-primary outline-none"
                placeholder="Enter your email"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="message"
                className="block text-sm font-medium text-neutral-300 mb-2"
              >
                Your Message
              </label>
              <textarea
                id="message"
                className="w-full px-4 py-2 h-32 rounded-md bg-neutral-800 text-white focus:ring-2 focus:ring-primary outline-none"
                placeholder="Enter your message"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-primary hover:bg-primary/80 text-black py-2 rounded-md transition duration-200"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContectMe;
