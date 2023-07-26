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
  flutter,
  threejs,
  instaProject,
  taskify,
  yt,
  pickmecolor,
  notes,
  ambulance,
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
    title: "Flutter Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Frontend Developer",
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
    name: "Flutter",
    icon: flutter,
  },
];

const projects = [
  {
    name: "Make Notes",
    description:
      "A web application to implement authentication using nodejs and jwt token",
    tags: [
      {
        name: "Flutter",
        color: "blue-text-gradient",
      },
      {
        name: "nodeJS",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "pink-text-gradient",
      },
    ],
    image: notes,
    source_code_link: "https://github.com/Rahul0714/notes-app-ui",
  },
  {
    name: "Minstagram",
    description: "A Mobile application that is replica of instagram",
    tags: [
      {
        name: "Futter",
        color: "blue-text-gradient",
      },
      {
        name: "Firebase",
        color: "green-text-gradient",
      },
      {
        name: "Dart",
        color: "pink-text-gradient",
      },
    ],
    image: instaProject,
    source_code_link: "https://github.com/Rahul0714/Minstagram",
  },
  {
    name: "Ambulance Tracker",
    description:
      "A mobile application ambulance Tracker during COVID-19 to find nearest ambulance and hospital with empty bed for the patient",
    tags: [
      {
        name: "Flutter",
        color: "blue-text-gradient",
      },
      {
        name: "Mongodb",
        color: "green-text-gradient",
      },
      {
        name: "Google map api",
        color: "pink-text-gradient",
      },
    ],
    image: ambulance,
    source_code_link:
      "https://github.com/Rahul0714/Ambulance-Tracker-Using-Haversine-Formula",
  },
  {
    name: "Taskify",
    description:
      "A Todo List to keep track of tasks with drag and drop functionality to move task between active and completed task",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "typescript",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: taskify,
    source_code_link: "https://github.com/Rahul0714/todo_list",
  },
  {
    name: "MyTube",
    description: "A web application for the replica of youtube",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "materialUI",
        color: "pink-text-gradient",
      },
    ],
    image: yt,
    source_code_link: "https://github.com/Rahul0714/mytube",
  },
  {
    name: "Pick Me Color",
    description:
      "A web application to pick the color directly by clicking on it",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },

      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: pickmecolor,
    source_code_link: "https://github.com/Rahul0714/pickmecolor",
  },
];

export { services, technologies, projects };
