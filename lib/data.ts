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
  SiZoho,
  SiDigitalocean,
  SiVercel,
  SiCloudflare,
  SiWordpress,
  SiRedis,
} from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";
import { HiCreditCard, HiQueueList } from "react-icons/hi2";
import {
  FaServer,
  FaUserTie,
  FaPython,
  FaLock,
  FaEdit,
  FaDatabase,
  FaUbuntu,
  FaTasks,
  FaCode,
  FaLaptopCode,
} from "react-icons/fa";
import {
  SiOpenai,
  SiNginx,
  SiJsonwebtokens,
  SiSocketdotio,
} from "react-icons/si";
import betterSellerImg from "@/public/better-seller.png";
import mrcImg from "@/public/mrc.png";
import hrdSystemImg from "@/public/hrd-system.png";
import pmsImg from "@/public/pms.png";
import hrdDocImg from "@/public/hrd-docs.png";
import internalWebMailImg from "@/public/internal-web-mail.png";
import articleToolImg from "@/public/article-tool.png";
import scrtImg from "@/public/scrt.png";
import wordpressSubmitterImg from "@/public/Wordpress-submitter.png";
import wikiToolImg from "@/public/wiki-tool.png";
import naxosImg from "@/public/naxos.png";
import konkerImg from "@/public/konker.png";

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
      "Integrated multiple APIs (Rainforest API, Amazon SP API, Gmail, Braintree, Zoho) to deliver comprehensive analytics on clients' sales and profits. Developed a complete CRM system managing the entire business process from lead generation through sales stages, proposal creation, to client acquisition. Currently the sole remaining developer after the team was reduced from 12 members due to company-wide layoffs.",
    icon: React.createElement(FaReact),
    date: "2021 - Present",
  },
  {
    title: "Freelance Developer",
    location: "Remote",
    description:
      "Providing part-time freelance development services (20+ hours/week) alongside full-time role. Developed static websites for local businesses including Massage Remedial Care LLC and Naxos Café & Restaurant. Collaborated with startups to create specialized SEO tools and automation solutions to enhance their digital marketing capabilities.",
    icon: React.createElement(FaLaptopCode),
    date: "2022 - Present",
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
    tags: [
      "PostgreSQL",
      "Express",
      "React",
      "Node",
      "Docker",
      "AWS",
      "Zoho",
      "Braintree",
      "Redis",
      "Bull Queue",
    ],
    imageUrl: betterSellerImg,
  },
  {
    title: "Konker",
    link: "https://konker.io",
    description:
      "A comprehensive freelancer marketplace platform connecting skilled professionals with clients. Contributed as a frontend developer in the early stages, building key modules and implementing real-time communication features with Socket.io.",
    tags: ["Next.js", "TypeScript", "Tailwind", "Shadcn UI", "Socket.io"],
    imageUrl: konkerImg,
  },
  {
    title: "Wiki-Tool",
    link: "#",
    description:
      "A comprehensive Wikipedia link analysis tool that checks backlinks and outgoing links from Wikipedia articles. Features authentication system, worker queues for processing, and can analyze multiple domains against compressed Wikipedia data (wikizim).",
    tags: [
      "Next.js",
      "TypeScript",
      "Express",
      "PostgreSQL",
      "Redis",
      "BullMQ",
      "JWT",
      "Docker",
      "Shadcn UI",
      "Wiki API",
      "Tailwind",
    ],
    imageUrl: wikiToolImg,
  },
  {
    title: "WordPress Submitter",
    link: "#",
    description:
      "A centralized content management platform that bridges multiple WordPress sites, allowing users to publish posts and pages across different WordPress installations without logging into each site individually using the WordPress API.",
    tags: [
      "Next.js",
      "TypeScript",
      "Auth.js",
      "Drizzle ORM",
      "PostgreSQL",
      "Docker",
      "WordPress API",
      "TailwindCSS",
    ],
    imageUrl: wordpressSubmitterImg,
  },
  {
    title: "Search Console Rank Tracker",
    link: "#",
    description:
      "A comprehensive SEO tool that solves Google Search Console's historical data limitations by providing automated data collection, multi-site management, and advanced reporting for keyword performance tracking.",
    tags: [
      "Next.js",
      "TypeScript",
      "Express",
      "PostgreSQL",
      "Docker",
      "Google API",
      "NextAuth",
      "Tailwind",
      "Shadcn UI",
    ],
    imageUrl: scrtImg,
  },
  {
    title: "Article Generation Tool",
    link: "#",
    description:
      "An automated SEO content generation tool that scrapes web content by topic and keywords, then uses OpenAI to generate optimized articles for WordPress sites.",
    tags: [
      "Next.js",
      "OpenAI",
      "ShadCN",
      "Python",
      "PostgreSQL",
      "Contabo",
      "WordPress",
    ],
    imageUrl: articleToolImg,
  },
  {
    title: "Massage Remedial Care LLC",
    link: "https://massageremedialcarellc.com/",
    description:
      "A public web app that show available services and pricing. Side Project.",
    tags: ["React", "Tailwind", "Redux", "Vercel"],
    imageUrl: mrcImg,
  },
  {
    title: "Naxos Café & Restaurant",
    link: "#",
    description:
      "A modern static website for a café and restaurant located in Mansfield, featuring an elegant dark theme and showcasing authentic flavors and specialty offerings.",
    tags: ["Next.js", "React", "TypeScript", "Tailwind", "Vercel"],
    imageUrl: naxosImg,
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
  {
    text: "Zoho",
    icon: React.createElement(SiZoho),
    iconColor: "#c9302c",
  },
  {
    text: "Braintree",
    icon: React.createElement(HiCreditCard),
    iconColor: "#009CDE",
  },
  {
    text: "Attio CRM",
    icon: React.createElement(FaUserTie),
    iconColor: "#5A67D8",
  },
  {
    text: "Digital Ocean",
    icon: React.createElement(SiDigitalocean),
    iconColor: "#0080ff",
  },
  {
    text: "Contabo",
    icon: React.createElement(FaServer),
    iconColor: "#FF6B35",
  },
  {
    text: "Vercel",
    icon: React.createElement(SiVercel),
    iconColor: "#000000",
  },
  {
    text: "Cloudflare",
    icon: React.createElement(SiCloudflare),
    iconColor: "#f48120",
  },
  {
    text: "WordPress",
    icon: React.createElement(SiWordpress),
    iconColor: "#21759b",
  },
  {
    text: "Redis",
    icon: React.createElement(SiRedis),
    iconColor: "#dc382d",
  },
  {
    text: "Bull Queue",
    icon: React.createElement(HiQueueList),
    iconColor: "#ff4757",
  },
  {
    text: "Python",
    icon: React.createElement(FaPython),
    iconColor: "#3776ab",
  },
  {
    text: "OpenAI",
    icon: React.createElement(SiOpenai),
    iconColor: "#00A67E",
  },
  {
    text: "ShadCN",
    icon: React.createElement(FaReact),
    iconColor: "#61DBFB",
  },
  {
    text: "Next.js",
    icon: React.createElement(SiNextdotjs),
    iconColor: "#000000",
  },
  {
    text: "Auth.js",
    icon: React.createElement(FaLock),
    iconColor: "#7c3aed",
  },
  {
    text: "Drizzle ORM",
    icon: React.createElement(FaDatabase),
    iconColor: "#c084fc",
  },

  {
    text: "Nginx",
    icon: React.createElement(SiNginx),
    iconColor: "#269539",
  },
  {
    text: "Ubuntu",
    icon: React.createElement(FaUbuntu),
    iconColor: "#e95420",
  },
  {
    text: "BullMQ",
    icon: React.createElement(FaTasks),
    iconColor: "#e74c3c",
  },
  {
    text: "JWT",
    icon: React.createElement(SiJsonwebtokens),
    iconColor: "#000000",
  },
  {
    text: "Socket.io",
    icon: React.createElement(SiSocketdotio),
    iconColor: "#010101",
  },
  {
    text: "Cursor IDE",
    icon: React.createElement(FaCode),
    iconColor: "#007ACC",
  },
] as const;
