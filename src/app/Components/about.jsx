import React from "react";

const About = () => {
  return (
    <div className="w-full py-10 md:py-20 flex flex-col gap-4 text-white px-5 md:px-20  to-gray-800 from-gray-600 bg-gradient-to-b ">
      <h1 className="text-2xl text-center mb-5 md:mb-10 ">ABOUT</h1>
      <div className="text-xl leading-8 md:text-justify block md:w-2/3 mx-auto">
        <p>
          Hi, I’m Divyanjali Soni 👩‍💻, a Full Stack Developer based in Lucknow
          with around 2 years of experience in web development. My expertise is
          in creating dynamic, high-performance web applications using the MERN
          stack, as well as Next.js and Laravel 🚀.
        </p>
        <p>
          On the frontend, I specialize in building responsive and user-friendly
          interfaces using React and Next.js, ensuring seamless user experiences
          and performance optimization ⚡. On the backend, I leverage Node.js
          and Express.js for efficient API development and Laravel to craft
          scalable, secure applications 🔒.
        </p>

        <p>
          I’m passionate about blending creativity with technology to solve
          real-world problems and deliver impactful solutions 🎨💡. When I'm not
          coding, you can find me reading books 📚 or exploring new music 🎶.
        </p>

        <p>
          Let’s connect if you’re interested in collaboration or want to chat
          about the latest in web development! 🚀
        </p>
      </div>
      <div className="text-xl leading-8 md:text-justify hidden mx-auto">
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

export default About;
