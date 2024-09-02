import React from "react";
import Image from "next/image";

const skillsImages = [
  {
    image: "/react.png",
    name: "React Js",
  },
  {
    image: "/next.png",
    name: "Next Js",
  },
  {
    image: "/mongodb.png",
    name: "MongoDb",
  },
  {
    image: "/laravel.png",
    name: "Laravel",
  },
  {
    image: "/statamic.png",
    name: "Statamic",
  },
  {
    image: "/github.png",
    name: "Github",
  },
  {
    image: "/javascript.png",
    name: "Javascript",
  },
  {
    image: "/html.png",
    name: "HTML",
  },
  {
    image: "/css.png",
    name: "CSS",
  },
  {
    image: "/tailwind-css.svg",
    name: "Tailwind",
  },
  {
    image: "/images2.png",
    name: "Bootstrap",
  },
  {
    image: "/express2.png",
    name: "Express",
  },
  {
    image: "/mysql.png",
    name: "Mysql",
  },
  {
    image: "/jquery-2.png",
    name: "Jquery",
  },
  {
    image: "/vs-code2.png",
    name: "VS Code",
  },
  {
    image: "/nodejs.png",
    name: "Node js",
  },
];

const skills = () => {
  return (
    <div className="w-full py-10 md:py-20 flex flex-col gap-4 text-white px-5 md:px-20 justify-center items-center"
    >
      <h1 className="text-2xl text-center text-white mb-10">TECH STACK</h1>
      <div className="grid grid-cols-5 justify-center items-center gap-5 md:gap-0 md:w-2/3">
        <div className="col-span-5 md:col-span-3 text-xl">
          <ul className="list-none flex flex-col gap-4">
            <li>
              <div className="flex flex-col">
                <p className="font-normal underline">Frontend Skills: </p>
                <p className="font-light">React, Nextjs, Tailwind CSS, Bootstrap</p>
              </div>
            </li>
            <li>
              <div className="flex flex-col">
                <p className="font-normal underline">Backend Skills: </p>
                <p className="font-light">Laravel, Mongodb, Express, Mysql, Jquery, Ajax</p>
              </div>
            </li>
            <li>
              <div className="flex flex-col">
                <p className="font-normal underline">Tools & Technologies: </p>
                <p className="font-light">Git, VS code</p>
              </div>
            </li>
            <li>
              <div className="flex flex-col">
                <p className="font-normal underline">Soft Skills: </p>
                <p className="font-light">Communication, Leadershir, Mentorship</p>
              </div>
            </li>
          </ul>
        </div>
        <div className="col-span-5 md:col-span-2">
          <div className="grid grid-cols-4 justify-center items-center gap-2 pt-2">
            {skillsImages.map(({ image, name }) => {
              return (
                <div
                  className="col-span-1 w-20 h-20 bg-gray-700 rounded-lg flex flex-col gap-2 justify-center items-center "
                  key={name}
                >
                  <div className="w-1/3 h-1/3 relative">
                    <Image
                      src={image}
                      alt=""
                      fill
                      objectFit="contain"
                      className="w-[20px] skills-image"
                    />
                  </div>
                  <p className="text-white text-xs">{name}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default skills;
