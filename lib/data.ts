import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import animeImg from "@/public/anime.png";
import visitPanautiImg from "@/public/visitpanauti.png";
import loomImg from "@/public/loom.png";
import expenzo from "@/public/expenzo.png"
import logoBuddy from "@/public/logoBuddy.png"

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Full-Stack Developer",
    location: "CastellTech Pvt. Ltd, Sinamangal, Kathmandu",
    description:
      "Developed and maintained backend systems using JavaScript and Node.js, ensuring scalable and efficient code. robust authentication mechanisms with JWT and applied various security measures.",
    icon: React.createElement(CgWorkAlt),
    date: "May 2022 – May 2023",
  },
  {
    title: "Full-Stack Developer",
    location: "NexSewa Pvt.Ltd, Kathmandu",
    description:
      "I worked as a fullsatck developer on contract basis. Developed and managed backend services, tourism promotion application using Node.js, ensuring scalable and efficient RESTful APIs.",
    icon: React.createElement(CgWorkAlt),
    date: "Jul 2023 – Aug 2023",
  },
  {
    title: "Dot Net Developer",
    location: "Aarshia Infotech, Kathmandu",
    description:
      "part of large-scale software projects, including management and data management systems, using .NET technologies. Gained experience in implementing scalable, maintainable, and secure code while learning various design patterns and best practices.",
    icon: React.createElement(CgWorkAlt),
    date: "Apr 2024 – Jul 2024",
  },
] as const;

export const projectsData = [
  {
    title: "Expenzo",
    description:
      "A modern expense tracker application built with Expo and React Native, designed to help users efficiently manage and track their expenses.",
    tags: ["Expo", "React Native", "SQLite", "TypeScript"],
    imageUrl: expenzo,
  },
  {
    title: "LogoBuddy",
    description:
      "An AI-powered logo builder that leverages Hugging Face and Replicate for generating custom logos. Includes Firebase for storage and Clerk for authentication.",
    tags: ["AI", "Hugging Face", "Replicate", "Firebase", "Clerk"],
    imageUrl: logoBuddy,
  },

  {
    title: "Loom: Online Meeting Application",
    description:
      "Developed a full-stack video application enabling users to record, stream, and share video content seamlessly.",
    tags: ["React", "Next.js", "Stream", "Tailwind", "Clerk"],
    imageUrl: loomImg,
  },
  {
    title: "AnimeRelam",
    description:
      "A web app for the showing the list of the anime and their details.",
    tags: ["React", "vercel", "Tailwind", "API"],
    imageUrl: animeImg,
  },
  {
    title: "VisitPanauti",
    description:
      "Developed and contributed to the Panauti Municipality Project, focused on a tourism app development using React Native for both Android and IOS",
    tags: ["React Native", "Expo", "Express", "Tailwind", "MongoDb"],
    imageUrl: visitPanautiImg,
  },

] as const;

export const skillsData = [
  "JavaScript/TypeScript",
  "React",
  "Next.js",
  "Redux",
  "Node.js",
  "Dot NET",
  "EntityFramework",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "PostgreSQL",
  "GraphQL",
  "Apollo",
  "Express",
  "Python",
  "Framer Motion",
] as const;
