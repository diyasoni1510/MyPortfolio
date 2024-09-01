"use client";
import { CiLinkedin } from "react-icons/ci";
import { VscGithub } from "react-icons/vsc";
import { FaInstagram } from "react-icons/fa";
// import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import About from "./Components/about";
import Divider from "./Components/divider";
import Skills from "./Components/skills";
import MyProjects from "./Components/myProjects";
import Experience from "./Components/experience";
import Contact from "./Components/contact";
import { TiSocialLinkedin } from "react-icons/ti";
import { FaGithub } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { SiInstagram } from "react-icons/si";

const Homepage = () => {
  return (
    <>
      <div className="container px-5 lg:px-20">
        <div className="h-screen w-screen bg-gradient-to-t from-gray-500 to-gray-800 text-red-50 overflow-scroll p-5">
          {/* <header className="flex justify-between text-white">
          <h1 className="font-bold">DIVYANJALI SONI</h1>
          <div className="flex gap-2 text-xl">
            <CiLinkedin />
            <VscGithub />
            <FaInstagram />
          </div>
        </header>
        <div
          className="h-full"
          initial={{ y: "200vh" }}
          animate={{ y: "0%" }}
          transition={{ duration: 1 }}
        >
          <div className="h-full flex flex-col items-center md:flex-row ">
            <div className="h-1/2 w-full md:h-full md:w-1/2 relative ">
              <Image
                src="/my-pic.png"
                fill
                className="object-contain"
                alt="hero"
              />
            </div>
            <div className="md:h-full md:w-1/2 flex flex-col gap-8 pt-4  justify-center">
              <h1 className="font-bold text-3xl sm:text-4xl">Web Developer </h1>
              <p>
                Web Developer with a passion for creating responsive websites
                and delivering exceptional user experience. Problem solver and
                dedicatde team palyer
              </p>
              <div className="flex gap-4">
                <Link href="/portfolio">
                  <button className="ring-1 text-sm font-semibold rounded-lg p-2 ring-black bg-black text-white">
                    View my work
                  </button>
                </Link>
                <Link href="/contact">
                  <button className="ring-1 text-sm font-semibold rounded-lg p-2 ring-black hover:bg-black hover:text-white transition transform">
                    Contact Me
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div> */}
          <div className="h-screen flex flex-col justify-center items-center gap-4">
            <h1 className="text-8xl text-center">Divyanjali Soni</h1>
            <h3 className="text-4xl">FRONTEND DEVELOPER</h3>
            <div className="contacts flex gap-5">
              <div className="bg-black rounded-full p-2">
                <TiSocialLinkedin className="text-3xl" />
              </div>
              <div className="bg-black rounded-full p-2">
                <FaGithub className="text-3xl" />
              </div>
              {/* <div className="bg-black rounded-full p-2">
              <SiInstagram className="text-3xl" />
            </div> */}
            </div>
          </div>
          <Divider />
          <About />
          <Divider />
          <Skills />
          <Divider />
          <MyProjects />
          <Divider />
          <Experience />
          <Divider />
          <Contact />
        </div>
      </div>
    </>
  );
};

export default Homepage;
