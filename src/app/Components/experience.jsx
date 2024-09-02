"use client";
import React from "react";
import { useEffect } from "react";

const Experience = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      { threshold: 1 } // Trigger when 50% of the element is visible
    );

    const jobElements = document.querySelectorAll(".job");
    jobElements.forEach((el) => observer.observe(el));

    return () => {
      jobElements.forEach((el) => observer.unobserve(el));
    };
  }, []);
  return (
    <div className="w-full py-10 md:py-20 flex flex-col gap-4 text-white px-5 md:px-20 justify-center items-center  bg-gradient-to-b from-gray-600 to-gray-800">
      <h1 className={`text-2xl text-center section-head mb-10`}>EXPERIENCE</h1>
      <div className="flex flex-col md:w-2/3">
        <div className="job flex gap-1 fade-in">
          <div className="w-1/4">Oct 2023 - present</div>
          <div className="flex flex-col items-center w-1/6">
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

        <div className="job flex gap-1 fade-in">
          <div className="w-1/4">June 2023 - Oct 2023</div>
          <div className="flex flex-col items-center w-1/6">
            <div className="w-6 h-6 flex-shrink-0 rounded-full bg-white"></div>
            <div className="w-1 h-[130px] rounded bg-black"></div>
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

        <div className="job flex gap-1 fade-in">
          <div className="w-1/4">May 2023 - July 2023</div>
          <div className="flex flex-col items-center w-1/6">
            <div className="w-6 h-6 flex-shrink-0 rounded-full bg-white"></div>
            <div className="w-1 h-[130px] rounded bg-black"></div>
          </div>
          <div className="w-2/3">
            <h3>WEB DEVELOPMENT INTERN</h3>
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
  );
};

export default Experience;
