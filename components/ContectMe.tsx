import { Squares } from "@/components/ui/squares-background";
import Image from "next/image";
import { SocialLinks } from "@/components/ui/social-links";
import { useState } from "react";

const socials = [
  {
    name: "upwork",
    image: "/upwork.png",
    url: "https://www.upwork.com/freelancers/~01711bca3adad15681",
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
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState({
    loading: false,
    error: "",
    success: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus({ loading: true, error: "", success: "" });

    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      setStatus({
        loading: false,
        error: "",
        success: "Message sent successfully!",
      });
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error('Failed to send message:', error);
      setStatus({
        loading: false,
        error: "Failed to send message. Please try again.",
        success: "",
      });
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black z-50">
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
      <div className="relative w-full max-w-screen-xl py-16 px-4 lg:px-8 flex flex-col lg:flex-row justify-between items-center gap-12 text-white z-10">
        {/* Left Section */}
        <div className="flex flex-col items-center lg:items-start lg:w-1/2">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-gray-600 to-gray-400 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative">
              <Image
                alt="avatar"
                width={400}
                height={400}
                className="rounded-lg object-cover shadow-2xl transition-transform duration-500 group-hover:scale-105"
                src="/uxs.jpg"
              />
            </div>
          </div>
          <div className="mt-8">
            <SocialLinks socials={socials} className="justify-center lg:justify-start" />
          </div>
        </div>

        {/* Right Section */}
        <div className="lg:w-1/2 flex flex-col items-center lg:items-start">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-gray-100 to-gray-400">
            Let&apos;s Connect
          </h1>
          <p className="text-lg text-center lg:text-left text-gray-400 mb-8 max-w-lg">
            I am always excited to connect with professionals, developers, and
            enthusiasts! Feel free to reach out through any platform or drop me a message below.
          </p>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="w-full max-w-lg space-y-6">
            <div className="space-y-2">
              <label htmlFor="name" className="block text-sm font-medium text-gray-300">
                Your Name
              </label>
              <input
                id="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg bg-gray-900/50 border border-gray-800 text-white 
                         focus:ring-2 focus:ring-gray-500 focus:border-transparent outline-none 
                         transition-all duration-200 hover:border-gray-700"
                placeholder="Enter your name"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm font-medium text-gray-300">
                Your Email
              </label>
              <input
                id="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg bg-gray-900/50 border border-gray-800 text-white 
                         focus:ring-2 focus:ring-gray-500 focus:border-transparent outline-none 
                         transition-all duration-200 hover:border-gray-700"
                placeholder="Enter your email"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="message" className="block text-sm font-medium text-gray-300">
                Your Message
              </label>
              <textarea
                id="message"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 h-32 rounded-lg bg-gray-900/50 border border-gray-800 text-white 
                         focus:ring-2 focus:ring-gray-500 focus:border-transparent outline-none 
                         transition-all duration-200 resize-none hover:border-gray-700"
                placeholder="Enter your message"
              ></textarea>
            </div>
            
            {status.error && (
              <p className="text-red-500 text-sm">{status.error}</p>
            )}
            {status.success && (
              <p className="text-green-500 text-sm">{status.success}</p>
            )}
            
            <button
              type="submit"
              disabled={status.loading}
              className="w-full py-3 px-6 rounded-lg bg-white text-black font-medium 
                       hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-500 
                       disabled:opacity-50 disabled:cursor-not-allowed transform transition-all 
                       duration-200 hover:scale-[1.02]"
            >
              {status.loading ? (
                <span className="flex items-center justify-center">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Sending...
                </span>
              ) : (
                "Send Message"
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContectMe;
