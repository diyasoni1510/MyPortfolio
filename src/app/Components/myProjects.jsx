import Link from "next/link";
import React from "react";
import { VscGithub } from "react-icons/vsc";
import { motion } from "framer-motion";

const projectInfo = [
  {
    name: "GUPSHUP",
    image: "/chat-app.jpg",
    codeLink: "https://github.com/diyasoni1510/Gupshup",
    desc: "Gupshup: MERN chat app, user-friendly, real-time messaging, JWT-based security, ensuring responsiveness, prioritizing seamless communication.",
  },
  {
    name: "EDUCO",
    image: "/e-learning.jpg",
    codeLink: "https://github.com/diyasoni1510/Educo",
    desc: "Educo: Dynamic e-learning site, revolutionizing education. Seamless, interactive, user-friendly platform for learners of all ages and backgrounds.",
  },
  {
    name: "AMAKART",
    image: "/e-commerce.jpg",
    codeLink: "https://github.com/diyasoni1510/Amakart",
    desc: "Implemented e-commerce features: shopping cart, order processing, and inventory management, enhancing functionality for effective online retail.",
  },
];

const myProjects = () => {
  return (
    <div>
      <h1 className="text-2xl text-center ">MY PROJECTS</h1>
      <div className="grid grid-cols-3 gap-3 justify-center items-center">
        {projectInfo.map((project, index) => {
          return (
            <div
              key={index}
              className="col-span-1 flex gap-2 flex-col justify-center items-center bg-gradient-to-t from-white to-gray-700 text-black p-4 "
            >
              <div className="relative ">
                <img src={project.image} alt="" className="blur-[2px]" />
                <div className="absolute top-0 flex justify-center items-center w-full h-full ">
                  <p className="bg-gray-800 bg-opacity-50 p-2 text-white font-semibold">
                    {project.name}
                  </p>
                </div>
              </div>
              <div className="flex text-sm flex-col gap-2">
                <p>{project.desc}</p>
                <Link
                  href={project.codeLink}
                  className="bg-black text-white w-full  text-center rounded py-1 flex gap-2 justify-center items-center"
                >
                  <VscGithub />
                  Go To Code
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default myProjects;
