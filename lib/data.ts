import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import {
  FaReact,
  FaHtml5,
  FaCss3,
  FaNodeJs,
  FaGitAlt,
  FaVuejs,
  FaAws,
  FaCouch,
  FaDocker,
  FaNode,
} from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import { IoLogoJavascript } from "react-icons/io5";
import {
  SiAmazondynamodb,
  SiExpress,
  SiMysql,
  SiNextdotjs,
  SiPostgresql,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

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
    title: "Graduated bootcamp",
    location: "Miami, FL",
    description:
      "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2019",
  },
  {
    title: "Front-End Developer",
    location: "Orlando, FL",
    description:
      "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2021",
  },
  {
    title: "Full-Stack Developer",
    location: "Houston, TX",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2021 - present",
  },
] as const;

export const projectsData = [
  {
    title: "CorpComment",
    description:
      "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
    imageUrl: corpcommentImg,
  },
  {
    title: "rmtDev",
    description:
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Word Analytics",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  { text: "HTML", icon: React.createElement(FaHtml5), iconColor: "#e34c26" },
  {
    text: "CSS",
    icon: React.createElement(FaCss3),
    iconColor: "#2962ff",
  },
  {
    text: "Tailwind",
    icon: React.createElement(SiTailwindcss),
    iconColor: "#78cac3",
  },
  {
    text: "JavaScript",
    icon: React.createElement(IoLogoJavascript),
    iconColor: "#f0db4f",
  },
  {
    text: "Vue",
    icon: React.createElement(FaVuejs),
    iconColor: "#42b883",
  },
  { text: "React", icon: React.createElement(FaReact), iconColor: "#61DBFB" },
  {
    text: "Node",
    icon: React.createElement(FaNode),
    iconColor: "#3c873a",
  },
  {
    text: "Express",
    icon: React.createElement(SiExpress),
    iconColor: "#4d4f53",
  },
  {
    text: "TypeScript",
    icon: React.createElement(SiTypescript),
    iconColor: "#007acc",
  },
  {
    text: "Next",
    icon: React.createElement(SiNextdotjs),
    iconColor: "#000000",
  },
  {
    text: "Git",
    icon: React.createElement(FaGitAlt),
    iconColor: "#f34f29",
  },
  {
    text: "PostgreSQL",
    icon: React.createElement(SiPostgresql),
    iconColor: "#336791",
  },
  {
    text: "MySQL",
    icon: React.createElement(SiMysql),
    iconColor: "#336791",
  },
  {
    text: "CouchDB",
    icon: React.createElement(FaCouch),
    iconColor: "#e52023",
  },
  {
    text: "DynamoDB",
    icon: React.createElement(SiAmazondynamodb),
    iconColor: "#1a476f",
  },
  {
    text: "AWS",
    icon: React.createElement(FaAws),
    iconColor: "#ff9900",
  },
  {
    text: "Docker",
    icon: React.createElement(FaDocker),
    iconColor: "#2396ed",
  },
  {
    text: "Framer Motion",
    icon: React.createElement(TbBrandFramerMotion),
    iconColor: "#eb00a7",
  },
] as const;
