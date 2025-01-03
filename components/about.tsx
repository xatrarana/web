"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        While pursuing my{" "}
        <span className="font-medium">
          Bachelor of Science in Information Technology (Hons)
        </span>
        , I decided to pursue my passion for programming. I am a{" "}
        <span className="font-medium">full-stack developer</span> specializing
        in <span className="font-medium">Node.js and React (Next.js)</span>. I
        am also familiar with and have worked with the{" "}
        <span className="font-medium">.NET Framework and Entity Framework</span>
        , gaining valuable experience in both ecosystems. To deepen my
        knowledge, I have completed{" "}
        <span className="font-medium">
          various courses on e-learning platforms
        </span>
        , continually expanding my skill set. My core stack includes{" "}
        <span className="font-medium">
          backend development using Node.js or .NET Framework, frontend
          development with React/Next.js, and relational or non-relational
          databases
        </span>
        . <span className="italic">My favorite part of programming</span> is the
        problem-solving aspect. I <span className="underline">love</span> the
        thrill of working through challenges and the sense of accomplishment
        when I finally find a solution. I am currently looking for a{" "}
        <span className="font-medium">full-time position</span> as a software
        developer.
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy playing
        video games, watching movies, and traveling. I also enjoy{" "}
        <span className="font-medium">learning new things</span>. I am currently
        learning about{" "}
        <span className="font-medium">
          data structures, algorithms, and playing the guitar
        </span>
        .
      </p>
    </motion.section>
  );
}
