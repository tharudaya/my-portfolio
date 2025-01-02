import {
  FaGithub,
  FaLinkedin,
  FaMedium
} from "react-icons/fa6";

import projectImage1 from "../assets/project1.png";
import projectImage2 from "../assets/project2.png";
import projectImage3 from "../assets/project3.png";
import projectImage4 from "../assets/project4.png";
import projectImage5 from "../assets/project5.png";
import projectImage6 from "../assets/project6.png";
import projectImage7 from "../assets/project7.png";
import projectImage8 from "../assets/project8.png";
import projectImage9 from "../assets/project9.png";

import { RiReactjsLine } from "react-icons/ri";
import { BiLogoTypescript } from "react-icons/bi";
import { RiJavascriptFill } from "react-icons/ri";
import { BiLogoJquery } from "react-icons/bi";
import { TbBrandRedux } from "react-icons/tb";
import { BiLogoHtml5 } from "react-icons/bi";
import { BiLogoCss3 } from "react-icons/bi";
import { LiaSass } from "react-icons/lia";
import { SiTailwindcss } from "react-icons/si";
import { SiJest } from "react-icons/si";
import { SiWebpack } from "react-icons/si";
import { BsGithub } from "react-icons/bs";
import { TbBrandNextjs } from "react-icons/tb";
import { FaNodeJs } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export const NAVIGATION_LINKS = [
  { label: "Skills", href: "#skills" },
  { label: "Work Experience", href: "#work" },
  { label: "Education", href: "#education" },
  { label: "Projects", href: "#projects" },
  { label: "About", href: "#bio" },
  { label: "Blog", href: "#blog" }
];

export const HERO = {
  name: "Tharaka Udayanga",
  greet: "Hello there! 👋🏻",
  description:
    "I am a passionate frontend developer with a talent for crafting visually appealing and highly functional user interfaces. With over five years of experience, I specialize in turning ideas into seamless and engaging web experiences.",
};

export const PROJECTS = [
  {
    id: 1,
    name: "ICapture",
    image: projectImage1,
    githubLink: "https://www.icapture.com/",
  },
  {
    id: 2,
    name: "Empower Pharmacy",
    image: projectImage2,
    githubLink: "https://www.empowerpharmacy.com/",
  },
  {
    id: 3,
    name: "Flow Patterns",
    image: projectImage3,
    githubLink: "https://flowpatterns.com/",
  },
  {
    id: 4,
    name: "Endo Super Systems",
    image: projectImage4,
    githubLink: "https://endosupersystems.com/",
  },
  {
    id: 5,
    name: "Churchill Downs",
    image: projectImage5,
    githubLink: "https://www.churchilldownsincorporated.com/",
  },
  {
    id: 6,
    name: "Xaap Buildings",
    image: projectImage6,
    githubLink: "https://www.xaapbuildings.com/",
  },
  {
    id: 7,
    name: "Global Media Outreach",
    image: projectImage7,
    githubLink: "https://globalmediaoutreach.com/",
  },
  {
    id: 8,
    name: "Prima Central",
    image: projectImage8,
    githubLink: "https://primacentral.org/",
  },
  {
    id: 9,
    name: "Eight25 Media",
    image: projectImage9,
    githubLink: "https://www.eight25media.com/",
  },
];

export const BIO = [
  "With a Bachelor of Science degree in Computer Science and Technology from Uva Wellassa University, Sri Lanka, I have spent the past five years mastering the art of frontend development. Working with leading SaaS companies like Wiley and Oneflow, I’ve contributed to the creation of seamless, user-focused web applications that deliver innovative digital experiences. My journey has been fueled by a passion for crafting impactful solutions and pushing the boundaries of what’s possible in web development.",
  "Currently, I serve as a Lead Frontend Engineer at Oneflow, Sweden, where I lead the integrations frontend team. In this role, I manage and maintain over seven integration systems built with React and TypeScript. My work involves driving agile projects, ensuring scalability, and delivering solutions that cater to a global user base. Beyond technical expertise, I value collaboration and innovation, fostering a team environment that prioritizes high-quality results.",
  "Beyond my professional career, I actively volunteer as a frontend developer at Empowered Futures, Canada, contributing to meaningful projects while gaining insights into the Canadian work environment. My technical expertise spans modern technologies such as React, Redux, Next.js, TypeScript, Tailwind CSS, and Docker. Driven by a commitment to delivering exceptional user experiences, I transform complex ideas into visually stunning and functional web applications, always with a user-first approach.",
];

export const SKILLS1 = [
  {
    icon: <RiJavascriptFill className="text-4xl text-yellow-400 lg:text-5xl" />,
    name: "JavaScript",
    experience: "5+ years",
  },
  {
    icon: <BiLogoHtml5 className="text-4xl text-orange-400 lg:text-5xl" />,
    name: "HTML",
    experience: "5+ years",
  },
  {
    icon: <BiLogoCss3 className="text-4xl text-cyan-400 lg:text-5xl" />,
    name: "CSS",
    experience: "5+ years",
  },
  {
    icon: <LiaSass className="text-4xl text-pink-400 lg:text-5xl" />,
    name: "SCSS",
    experience: "5+ years",
  },
  {
    icon: <BiLogoJquery className="text-4xl text-cyan-400 lg:text-5xl" />,
    name: "jQuery",
    experience: "3+ years",
  },
  {
    icon: <SiWebpack className="text-4xl text-blue-400 lg:text-5xl" />,
    name: "Webpack",
    experience: "5+ years",
  },
  {
    icon: <FaNodeJs className="text-4xl text-green-600 lg:text-5xl" />,
    name: "Node.js",
    experience: "5+ years",
  }
];

export const SKILLS2 = [
  {
    icon: <RiReactjsLine className="text-4xl text-cyan-400 lg:text-5xl" />,
    name: "React",
    experience: "5+ years",
  },
  {
    icon: <BiLogoTypescript className="text-4xl text-cyan-400 lg:text-5xl" />,
    name: "TypeScript",
    experience: "2+ years",
  },
  {
    icon: <TbBrandRedux className="text-4xl text-purple-400 lg:text-5xl" />,
    name: "Redux",
    experience: "2+ years",
  },
  {
    icon: <TbBrandNextjs className="text-4xl text-white lg:text-5xl" />,
    name: "Next.js",
    experience: "2+ years",
  },
  {
    icon: <SiTailwindcss className="text-4xl text-cyan-400 lg:text-5xl" />,
    name: "Tailwind CSS",
    experience: "2+ years",
  },
  {
    icon: <SiJest className="text-4xl text-red-400 lg:text-5xl" />,
    name: "Jest",
    experience: "3+ years",
  },
  {
    icon: <BsGithub className="text-4xl text-white lg:text-5xl" />,
    name: "Github",
    experience: "5+ years",
  }
];

export const EXPERIENCES = [
  {
    title: "Lead Frontend Developer",
    company: "Oneflow, Sweden",
    duration: "December 2022 - Present",
    description:
      "As the Lead Frontend Engineer at Oneflow, I head the integrations frontend team, overseeing key decisions that shape the architecture and functionality of the systems. My role involves developing and maintaining over seven integration systems using cutting-edge technologies like React, TypeScript, and JavaScript. Working in an agile environment, I collaborate closely with design, product, quality assurance, and backend teams to ensure project success. My leadership focuses on fostering a collaborative team culture and delivering scalable, user-centric solutions that drive the company’s integrations forward.",
  },
  {
    title: "Volunteer Frontend Developer",
    company: "Empowered Futures, Canada",
    duration: "August 2024 - Present",
    description:
      "As a Volunteer Frontend Developer at Empowered Futures, I contribute to developing and maintaining web applications that drive meaningful impact. Using modern technologies such as React, TypeScript, Next.js, and Tailwind CSS, I focus on delivering high-performance, user-friendly interfaces that meet the organization’s objectives. My role involves resolving technical issues, optimizing application performance, and collaborating with the team to ensure seamless functionality. This experience has also provided me with valuable insights into the Canadian work environment, enhancing my ability to adapt to diverse project requirements and cultural dynamics.",
  },
  {
    title: "Frontend Engineer",
    company: "Wiley, Sri Lanka",
    duration: "January 2021 - December 2022",
    description:
      "At Wiley, I was instrumental in transforming more than 25 UI/UX wireframes into high-quality, reusable code, enhancing the company’s digital platforms. I played a pivotal role in developing and maintaining the frontend of large-scale Salesforce projects, ensuring seamless functionality and an exceptional user experience. Additionally, I evaluated over 50 designs to assess their feasibility, user-friendliness, and scalability, implementing optimal solutions to align with business goals. My contributions consistently focused on elevating the user interface to meet industry standards and exceed client expectations.",
  },
  {
    title: "Associate Software Engineer",
    company: "Eight25Media, Sri Lanka",
    duration: "September 2019 - January 2021",
    description:
      "During my tenure at Eight25Media, I contributed to the creation of over 100 design implementations, transforming concepts into functional, responsive interfaces using HTML, CSS, and JavaScript. I was actively involved in the development of more than 12 responsive web applications, utilizing React and WordPress to deliver high-quality digital solutions. My work focused on ensuring cross-device compatibility, optimizing user interactions, and creating visually engaging web applications tailored to client needs.",
  },
];

export const EDUCATION = [
  {
    degree: "Bachelor of Science in Computer Science and Technology",
    institution: "Uva Wellassa University, Sri Lanka",
    duration: "February 2016 - February 2020",
    description:
      "I earned my Bachelor of Science in Computer Science and Technology from Uva Wellassa University, where I built a strong foundation in software development, algorithms, and computer systems. My academic journey included hands-on projects and collaborative coursework, which honed my problem-solving abilities and technical expertise. During my studies, I developed a keen interest in frontend development and user experience design, laying the groundwork for my professional career. This degree not only equipped me with technical skills but also fostered critical thinking and teamwork, essential qualities for thriving in dynamic work environments.",
  },
];

export const BLOGS = [
  {
    image: 'https://miro.medium.com/v2/resize:fit:720/format:webp/1*SvTxMIEudVv8YRW_ELRamw.png',
    title: 'Event loop in JavaScript',
    description: 'The event loop is a crucial mechanism in JavaScript that allows it to perform non-blocking operations despite being single-threaded. It manages how JavaScript handles tasks, ensuring smooth execution without freezing the application.',
    link: 'https://medium.com/@tharudaya94/event-loop-in-javascript-586efc9c6034'
  },
  {
    image: 'https://miro.medium.com/v2/resize:fit:720/format:webp/0*Rqh90irjLQ5IjOxV',
    title: 'Seal and Freeze methods in JavaScript',
    description: 'In JavaScript objects, the const keyword is used to make an object a constant. A constant means the values inside the object should not be able to update, add or delete.',
    link: 'https://medium.com/@tharudaya94/difference-between-seal-and-freeze-methods-in-javascript-objects-8342c6c58dff'
  },
  {
    image: 'https://miro.medium.com/v2/resize:fit:720/format:webp/0*cbcW8qgeOwLb2AsA',
    title: 'Difference between Shallow Copy and Deep Copy',
    description: 'Lets understand the shallow copy and deep copy methods with JavaScript objects. There are multiple ways to copy objects in JavaScript.',
    link: 'https://medium.com/@tharudaya94/difference-between-shallow-copy-and-deep-copy-in-javascript-c69369de8d14'
  },
  {
    image: 'https://miro.medium.com/v2/resize:fit:720/format:webp/0*I24g_TJMpW-QmFgg',
    title: 'forEach, Map, Filter and Reduce methods in JavaScript',
    description: 'The forEach method calls a function for each element in an array. This is useful method to loop through every elements in an array and implement some logic with every array element.',
    link: 'https://medium.com/@tharudaya94/difference-between-foreach-map-filter-and-reduce-methods-in-javascript-ac7115740d8d'
  },
  {
    image: 'https://miro.medium.com/v2/resize:fit:720/format:webp/0*fckrp8-gYbMZcGBH',
    title: 'Prototypal Inheritance in JavaScript',
    description: 'When it comes to inheritance, JavaScript only has one construct: objects. Each object has a private property which holds a link to another object called its prototype.',
    link: 'https://medium.com/@tharudaya94/prototypal-inheritance-in-javascript-d7941d962d28'
  },
  {
    image: 'https://miro.medium.com/v2/resize:fit:720/format:webp/0*V_X4ybUSBmyQUiWb',
    title: 'Lexical Scope and Closures in JavaScript',
    description: 'Lexical scoping defines the scope of a variable by the position of that variable declared in the source code.',
    link: 'https://medium.com/@tharudaya94/lexical-scope-and-closures-in-javascript-e8c32be25159'
  }
]

export const SOCIAL_MEDIA_LINKS = [
  {
    href: "mailto:tharudaya94@gmail.com",
    icon: <MdEmail fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://www.linkedin.com/in/tharakaudayanga/",
    icon: <FaLinkedin fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://medium.com/@tharudaya94",
    icon: <FaMedium fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://github.com/tharudaya",
    icon: <FaGithub fontSize={25} className="hover:opacity-80" />,
  }
];
