import { useEffect, useRef, useState } from "react";
import { TiSocialLinkedin } from "react-icons/ti";
import { FaGithub } from "react-icons/fa";

const FallingStarsWithLightTrail = () => {
  const canvasRef = useRef(null);
  const [typedText, setTypedText] = useState("");
  const fullText = "FULLSTACK DEVELOPER"; // Text to display with typewriter effect

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    let stars = [];
    const numStars = 150;

    // Typewriter effect logic
    let index = 0;

    const type = () => {
        console.log(fullText.length)
      if (index < fullText.length) {
        setTypedText((prev) => prev + fullText[index]);
        index++;
        setTimeout(type, 150); // Adjust speed by changing timeout duration
      }
    };

    // Start typing after a slight delay
    setTimeout(type, 500);

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
    };
  }, []);

  return (
    <div className="relative h-screen w-screen">
      {/* Canvas for falling stars */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0"
        style={{ backgroundColor: "#1f2937" }} // Dark gray background
      ></canvas>

      {/* Overlay with text and social icons */}
      <div className="absolute inset-0 flex flex-col justify-center items-center gap-4 z-10">
        <h1 className="text-8xl text-center text-white">Divyanjali Soni</h1>

        {/* Typewriter effect for the job title */}
        <h3 className="text-4xl text-white">{typedText}</h3>

        <div className="contacts flex gap-5">
          <div className="bg-black rounded-full p-2">
            <TiSocialLinkedin className="text-3xl text-white" />
          </div>
          <div className="bg-black rounded-full p-2">
            <FaGithub className="text-3xl text-white" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FallingStarsWithLightTrail;
