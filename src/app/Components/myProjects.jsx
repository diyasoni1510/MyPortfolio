import Link from "next/link";
import React from "react";
import { VscGithub } from "react-icons/vsc";

const projectInfo = [
  {
    name: "CHAT APP",
    image: "/social-media.jpg",
    codeLink: "https://github.com/diyasoni1510/Gupshup",
    desc: "Social Media: Nextjs social media web Application, user-friendly, real-time messaging, JWT-based security, ensuring responsiveness, prioritizing seamless communication.",
  },
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
    <div className="w-full py-20 flex flex-col gap-4 text-white px-5 md:px-20 bg-cover bg-bottom bg-no-repeat"
    style={{backgroundImage:`url('/about-wave-bg2.svg')`}}>
      <h1 className="text-2xl text-center ">MY PROJECTS</h1>
      <div className="grid grid-cols-3 gap-5 justify-center items-center">
        {projectInfo.map((project, index) => {
          return (
            <div
              key={index}
              className="col-span-3 flex justify-center items-center"
            >
              <div className=" w-2/3 max-h-[300px] flex gap-10 justify-center items-center bg-gradient-to-t from-white to-gray-700 text-black p-4">
                <div className="relative max-h-[300px] ">
                  <img
                    src={project.image}
                    alt=""
                    className="blur-[2px] max-h-[300px]"
                  />
                  <div className="absolute top-0 flex justify-center items-center w-full h-full ">
                    <p className="bg-gray-800 bg-opacity-50 p-2 text-white font-semibold">
                      {project.name}
                    </p>
                  </div>
                </div>
                <div className="flex flex-col gap-5">
                  <p>{project.desc}</p>
                  <Link
                    href={project.codeLink}
                    className="link-button text-sm bg-gray-800 text-black w-full text-center rounded py-2 flex gap-2 justify-center items-center"
                  >
                    <VscGithub />
                    Go To Code
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default myProjects;
