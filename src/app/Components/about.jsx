import React from "react";

const about = () => {
  return (
    <div className="w-full py-20 flex flex-col gap-4 text-white px-5 md:px-20 bg-gradient-to-b from-gray-800 to-gray-600 ">
      <h1 className="text-2xl text-center mb-5 md:mb-10 ">ABOUT</h1>
      <div className="text-xl leading-8 md:text-justify hidden md:block md:w-2/3 mx-auto">
        <p>
          Hi, I’m Divyanjali Soni, a Frontend Developer based in Lucknow with
          almost a year of experience in web development. My expertise focuses
          on crafting dynamic and user-friendly web applications using React and
          Laravel.
        </p>
        <p>
          In my role, I build engaging user interfaces with React, leveraging
          its component-based architecture to create seamless and interactive
          experiences. On the backend, I utilize Laravel to develop robust
          applications with secure authentication and efficient data management.
        </p>

        <p>
          I am passionate about merging creativity with technology to solve
          problems and deliver high-quality results. Outside of coding, I enjoy
          reading books and indulging in music.
        </p>

        <p>
          Feel free to connect with me if you’re interested in collaboration or
          just want to discuss the latest in web development!
        </p>
      </div>
      <div className="text-xl leading-8 md:text-justify block md:hidden mx-auto">
        <p>
          Hi, I’m Divyanjali Soni, a Frontend Developer based in Lucknow with
          nearly a year of experience. I specialize in building interactive web
          applications using React for the frontend and Laravel for the backend.
          My focus is on creating seamless user experiences and secure,
          efficient applications. I’m passionate about combining creativity and
          technology to deliver high-quality results. When I’m not coding, I
          enjoy writing books and indulging in music. Let’s connect and discuss
          exciting opportunities in web development!
        </p>
      </div>
      <div className="flex flex-col items-end">
        <p>Divyanjali Soni</p>
        <img src=""></img>
      </div>
    </div>
  );
};

export default about;
