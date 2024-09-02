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
import FallingStars from "./Components/FallingStars";
import FallingStarsWithLight from "./Components/FallingStarsWithLight";
import FallingStarsWithLightTrail from "./Components/FallingStarsWithLightTrail";
import MyProjects from "./Components/myProjects";
import Experience from "./Components/experience";
import Contact from "./Components/contact";

import { FaSquareInstagram } from "react-icons/fa6";
import { SiInstagram } from "react-icons/si";

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
        {/*<Divider />
          <Contact /> */}
      </div>
    </>
  );
};

export default Homepage;
