import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  amazon,
  pembo,
  taskit,
  uberClone,
  threejs,
  messenger,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "FC Associate",
    company_name: "Amazon",
    icon: amazon,
    iconBg: "#383E56",
    date: "05/2022 - Current",
    points: [
      "Improve work efficiency by studying the roads, ranking them, and regrouping related tasks, resulting in an increase of 60% speed and 35% quality.",
      "Utilized time management skills to exceed daily targets and deadlines, resulting in an increase in productivity by 15%.",
      "Collaborate with a team of 10 warehouse associates to achieve daily targets, demonstrating strong teamwork and communication skills.",
    ],
  },
  {
    title: "Website Administrator",
    company_name: "Pembo",
    icon: pembo, // You will need to import or specify the appropriate icon
    iconBg: "#E6DEDD",
    date: "12/2021 - 03/2022",
    points: [
      "Managed, developed, and maintained an eCommerce website using React, resulting in improved user experience and increased sales.",
      "Collaborated with a cross-functional team to implement features, troubleshoot issues, and ensure a seamless online shopping experience for users.",
      "Developed and deployed software solutions in an Agile environment, improving operational efficiency by 20%.",
    ],
  },
  {
    title: "FB Associate",
    company_name: "Amazon",
    icon: amazon, // You will need to import the appropriate icon
    iconBg: "#383E56",
    date: "03/2020 - 12/2021",
    points: [
      "Accomplished a minimum of 85% success delivery daily by registering all the entering packages in time and accounting for missing ones.",
      "Leveraged advanced problem-solving skills to resolve 40% of team issues, significantly enhancing team efficiency.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Task It",
    description:
      "A task management application that allows users to create, update, and delete tasks, and view their progress in a Kanban board.",
    tags: [
      {
        name: "angular",
        color: "blue-text-gradient",
      },
      {
        name: "angular-material",
        color: "green-text-gradient",
      },
      {
        name: "bootstrap",
        color: "pink-text-gradient",
      },
    ],
    image: taskit,
    source_code_link: "https://github.com/EMERIC237/taskIt",
  },
  {
    name: "Uber App Clone",
    description:
      "A clone of the Uber app that allows users to book rides, track their location, and view their ride history.",
    tags: [
      {
        name: "Nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
    ],
    image: uberClone,
    source_code_link: "https://github.com/EMERIC237/Uber_app",
  },
  {
    name: "messenger app",
    description:
      "A messenger app that allows users to send messages, images, and videos to their friends. It also allows users to create groups and send messages to the group.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: messenger,
    source_code_link: "https://github.com/EMERIC237/messenger-3042",
  },
];

export { services, technologies, experiences, testimonials, projects };
