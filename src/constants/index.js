import {
  uomlogo,
  zcklogo,
  chromecast,
  disc02,
  discordBlack,
  linkedin,
  github,
  file02,
  homeSmile,
  plusSquare,
  recording01,
  recording03,
  transitgopic,
  project2,
  project3,
  project4,
  searchMd,
  sliders04,
  yourlogo,
  react,
  java,
  javascript,
  mongodb,
  spring,
  typescript,
  mysql,
} from "../assets";
import schoolimage from "../assets/education/school.jpg";
import universityimage from "../assets/education/university.jpg";
export const navigation = [
  {
    id: "0",
    title: "Projects",
    url: "#projects",
  },
  {
    id: "1",
    title: "Expertise",
    url: "#expertise",
  },
  {
    id: "2",
    title: "Education",
    url: "#education",
  },
  {
    id: "3",
    title: "About",
    url: "#about",
  },
];

export const heroIcons = [homeSmile, file02, searchMd, plusSquare];

export const companyLogos = [yourlogo, yourlogo, yourlogo, yourlogo, yourlogo];

export const brainwaveServices = [
  "Photo generating",
  "Photo enhance",
  "Seamless Integration",
];

export const brainwaveServicesIcons = [
  recording03,
  recording01,
  disc02,
  chromecast,
  sliders04,
];

export const projects = [
  {
    id: "1",
    title: "Play Era",
    text:
      " Play Era is a cutting-edge web app designed to revolutionize how sports enthusiasts book venues in Sri Lanka. Whether it's futsal courts, badminton courts, cricket grounds, or swimming pools, Play Era offers a seamless and user-friendly experience.",
    date: "Sept 2024",
    status: "progress",
    imageUrl: project2,
    link:
      "https://www.linkedin.com/feed/update/urn:li:activity:7233994145491509248/",
    technologies: [
      { name: "React", logo: "./src/assets/tech/react.svg" },
      { name: "Spring", logo: "./src/assets/tech/spring.svg" },
      { name: "MongoDb", logo: "./src/assets/tech/mongodb.svg" },
      { name: "Tailwindcss", logo: "./src/assets/tech/tailwind.svg" },
    ],
  },
  {
    id: "0",
    title: "TransitGO",
    text:
      "A Mobile and Web Application designed to transform public bus transportation. This project tackles challenges in bus transportation, including providing real-time updates on bus schedules, managing delays, and improving communication between passengers and operators.",
    date: "May 2024",
    status: "done",
    imageUrl: transitgopic,
    colorful: true,
    link:
      "https://www.linkedin.com/feed/update/urn:li:activity:7233994145491509248/",
    technologies: [
      { name: "React", logo: "./src/assets/tech/react.svg" },
      { name: "Spring", logo: "./src/assets/tech/spring.svg" },
      { name: "MongoDb", logo: "./src/assets/tech/mongodb.svg" },
      { name: "Tailwindcss", logo: "./src/assets/tech/tailwind.svg" },
    ],
  },

  {
    id: "2",
    title: "Personal Portfolio",
    text: "Designed a personal portfolio to showcase my skill and projects.",
    date: "Sept 2024",
    status: "done",
    imageUrl: project3,
    link:
      "https://www.linkedin.com/feed/update/urn:li:activity:7233994145491509248/",
    technologies: [
      { name: "React", logo: "./src/assets/tech/react.svg" },
      { name: "Spring", logo: "./src/assets/tech/spring.svg" },
      { name: "MongoDb", logo: "./src/assets/tech/mongodb.svg" },
      { name: "Tailwindcss", logo: "./src/assets/tech/tailwind.svg" },
    ],
  },
  {
    id: "3",
    title: "Rooftop Garden",
    text:
      "Our goal was to design an efficient and sustainable automated rooftop greenhouse",
    date: "Aug 2022",
    status: "done",
    imageUrl: project4,
    link:
      "https://www.linkedin.com/feed/update/urn:li:activity:7233994145491509248/",
    technologies: [
      { name: "C++", logo: "./src/assets/tech/cpp.svg" },
      { name: "Arduino", logo: "./src/assets/tech/arduino.svg" },
    ],
  },
];

export const expertiseContents = [
  {
    id: "0",
    title: "ReactJS",
  },
  {
    id: "1",
    title: "SpringBoot",
  },
  {
    id: "2",
    title: "Java",
  },
  {
    id: "3",
    title: "React Native",
  },
  {
    id: "4",
    title: "MySQL",
  },
  {
    id: "5",
    title: "JavaScript",
  },
  {
    id: "5",
    title: "TypeScript",
  },
  {
    id: "6",
    title: "MongoDB",
  },
];

export const expertiseApps = [
  {
    id: "0",
    title: "ReactJs",
    icon: react,
    width: 26,
    height: 36,
  },
  {
    id: "1",
    title: "Spring",
    icon: spring,
    width: 34,
    height: 36,
  },
  {
    id: "2",
    title: "MySQL",
    icon: mysql,
    width: 36,
    height: 28,
  },
  {
    id: "3",
    title: "Java",
    icon: java,
    width: 34,
    height: 35,
  },
  {
    id: "4",
    title: "TypeScript",
    icon: typescript,
    width: 34,
    height: 34,
  },
  {
    id: "7",
    title: "ReactNative",
    icon: react,
    width: 34,
    height: 35,
  },
  {
    id: "5",
    title: "JavaScript",
    icon: javascript,
    width: 34,
    height: 34,
  },
  {
    id: "6",
    title: "MongoDB",
    icon: mongodb,
    width: 26,
    height: 34,
  },
];

export const education = [
  {
    id: "0",
    title: "Zahira National College Kalmunai",
    text:
      "I successfully completed both my G.C.E. Ordinary Level and G.C.E. Advanced Level examinations at a prestigious and renowned institution, recognized for its excellence. ",
    backgroundUrl: "./src/assets/education/card-1.svg",
    iconUrl: zcklogo,
    imageUrl: schoolimage,
    text0: "G.C.E Ordinary Level",
    text1: "G.C.E Advanced Level - Physical Science Stream",
    logo1: zcklogo,
  },
  {
    id: "1",
    title: "University Of Moratuwa",
    text:
      "I am currently pursuing a Bachelor's degree in Information Technology and Management at the University of Moratuwa, where I am gaining deep expertise in Software Engineering.",
    backgroundUrl: "./src/assets/benefits/card-2.svg",
    text1: "BSc. (Hons) in Information Techonology and Management",
    logo1: uomlogo,
    iconUrl: uomlogo,
    imageUrl: universityimage,
    light: true,
  },
];

export const socials = [
  {
    id: "0",
    title: "Linkedin",
    iconUrl: linkedin,
    url: "https://www.linkedin.com/in/rafaathzanar/",
  },
  {
    id: "1",
    title: "Github",
    iconUrl: github,
    url: "https://github.com/rafaathzanar",
  },

  {
    id: "2",
    title: "Discord",
    iconUrl: discordBlack,
    url: "https://discord.com/users/932567025816068126",
  },
];
