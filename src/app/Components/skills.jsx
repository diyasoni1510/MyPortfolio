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
];

const skills = () => {
  return (
    <div
      className="py-8 flex flex-col gap-4"
      initial={{ y: 200 }}
      whileInView={{ y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <h1 className="text-2xl text-center ">SKILLS</h1>
      <div className="flex flex-wrap justify-around items-center gap-2 pt-2">
        {skillsImages.map(({ image, name }) => {
          return (
            // <div className="relative">
            //   <div
            //     className="w-24 h-24 bg-gray-700 opacity-50 rounded-lg flex justify-center items-center"
            //     key={name}
            //   >
            //     <div className="w-5/6 h-5/6 relative">
            //       <Image
            //         src={image}
            //         alt=""
            //         fill
            //         objectFit="contain"
            //         className="w-5/6"
            //       />
            //     </div>
            //   </div>
            //   <div className="absolute top-10  w-full flex justify-center items-center z-50 text-white">
            //     <p className="bg-black w-fit text-xs rounded p-1">{name}</p>
            //   </div>
            // </div>
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
                  className="w-5/6"
                />
              </div>
              <p className="text-white text-xs">{name}</p>
            </div>
          );
        })}
        {/* <div className='w-20 h-20 bg-gray-800 opacity-30 rounded-lg'>
                <Image src="/github.png" alt="" width={50} height={50}/>
            </div> */}
      </div>
    </div>
  );
};

export default skills;
