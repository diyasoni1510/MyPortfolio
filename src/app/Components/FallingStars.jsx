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
    <canvas
      ref={canvasRef}
      style={{ display: "block", backgroundColor: "#1a1a1a" }} // Dark gray background
    ></canvas>
  );
};

export default FallingStars;
