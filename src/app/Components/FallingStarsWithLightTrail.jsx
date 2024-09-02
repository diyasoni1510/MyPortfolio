"use client";
import { useEffect, useRef, useState } from "react";
import { TiSocialLinkedin } from "react-icons/ti";
import { FaGithub } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import { IoDocumentText } from "react-icons/io5";

const FallingStarsWithLightTrail = () => {
  const canvasRef = useRef(null);
  const [typedText, setTypedText] = useState("");
  const fullText = "FULLSTACK DEVELOPER";

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    let stars = [];
    const numStars = 150;

    // Typewriter effect logic
    let index = 0;

    const typingInterval = setInterval(() => {
      setTypedText((prevText) => {
        if (index <= fullText.length) {
          index++;
          return fullText.slice(0, index); // Append character by character
        } else {
          clearInterval(typingInterval); // Stop the interval when typing is done
          return prevText;
        }
      });
    }, 250);
    // Start typing after a slight delay

    function Star() {
      this.x = width + Math.random() * width;
      this.y = -Math.random() * height;
      this.radius = Math.random() * 2 + 1;
      this.dx = Math.random() * 2 + 1;
      this.dy = Math.random() * 2 + 1;
      this.shine = Math.random() * 5 + 1;
      this.rayLength = this.radius * 20;
    }

    function createStars() {
      for (let i = 0; i < numStars; i++) {
        stars.push(new Star());
      }
    }

    function drawStars() {
      ctx.clearRect(0, 0, width, height);

      stars.forEach((star) => {
        ctx.beginPath();
        ctx.moveTo(star.x, star.y);
        ctx.lineTo(star.x + star.rayLength, star.y - star.rayLength);
        ctx.lineWidth = 2;
        ctx.strokeStyle = `rgba(255, 255, 255, 0.2)`;
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = "white";
        ctx.shadowBlur = 10;
        ctx.shadowColor = `rgba(255, 255, 255, ${star.shine})`;
        ctx.fill();
      });
    }

    function animateStars() {
      drawStars();

      stars.forEach((star) => {
        star.x -= star.dx;
        star.y += star.dy;

        if (star.x < 0 || star.y > height) {
          star.x = width + Math.random() * width;
          star.y = -Math.random() * height;
        }
      });

      requestAnimationFrame(animateStars);
    }

    createStars();
    animateStars();

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      clearInterval(typingInterval);
    };
  }, [fullText]);

  return (
    <div className="relative w-full h-[98vh] md:h-[95vh]">
      <canvas
        ref={canvasRef}
        className="absolute inset-0"
        style={{ backgroundColor: "#1f2937", width: "100%" }} // Dark gray background
      ></canvas>
      <div className="absolute mt-10 md:mt-0 w-full h-full top-0 flex flex-col justify-center items-center gap-10 z-10">
        <h1 className="text-5xl md:text-8xl text-center text-white">
          Divyanjali Soni
        </h1>
        <h3 className="text-2xl md:text-4xl text-white">{typedText}</h3>
        <div className="contacts flex gap-5">
          <div className="bg-black rounded-full p-2 hover:scale-125 transition-all">
            <a href="https://www.linkedin.com/in/divyanjali-soni-14aa6021b/">
              <TiSocialLinkedin className="text-3xl text-white" />
            </a>
          </div>
          <div className="bg-black rounded-full p-2 hover:scale-125 transition-all">
            <a href="https://github.com/diyasoni1510">
              <FaGithub className="text-3xl text-white" />
            </a>
          </div>
          <div className="bg-black rounded-full p-2 hover:scale-125 transition-all">
            <a href="mailto:sonidiya126@gmail.com">
              <BiLogoGmail className="text-3xl text-white" />
            </a>
          </div>
          <div className="bg-black rounded-full p-2 hover:scale-125 transition-all">
            <a href="https://drive.google.com/file/d/1Xtjm26vPCep23YkC638J3xsNPBXmy-D6/view?usp=sharing">
              <IoDocumentText className="text-3xl text-white" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FallingStarsWithLightTrail;
