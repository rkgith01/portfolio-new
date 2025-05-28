"use client";
import React, { useRef, useState } from "react";
import { dark, light } from "@/../contants/constant";
import emailjs from "@emailjs/browser";

const Form = () => {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setSuccess(false);
    setError(false);

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAIL_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAIL_TEMPLATE_ID,
        form.current,
        {
          publicKey: process.env.NEXT_PUBLIC_EMAIL_PUBLIC_ID,
        }
      )
      .then(
        () => {
          setSuccess(true);
          form.current.reset();
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
          setError(true);
        }
      );
  };

  return (
    <div
      className={
        "w-full px-8 py-10 mx-auto overflow-hidden rounded-lg lg:max-w-xl " +
          dark || light
      }
    >
      <h1 className="text-lg font-medium text-gray-800 dark:text-gray-200">
        What do you want to ask ?
      </h1>

      <form className="mt-6" ref={form} onSubmit={sendEmail}>
        <div className="flex-1">
          <label className="hidden mb-2 text-sm text-black dark:text-gray-200">
            Raj
          </label>
          <input
            className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-500 bg-yellow-500 border border-gray-200 rounded-md dark:placeholder-gray-400 dark:bg-[#2c2c2c]  dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40 mb-3"
            name="user_to_name"
            placeholder="Hey Raj"
            disabled
          />

          <label className="block mb-2 text-sm text-black dark:text-gray-200">
            Full Name
          </label>
          <input
            name="from_name"
            type="text"
            placeholder="Your name"
            className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-700 bg-yellow-500 border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-[#2c2c2c]  dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
          />
        </div>

        <div className="flex-1 mt-6">
          <label className="block mb-2 text-sm text-black dark:text-gray-200">
            Email address
          </label>
          <input
            type="email"
            name="user_email"
            placeholder="you@email.com"
            className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-700 bg-yellow-500 border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-[#2c2c2c]  dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
          />
        </div>

        <div className="w-full mt-6">
          <label className="block mb-2 text-sm text-black dark:text-gray-200">
            Message
          </label>
          <textarea
            className="block w-full h-32 px-5 py-3 mt-2 text-gray-700 placeholder-gray-700 bg-yellow-500 border border-gray-200 rounded-md md:h-48 dark:placeholder-gray-600 dark:bg-[#2c2c2c]  dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
            placeholder="Message..."
            name="user_message"
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full px-6 py-3 mt-6 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-yellow-700 hover:bg-yellow-800 dark:bg-blue-500 rounded-md dark:hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50"
        >
          get in touch
        </button>

        {success && (
          <span className="text-green-500 font-semibold">
            Your message sent successfully
          </span>
        )}
        {error && (
          <span className="text-red-500 font-semibold">
            Something went wrong
          </span>
        )}
      </form>
    </div>
  );
};

export default Form;
