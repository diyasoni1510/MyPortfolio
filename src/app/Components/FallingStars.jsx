"use client";
import { useEffect, useRef } from "react";

const FallingStars = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Array to store the stars
    let stars = [];
    const numStars = 150; // Number of stars

    // Star constructor
    function Star() {
      this.x = Math.random() * width;
      this.y = Math.random() * height;
      this.radius = Math.random() * 2 + 1; // Star size
      this.dy = Math.random() * 0.5 + 0.5; // Falling speed
      this.shine = Math.random() * 5 + 1;  // Star glow intensity
    }

    // Create stars
    function createStars() {
      for (let i = 0; i < numStars; i++) {
        stars.push(new Star());
      }
    }

    // Draw stars
    function drawStars() {
      ctx.clearRect(0, 0, width, height);
      ctx.fillStyle = "white";
      ctx.shadowBlur = 10;

      stars.forEach((star) => {
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fill();
        ctx.shadowColor = `rgba(255,255,255,${star.shine})`; // Star glow
      });
    }

    // Animate stars
    function animateStars() {
      drawStars();

      stars.forEach((star) => {
        star.y += star.dy;

        // If star goes off screen, reset to the top
        if (star.y > height) {
          star.y = 0;
          star.x = Math.random() * width;
        }
      });

      requestAnimationFrame(animateStars);
    }

    createStars();
    animateStars();

    // Resize canvas on window resize
    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="relative w-full h-[95vh]">
    <canvas
      ref={canvasRef}
      className="absolute inset-0"
      style={{ display: "block", backgroundColor: "#1a1a1a" }} // Dark gray background
    ></canvas>
    <div className="absolute top-0 w-full py-20 flex flex-col gap-4 text-white px-5 md:px-20 justify-center items-center bg-contain bg-center bg-no-repeat"
    >
      <h1 className={`text-2xl text-center section-head`}>EXPERIENCE</h1>
      <div className="flex flex-col  w-2/3">
        <div className="job flex gap-1">
          <div className="text-xs w-1/4">
            Oct 2023 -<br /> present
          </div>
          <div className="flex flex-col  items-center w-1/6">
            <div className="w-6 h-6 flex-shrink-0 rounded-full bg-white"></div>
            <div className="w-1 rounded bg-black h-[130px]"></div>
          </div>
          <div className="w-2/3">
            <h3>WEB DEVELOPER</h3>
            <p>360 Adaptive Technologies</p>
            <div className="text-left">
              <p>
                Web developer specializing in React.js and Statamic, shaping
                seamless and dynamic digital experiences with expertise.
              </p>
            </div>
          </div>
        </div>
        <div className="job flex gap-1">
          <div className="text-xs w-1/4">
            June 2023 -<br /> Oct 2023
          </div>
          <div className="flex flex-col  items-center w-1/6">
            <div className="w-6 h-6 flex-shrink-0 rounded-full bg-white"></div>
            <div className="w-1  h-[130px] rounded bg-black"></div>
          </div>
          <div className="w-2/3">
            <h3>SOFTWARE TRAINEE</h3>
            <p>Prayagrajxport</p>
            <div className="text-left">
              <p>
                Collaborated on frontend and backend tasks, delivering a
                captivating and personalized user experience.
              </p>
            </div>
          </div>
        </div>
        <div className="job flex gap-1">
          <div className="text-xs w-1/4">
            May 2023 -<br /> July 2023
          </div>
          <div className="flex flex-col  items-center w-1/6">
            <div className="w-6 h-6 flex-shrink-0 rounded-full bg-white"></div>
            <div className="w-1  h-[130px] rounded bg-black"></div>
          </div>
          <div className="w-2/3">
            <h3>WEB DEVELOPMNET INTERN</h3>
            <p>Igoko Avionics</p>
            <div className="text-left">
              <p>
                Led dynamic team in full stack website development during
                internship, spearheading end-to-end processes and fostering
                effective collaboration.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default FallingStars;
