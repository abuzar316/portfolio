import {
  darkModeTypes,
  projectCardProps,
  skillCardPropsIF,
} from "../interface/interface";

import HTMLIcon from "../../public/images/html-icon.png";
import GITIcon from "../../public/images/Git-Icon.png";
import GitHubIcon from "../../public/images/github-icon.png";
import JSIcon from "../../public/images/js-icon.png";
import TSIcon from "../../public/images/ts-icon.png";
import ReactIcon from "../../public/images/react-icon.png";
import CSSIcon from "../../public/images/css-icon.png";
import ReduxIcon from "../../public/images/redux-icon.png";
import BootstapIcon from "../../public/images/bootstrap-icon.png";
import ExpressIcon from "../../public/images/express-icon.png";
import NodeIcon from "../../public/images/node-icon.png";
import MaterialIcon from "../../public/images/material-ui.png";
import MongoDBIcon from "../../public/images/mongodb-icon.png";
import MySQLIcon from "../../public/images/mysql-icon.png";
import SASSIcon from "../../public/images/sass-icon.webp";
import TailwindIcon from "../../public/images/tailwind-icon.png";

import VSCode from "../../public/vscode.png";

const skillsContants = {
  all: "All",
  Frontend: "Frontend",
  Backend: "Backend",
  Library: "Library",
  Framework: "Framework",
  Database: "Database",
  Tools: "Tools",
  programming: "Programming Languages",
};

export const skillsCategory = Object.values(skillsContants);

export const skillsData: skillCardPropsIF[] = [
  { name: "HTML", icon: HTMLIcon, category: [skillsContants.Frontend] },
  { name: "CSS", icon: CSSIcon, category: [skillsContants.Frontend] },
  { name: "SASS", icon: SASSIcon, category: [skillsContants.Frontend] },
  {
    name: "JavaScrpt",
    icon: JSIcon,
    category: [
      skillsContants.Frontend,
      skillsContants.Backend,
      skillsContants.programming,
    ],
  },
  {
    name: "TypeScript",
    icon: TSIcon,
    category: [
      skillsContants.Frontend,
      skillsContants.programming,
      skillsContants.Backend,
    ],
  },
  {
    name: "React",
    icon: ReactIcon,
    category: [skillsContants.Library],
  },
  {
    name: "Zustand",
    icon: HTMLIcon,
    category: [skillsContants.Library],
  },
  { name: "Redux", icon: ReduxIcon, category: [skillsContants.Library] },
  {
    name: "Material UI",
    icon: MaterialIcon,
    category: [skillsContants.Library],
  },
  {
    name: "Bootstrap",
    icon: BootstapIcon,
    category: [skillsContants.Framework],
  },
  {
    name: "Tailwind CSS",
    icon: TailwindIcon,
    category: [skillsContants.Framework],
  },
  { name: "Node", icon: NodeIcon, category: [skillsContants.Frontend] },
  { name: "Express", icon: ExpressIcon, category: [skillsContants.Frontend] },
  { name: "MongoDB", icon: MongoDBIcon, category: [skillsContants.Frontend] },
  { name: "MySQL", icon: MySQLIcon, category: [skillsContants.Frontend] },
  { name: "GIT", icon: GITIcon, category: [skillsContants.Frontend] },
  { name: "GITHUB", icon: GitHubIcon },
];

export const projectsList: projectCardProps[] = [
  {
    name: "VS Code Clone",
    description: "Build VS Code Clone in React JS",
    img: VSCode,
    techStack: ["JS", "React JS", "Zustand"],
  },
  {
    name: "VS Code Clone",
    description: "Build VS Code Clone in React JS",
    img: VSCode,
    techStack: ["JS", "React JS", "Zustand"],
  },
];

export const themeMode: darkModeTypes = {
  system: "system",
  dark: "dark",
  light: "light",
};

export const navigationData = [
  {
    title: "Home",
    to: "/",
  },
  {
    title: "Skills",
    to: "/skills",
  },
  {
    title: "Projects",
    to: "/projects",
  },
];
