"use client";
import { CiLinkedin } from "react-icons/ci";
import { VscGithub } from "react-icons/vsc";
import { FaInstagram } from "react-icons/fa";
// import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import About from "./Components/About";
import Divider from "./Components/Divider";
import Skills from "./Components/Skills";
import Footer from "./Components/Footer";
import FallingStars from "./Components/FallingStars";
import FallingStarsWithLight from "./Components/FallingStarsWithLight";
import FallingStarsWithLightTrail from "./Components/FallingStarsWithLightTrail";
import MyProjects from "./Components/MyProjects";
import Experience from "./Components/Experience";
import Contact from "./Components/Contact";


const Homepage = () => {
  return (
    <>
      <div className="bg-gray-800">
        <FallingStarsWithLightTrail />
        <About />
        {/* <Divider /> */}
        <Experience />
        <Divider />
        <Skills/>
        <Divider />
        <MyProjects />
        {/* <Divider /> */}
        <Footer/>
         {/* <Contact /> */}
      </div>
    </>
  );
};

export default Homepage;
