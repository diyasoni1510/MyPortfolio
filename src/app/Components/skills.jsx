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
];

const skills = () => {
  return (
    <div className="w-full py-20 flex flex-col gap-4 text-white px-5 md:px-20 justify-center items-center"
    >
      <h1 className="text-2xl text-center text-white">TECH STACK</h1>
      <div className="grid grid-cols-5 justify-center items-center w-2/3">
        <div className="col-span-3 text-xl">
          <ul className="list-none flex flex-col gap-4">
            <li>
              <div className="flex flex-col">
                <p className="font-semibold">Frontend Skills: </p>
                <p>React, Nextjs, Tailwind CSS, Bootstrap</p>
              </div>
            </li>
            <li>
              <div className="flex flex-col">
                <p className="font-semibold">Backend Skills: </p>
                <p>Laravel, Mongodb, Express, Mysql, Jquery, Ajax</p>
              </div>
            </li>
            <li>
              <div className="flex flex-col">
                <p className="font-semibold">Tools & Technologies: </p>
                <p>Git, VS code</p>
              </div>
            </li>
            <li>
              <div className="flex flex-col">
                <p className="font-semibold">Soft Skills: </p>
                <p>Communication, Leadershir, Mentorship</p>
              </div>
            </li>
          </ul>
        </div>
        <div className="col-span-2">
          <div className="flex flex-wrap justify-center items-center gap-2 pt-2">
            {skillsImages.map(({ image, name }) => {
              return (
                <div
                  className="w-20 h-20 bg-gray-700 rounded-lg flex flex-col gap-2 justify-center items-center "
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
