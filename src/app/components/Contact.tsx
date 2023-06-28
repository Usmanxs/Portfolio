'use client'
import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

const Contact = () => {
  const [state, handleSubmit] = useForm("meqbjzzb");

  if (state.succeeded) {
    return <p className="text-center text-xl text-violet-500">Message sent!</p>;
  }

  return (
    <section id='Contact'>
     
    <h2 className="text-4xl text-center m-7 ">Contact Me</h2>
    <form onSubmit={handleSubmit} className="max-w-6xl mx-auto p-6  rounded shadow-lg">
      <div className="mb-4">
        <label htmlFor="name" className="block  font-bold mb-2">
          Name
        </label>
        <input
          id="name"
          type="text"
          name="name"
          className="w-full border rounded py-2 px-4 focus:outline-none focus:border-violet-500"
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
          className="w-full border border-gray-300 rounded py-2 px-4 focus:outline-none focus:border-violet-500"
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
          className="w-full border border-gray-300 rounded py-2 px-4 focus:outline-none focus:border-violet-500"
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
          className="w-full border border-gray-300 rounded py-12 px-4   focus:outline-none focus:border-violet-500"
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
        className="bg-violet-500 text-white rounded py-2 px-4 hover:bg-violet-600 focus:outline-none"
        >
        Submit
      </button>
    </form>
        </section>
  );
};

export default Contact;