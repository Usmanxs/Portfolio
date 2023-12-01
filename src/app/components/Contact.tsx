'use client'
import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import {
  AiOutlineGithub,
  AiOutlineTwitter,
  AiOutlineLinkedin,
  
} from "react-icons/ai"

const Contact = () => {
  const [state, handleSubmit] = useForm("meqbjzzb");

  if (state.succeeded) {
    return <p className="text-center text-xl text-gray-500">Message sent!</p>;
  }

  return (
    <section className='h-full w-screen ' >
     <div id="Contact">

    <h2 className="text-4xl text-center m-7 ">Contact Me</h2>
    <form onSubmit={handleSubmit} className="w-4/5 mx-auto p-6   rounded shadow-lg">
      <div className="mb-4">
        <label htmlFor="name" className="block  font-bold mb-2">
          Name
        </label>
        <input
          id="name"
          type="text"
          name="name"
          className="w-full border rounded py-2 px-4 focus:outline-none focus:border-gray-500"
          required
          />
        <ValidationError
          prefix="Name"
          field="name"
          errors={state.errors}
          className="text-red-500"
          />
      </div>

      <div className="mb-4">
        <label htmlFor="email" className="block font-bold mb-2">
          Email Address
        </label>
        <input
          id="email"
          type="email"
          name="email"
          className="w-full border border-gray-300 rounded py-2 px-4 focus:outline-none focus:border-gray-500"
          required
          />
        <ValidationError
          prefix="Email"
          field="email"
          errors={state.errors}
          className="text-red-500"
          />
      </div>

      <div className="mb-4">
        <label htmlFor="subject" className="block  font-bold mb-2">
          Subject
        </label>
        <input
          id="subject"
          type="text"
          name="subject"
          className="w-full border border-gray-300 rounded py-2 px-4 focus:outline-none focus:border-gray-500"
          required/>
        <ValidationError
          prefix="Subject"
          field="subject"
          errors={state.errors}
          className="text-red-500"
          />
      </div>

      <div className="mb-4">
        <label htmlFor="message" className="block  font-bold mb-2">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          className="w-full border border-gray-300 rounded py-12 px-4   focus:outline-none focus:border-gray-500"
          required />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
          className="text-red-500"
          />
      </div>

      <button
        type="submit"
        disabled={state.submitting}
        className="bg-gray-500 text-white rounded py-2 px-4 hover:bg-gray-600 focus:outline-none"
        >
        Submit
      </button>
    </form>
          </div>
          <hr className="w-full h-0.5 mx-auto mt-40 bg-neutral-200 border-0"></hr>
      <div className="mx-auto  p-4 flex flex-col text-center text-neutral-900 md:flex-row md:justify-between">
        <div className="flex flex-row items-center justify-center space-x-1 text-neutral-500 dark:text-neutral-100">
          © 2023 USMAN<a href="/" className="hover:underline"></a>
        </div>
        <div className="flex flex-row items-center justify-center space-x-2 ">
          <a href="https://github.com/Usmanxs" rel="noreferrer" target="_blank">
            <AiOutlineGithub
              className="hover:-translate-y-1 transition-transform cursor-pointer text-neutral-500 dark:text-neutral-100"
              size={30}
            />
          </a>
          <a
            href="https://twitter.com/UsmanXs7"
            rel="noreferrer"
            target="_blank"
          >
            <AiOutlineTwitter
              className="hover:-translate-y-1 transition-transform cursor-pointer text-neutral-500 dark:text-neutral-100"
              size={30}
            />
          </a>

          <a
            href="https://www.linkedin.com/in/m-usman-2b557b176/"
            rel="noreferrer"
            target="_blank"
          >
            <AiOutlineLinkedin
              className="hover:-translate-y-1 transition-transform cursor-pointer text-neutral-500 dark:text-neutral-100"
              size={30}
            />
          </a>
        
        </div>
      </div>
        </section>
  );
};

export default Contact;
