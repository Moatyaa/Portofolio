import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import  rmtdevImg from "@/public/rmtdev.png";
import  wordanalyticsImg from "@/public/wordanalytics.png";
import  cer1 from "@/public/cer1.png"
import  cer2 from "@/public/cer2.png"
import  cer3 from "@/public/cer3.png"
import  html from "@/public/html.png"
import  react  from "@/public/react.png";
import  css  from "@/public/css.png";
import  bootstrap  from "@/public/bootstrap-original.svg";
import  javaScript from "@/public/js.png"
import  TypeScript from "@/public/Typescript_logo_2020.svg"
import  redux from "@/public/redux.png"
import  next from "@/public/next.svg"
import  sass from "@/public/sass.svg"
import  tailwind from "@/public/tailwindcss-original.svg"
import  mui from "@/public/mui.png"
import  framerMotion from "@/public/framer-motion.png"
import  git from "@/public/git.png"
import  antiDesign from "@/public/antdesign.png"
import  vite from "@/public/vite.png"

export const links = [
    {
        name: "Home",
        hash: "#hero",
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
        name: "Experience",
        hash: "#experience",
    },
    {
        name: "Skills",
        hash: "#skills",
    },
    {
        name: "Courses",
        hash: "#courses",
    },
    {
        name: "Contact",
        hash: "#contact",
    },
] as const;

export const coursesData = [
    {
        title: "The web development challenger track with Egypt fwd.",
        location: "UDACITY",
        description: {
            title: "Core Web Development Skills:",
            courseDes: [
                "Fundamentals of HTML, CSS, and JavaScript.",
                "Introduction to responsive web design principles.",
                "Hands-on projects to reinforce learning of essential front-end technologies.",
                "Culminates in a comprehensive final exam.",
            ]
        },
        date: "December 2021",
        certificateUrl:cer1
    },
    {
        title: "Professional Front-End Nanodegree Program.",
        location: "UDACITY",
        description: {
            title: "Improve Web Development Skills:",
            courseDes: [
                    "focus on responsive design, accessibility, and performance\n" +
                        "optimization techniques."
            ]
        },
        date: "December 2021",
        certificateUrl:cer2
    },{
        title: "A Front-End Development Diploma.",
        location: "Route IT Training Center, EG",
        description: {
            title: "Front End Development Diploma",
            courseDes: [
                "More Advanced HTML, CSS including bootstrap.",
                "Tailwindcss and Sass.",
                "JavaScript and jQuery.",
                "Webpack and vite.",
                "React (including context, redux) and Next.js.",
            ]
        },
        date: "October 2023",
        certificateUrl:cer3
    }


] as const;

export const experiencesData = [
    {
        title: "Full-Stack Developer",
        location: "Houston, TX",
        description:
            "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
        icon: React.createElement(FaReact),
        date: "2021 - present",
    },
    {
        title: "Front-End Developer",
        location: "Orlando, FL",
        description:
            "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
        icon: React.createElement(CgWorkAlt),
        date: "2019 - 2021",
    },
    {
        title: "Graduated bootcamp",
        location: "Miami, FL",
        description:
            "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
        icon: React.createElement(LuGraduationCap),
        date: "2019",
    }
] as const;

export const projectsData = [
    {
        title: "Hotels Reservation Management System",
        description:
            "Improved booking and room management, allowing staff to easily handle reservations and customer\n" +
            "requests. Created detailed customer profiles for personalized service and targeted promotions. Developed a\n" +
            "user-friendly Admin Dashboard to help manage operations effectively..",
        tags: ["React", "Next.js" , "TypeScript","Context" ,"tailwind", "ant Design"],
        imageUrl: '',
    },
    {
        title: "Digital Archiving System",
        description:
            "Built an easy-to-use local storage solution that makes file management simple. Features like drag-and-drop\n" +
            "and quick search make it user-friendly while ensuring secure and efficient document handling for the\n" +
            "organization..",
        tags: ["React" , "Context" ,"Bootstrap", "ant Design"],
        imageUrl: rmtdevImg
    },
    {
        title: "Inventory",
        description:
            "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
        tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
        imageUrl: wordanalyticsImg,
    },
] as const;

export const skillsData = [
    {
        skill: "HTML",
        imageUrl: html ,
    },
    {
        skill: "CSS",
        imageUrl: css ,
    },
    {
        skill: "Bootstrap",
        imageUrl: bootstrap ,
    },
    {
        skill: "JavaScript",
        imageUrl: javaScript ,
    },
    {
        skill: "TypeScript",
        imageUrl: TypeScript ,
    },
    {
        skill: "React",
        imageUrl: react ,
    },
    {
        skill: "Redux",
        imageUrl: redux ,
    },
    {
        skill: "Next.js",
        imageUrl: next ,
    },
    {
        skill: "Sass",
        imageUrl: sass ,
    },
    {
        skill: "Tailwind",
        imageUrl: tailwind ,
    },
    {
        skill: "Material UI ",
        imageUrl: mui ,
    },
    {
        skill: "Ant Design",
        imageUrl: antiDesign ,
    },
    {
        skill: "Git",
        imageUrl: git ,
    },
    {
        skill: "Framer Motion",
        imageUrl: framerMotion ,
    },
    {
        skill: "Vite",
        imageUrl: vite ,
    },
] as const;