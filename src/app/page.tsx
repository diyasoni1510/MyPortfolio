"use client";
import { CiLinkedin } from "react-icons/ci";
import { VscGithub } from "react-icons/vsc";
import { FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import About from "./Components/about";
import Divider from "./Components/divider";
import Skills from "./Components/skills";
import MyProjects from "./Components/myProjects";
import Experience from "./Components/experience";
import Contact from "./Components/contact";

const Homepage = () => {
  return (
    <>
      <div className="h-screen w-screen bg-gradient-to-t from-gray-500 to-gray-800 text-red-50 overflow-scroll p-5">
        <header className="flex justify-between text-white">
          <h1 className="font-bold">DIVYANJALI SONI</h1>
          <div className="flex gap-2 text-xl">
            <CiLinkedin />
            <VscGithub />
            <FaInstagram />
          </div>
        </header>
        <motion.div
          className="h-full"
          initial={{ y: "200vh" }}
          animate={{ y: "0%" }}
          transition={{ duration: 1 }}
        >
          <div className="h-full flex flex-col items-center md:flex-row ">
            <div className="h-1/2 w-full md:h-full md:w-1/2 relative ">
              <Image
                src="/hero.png"
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
        </motion.div>
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
    </>
  );
};

export default Homepage;
