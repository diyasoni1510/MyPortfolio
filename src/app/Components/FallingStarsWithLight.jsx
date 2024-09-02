"use client";
import { useEffect, useRef } from "react";

const FallingStarsWithLight = () => {
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
      this.x = width + Math.random() * width; // Start from the right
      this.y = Math.random() * height;
      this.radius = Math.random() * 2 + 1; // Star size
      this.dx = Math.random() * 2 + 1; // Horizontal speed
      this.dy = Math.random() * 0.5 - 0.25; // Vertical slight drift
      this.shine = Math.random() * 5 + 1; // Star glow intensity
      this.rayLength = this.radius * 20; // Length of the light ray behind the star
    }

    // Create stars
    function createStars() {
      for (let i = 0; i < numStars; i++) {
        stars.push(new Star());
      }
    }

    // Draw stars with rays
    function drawStars() {
      ctx.clearRect(0, 0, width, height);

      stars.forEach((star) => {
        // Draw the ray behind the star
        ctx.beginPath();
        ctx.moveTo(star.x - star.rayLength, star.y);
        ctx.lineTo(star.x, star.y);
        ctx.lineWidth = 2;
        ctx.strokeStyle = `rgba(255, 255, 255, 0.2)`; // Light ray effect
        ctx.stroke();

        // Draw the shining star
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = "white";
        ctx.shadowBlur = 10;
        ctx.shadowColor = `rgba(255, 255, 255, ${star.shine})`; // Glow effect
        ctx.fill();
      });
    }

    // Animate stars
    function animateStars() {
      drawStars();

      stars.forEach((star) => {
        // Move the stars from right to left
        star.x -= star.dx;
        star.y += star.dy;

        // If the star goes off screen, reset it to the right
        if (star.x < 0) {
          star.x = width + Math.random() * width;
          star.y = Math.random() * height;
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

export default FallingStarsWithLight;
