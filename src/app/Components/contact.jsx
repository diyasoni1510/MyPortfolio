"use client";
import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

const text = "Hello!";
const Contact = () => {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoding] = useState(false);
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    setLoding(true);
    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        form.current,
        {
          publicKey: process.env.NEXT_PUBLIC_PUBLIC_KEY,
        }
      )
      .then(
        () => {
          setLoding(false);
          setSuccess(true);
          form.current.reset();
          console.log("SUCCESS!");
        },
        (error) => {
          setError(true);
          console.log("FAILED...", error.text);
        }
      );
  };
  return (
    <motion.div
      className="h-full py-8"
      initial={{ y: 200 }}
      whileInView={{ y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <h1 className={`text-2xl text-center section-head pb-5`}>CONTACT</h1>
      <div className="h-full flex flex-col justify-center items-center lg:flex-row ">
        {/* text container  */}
        <div className="h-1/2 lg:h-full lg:w-1/2 flex justify-center items-center text-4xl md:text-6xl">
          {text.split("").map((letter, index) => {
            return (
              <motion.span
                className=""
                key={index}
                initial={{ opacity: 1 }}
                animate={{ opacity: 0 }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: index * 0.1,
                }}
              >
                {letter}
              </motion.span>
            );
          })}
          <motion.div
            initial={{ rotate: -5, opacity: 0.5 }}
            animate={{ rotate: 5, opacity: 1 }}
            transition={{ duration: 3, repeat: 1 }}
            className=" w-fit"
          >
            {/* <MdBackHand className="text-yellow-500 " /> */}
          </motion.div>
        </div>
        {/* form container  */}
        <form
          ref={form}
          onSubmit={sendEmail}
          className="lg:h-5/6 w-full lg:w-1/2 flex flex-col gap-4 px-4 py-16 md:p-16 md:text-lg bg-white bg-opacity-20 rounded-3xl"
        >
          {success && (
            <span className="text-green-200 text-sm">
              Your message has been sent successfully!
            </span>
          )}
          {error && (
            <span className="text-red-200 text-sm">Something went wrong!</span>
          )}
          <span>Dear Divyanjali Soni</span>
          <textarea
            name="message"
            id="message"
            rows="5"
            className="bg-transparent border-b-2 border-black outline-none resize-none"
            placeholder="Message"
          ></textarea>
          <span>From:</span>
          <input
            type="text"
            name="user_email"
            className="bg-transparent border-b-2 border-black outline-none"
            placeholder="Your Email"
          />
          <span>Regards</span>
          <button className="bg-black text-white mt-4 py-1 rounded flex justify-center items-center gap-3">
            {loading ? (
              <svg
                aria-hidden="true"
                class="w-5 h-5 text-gray-700 animate-spin dark:text-gray-600 fill-white"
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="currentColor"
                />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="currentFill"
                />
              </svg>
            ) : (
              "Send"
            )}
          </button>
        </form>
      </div>
    </motion.div>
  );
};

export default Contact;
