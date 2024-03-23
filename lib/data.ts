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
  FaDraftingCompass,
  FaFreeCodeCamp,
  FaPhp,
  FaJira,
} from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import { IoLogoJavascript } from "react-icons/io5";
import {
  SiAmazondynamodb,
  SiExpress,
  SiMysql,
  SiNextdotjs,
  SiPostgresql,
  SiPostman,
  SiSequelize,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";
import betterSellerImg from "@/public/better-seller.png";
import mrcImg from "@/public/mrc.png";
import hrdSystemImg from "@/public/hrd-system.png";
import pmsImg from "@/public/pms.png";
import hrdDocImg from "@/public/hrd-docs.png";
import internalWebMailImg from "@/public/internal-web-mail.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
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
    title: "Sr. Full-Stack Developer",
    location: "Outgive, Canada",
    description:
      "Integrate Rainforest API, Amazon SP API, and GMAIL to deliver comprehensive analytics on clients' sales and profits.",
    icon: React.createElement(FaReact),
    date: "2021 - Present",
  },
  {
    title: "Full-Stack Team Lead",
    location: "HRD, Philippines (Japan Company)",
    description:
      "Internally promoted to the position of Full-Stack Team Lead, where I spearheaded the design and development of multiple projects alongside my team.",
    icon: React.createElement(FaVuejs),
    date: "2017 - 2021",
  },
  {
    title: "Self-Taught Developer",
    location: "HRD, Philippines  (Japan Company)",
    description:
      "Desiring to expand my skill set, I took the initiative to self-teach HTML, CSS, JavaScript, and initially some PHP.",
    icon: React.createElement(FaFreeCodeCamp),
    date: "2015 - 2017",
  },
  {
    title: "AutoCAD",
    location: "HRD, Philippines  (Japan Company)",
    description:
      "Commenced my career as an AutoCAD designer and labor cost estimator.",
    icon: React.createElement(FaDraftingCompass),
    date: "2010-2017",
  },
] as const;

export const projectsData = [
  {
    title: "Better-seller",
    link: "https://agency.betterseller.com/",
    description:
      "Better Seller enhances Amazon selling through valuable insights and data-driven solutions to boost performance and profitability.",
    tags: ["PostgreSQL", "Express", "React", "Node", "Docker", "AWS"],
    imageUrl: betterSellerImg,
  },
  {
    title: "Massage Remedial Care LLC",
    link: "https://massageremedialcarellc.com/",
    description:
      "A public web app that show available services and pricing. Side Project.",
    tags: ["React", "Tailwind", "Redux"],
    imageUrl: mrcImg,
  },
  {
    title: "HRD Documentation",
    link: "https://rulebook.hrd-s.com/",
    description:
      "Systematized the procedure of requesting, approval, and stamping for ofﬁcial Documents (Procedure, Work Instructions, Process Flow) in HRD",
    tags: ["Vue", "Vuetify", "CouchDB", "Node", "Express"],

    imageUrl: hrdDocImg,
  },
  {
    title: "HRD System",
    link: "https://system.hrd-s.com/",
    description:
      "HRD collection of systems that contain Access center for all applications used in HRD",
    tags: [
      "DynamoDB",
      "S3",
      "API Gateway",
      "Lambda",
      "Vue",
      "Vuetify",
      "Node",
      "Express",
    ],
    imageUrl: hrdSystemImg,
  },
  {
    title: "HRD Production Control",
    link: "https://pcms.hrd-s.com/",
    description:
      "System to monitor the output in different department, the status of production, and scheduling of task.",
    tags: ["Vue", "Vuetify", "CouchDB", "MySQL", "MSSQL", "Node", "Express"],
    imageUrl: pmsImg,
  },
  {
    title: "HRD Internal Web Mail",
    link: "https://webmail.hrd-s.com/",
    description: "Replace email for internal usage inside HRD.",
    tags: ["Vue", "Vuetify", "CouchDB", "Node", "Express"],
    imageUrl: internalWebMailImg,
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
    text: "PHP",
    icon: React.createElement(FaPhp),
    iconColor: "#777BB3",
  },
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
    text: "Jira",
    icon: React.createElement(FaJira),
    iconColor: "#2684fe",
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
    text: "Sequelize",
    icon: React.createElement(SiSequelize),
    iconColor: "#2379BD",
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
    text: "Postman",
    icon: React.createElement(SiPostman),
    iconColor: "#EF5B25",
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
] as const;
