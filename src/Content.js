// import images
import Hero_person from "./assets/images/Hero/person.png";

import javascript from "./assets/images/Skills/javascript.png";
import nextjs from "./assets/images/Skills/nextjs.png";
import express from "./assets/images/Skills/express.png";
import reactjs from "./assets/images/Skills/react.png";
import nodejs from "./assets/images/Skills/node.png";
import typescript from "./assets/images/Skills/typescript.png";

import services_logo1 from "./assets/images/Services/logo1.png";
import services_logo2 from "./assets/images/Services/logo2.png";
import services_logo3 from "./assets/images/Services/logo3.png";

import project1 from "./assets/images/Projects/img1.png";
import project2 from "./assets/images/Projects/img2.png";
import project3 from "./assets/images/Projects/img3.png";
import person_project from "./assets/images/Hero/person.png";

import avatar1 from "./assets/images/Testimonials/avatar1.png";
import avatar2 from "./assets/images/Testimonials/avatar2.png";
import avatar3 from "./assets/images/Testimonials/avatar3.png";
import avatar4 from "./assets/images/Testimonials/avatar4.png";

import Hireme_person from "./assets/images/Hero/person.png";
import Hireme_person2 from "./assets/images/Hero/person.png";

// import icons from react-icons
import { GrMail } from "react-icons/gr";
import { MdArrowForward, MdCall } from "react-icons/md";
import { BsInstagram } from "react-icons/bs";
import { TbSmartHome } from "react-icons/tb";
import { BiUser } from "react-icons/bi";
import { RiServiceLine, RiProjectorLine } from "react-icons/ri";
import { MdOutlinePermContactCalendar } from "react-icons/md";
import { FaGithub } from "react-icons/fa";

export const content = {
  nav: [
    {
      link: "#home",
      icon: TbSmartHome,
    },
    {
      link: "#skills",
      icon: BiUser,
    },
    {
      link: "#services",
      icon: RiServiceLine,
    },
    {
      link: "#projects",
      icon: RiProjectorLine,
    },
    {
      link: "#contact",
      icon: MdOutlinePermContactCalendar,
    },
  ],
  hero: {
    title: "Web Developer",
    firstName: "M.",
    LastName: "AHMED",
    btnText: "Hire Me",
    image: Hero_person,
    hero_content: [
      {
        count: "1+",
        text: "Years of Experinse in Web development",
      },
      {
        count: "10+",
        text: "Projects Worked in my career",
      },
    ],
  },
  skills: {
  title: "Skills",
  subtitle: "MY TOP SKILLS",
  skills_content: [
    {
      name: "Javascript",
      para: "Build Dynamic Web Apps",
      logo: javascript,
    },
    {
      name: "Node js",
      para: "Create Server Side Apps",
      logo: nodejs,
    },
    {
      name: "Express js",
      para: "Build Fast Web Apps",
      logo: express,
    },
    {
      name: "React js",
      para: "Create User Interfaces",
      logo: reactjs,
    },
    {
      name: "Next js",
      para: "Build Server Side Apps",
      logo: nextjs,
    },
    {
      name: "Typescript",
      para: "Write Type Safe Code",
      logo: typescript,
    },
  ],
  icon: MdArrowForward,
},
  services: {
  title: "Services",
  subtitle: "WHAT I OFFER",
  service_content: [
    {
      title: "Web Development",
      para: "I offer web development services to help businesses establish a strong online presence.",
      logo: services_logo1,
    },
    {
      title: "ui / ux DESIGNING",
      para: "My ui/ux designing services focus on creating user-centered and visually appealing interfaces.",
      logo: services_logo2,
    },
    {
      title: "Wordpress Development",
      para: "I provide wordpress development services to help businesses build custom and scalable websites.",
      logo: services_logo3,
    },
  ],
},
  Projects: {
    title: "Projects",
    subtitle: "MY CREATION",
    image: person_project,
    project_content: [
      {
        title: "Ecklee Market",
        image: project1,
      },
      {
        title: "Ahmed Homeo Clinic",
        image: project2,
      },
      {
        title: "Urban Emporium",
        image: project3,
      },
    ],
  },
  Testimonials: {
    title: "Testimonials",
    subtitle: "MY CLIENT REVIEWS",
    testimonials_content: [
      {
        review:
          "“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”",
        img: avatar1,
        name: "JOHN DOE",
      },
      {
        review:
          "“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”",
        img: avatar2,
        name: "Tom Alex",
      },
      {
        review:
          "“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”",
        img: avatar3,
        name: "Johnny",
      },
      {
        review:
          "“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”",
        img: avatar4,
        name: "ROBBIN",
      },
    ],
  },
  Hireme: {
    title: "Hire Me",
    subtitle: "FOR YOUR PROJECTS",
    image1: Hireme_person,
    image2: Hireme_person2,
    para: "Highly skilled in developing scalable and efficient web applications using JavaScript, React, Node.js, Express, and Next.js. Proficient in creating user-centered and visually appealing interfaces with a strong understanding of UI/UX principles.",
    btnText: "Hire Me",
  },
  Contact: {
    title: "Contect Me",
    subtitle: "GET IN TOUCH",
    social_media: [
      {
        text: "ahmedsohail7751@gmail.com",
        icon: GrMail,
        link: "mailto:ahmedsohail7751@gmail.com",
      },
      {
        text: "+92 313 7751 829",
        icon: MdCall,
        link: "https://wa.me/923137751829",
      },
      {
        text: "instagram/mr._.hunny",
        icon: BsInstagram,
        link: "https://www.instagram.com/mr._.hunny/",
      },
      {
        text: "github/Dr-MAhmed",
        icon: FaGithub,
        link: "https://www.github.com/Dr-MAhmed",
      },
    ],
  },
  Footer: {
    text: "Copyright © 2024. All Rights Reserved.",
  },

};

export const languages = [
  {
    name: "Javascript",
    description: "JavaScript is a versatile programming language primarily used for web development.",
    content: [
      "JavaScript allows you to create interactive web pages.",
      "It is an essential part of web applications.",
      "JavaScript can be used on both the client-side and server-side.",
      "It supports event-driven, functional, and imperative programming styles.",
      "JavaScript has a rich ecosystem of libraries and frameworks."
    ]
  },
  {
    name: "Typescript",
    description: "TypeScript is a superset of JavaScript that adds static typing.",
    content: [
      "TypeScript helps catch errors at compile time.",
      "It improves code readability and maintainability.",
      "TypeScript is widely used in large-scale applications.",
      "It supports modern JavaScript features.",
      "TypeScript can be transpiled to JavaScript for compatibility."
    ]
  },
  {
    name: "React js",
    description: "ReactJS is a JavaScript library for building user interfaces.",
    content: [
      "React allows for the creation of reusable UI components.",
      "It uses a virtual DOM for efficient rendering.",
      "React can be used for single-page applications.",
      "It is maintained by Facebook and a community of developers.",
      "React has a rich ecosystem of tools and libraries."
    ]
  },
  {
    name: "Node js",
    description: "Node.js is a JavaScript runtime built on Chrome's V8 engine.",
    content: [
      "Node.js allows for server-side JavaScript execution.",
      "It is designed for building scalable network applications.",
      "Node.js uses an event-driven, non-blocking I/O model.",
      "It has a vast package ecosystem via npm.",
      "Node.js is suitable for real-time applications."
    ]
  },
  {
    name: "Express js",
    description: "Express.js is a web application framework for Node.js.",
    content: [
      "Express simplifies the process of building web applications.",
      "It provides robust routing and middleware support.",
      "Express is minimal and flexible.",
      "It is widely used for RESTful APIs.",
      "Express can be easily integrated with various templating engines."
    ]
  },
  {
    name: "Next js",
    description: "Next.js is a React framework for server-rendered applications.",
    content: [
      "Next.js supports server-side rendering and static site generation.",
      "It provides automatic code splitting for faster page loads.",
      "Next.js has built-in routing based on the file system.",
      "It supports API routes for backend functionality.",
      "Next.js is optimized for performance and SEO."
    ]
  }
];
