import { projectCardProps, skillCardPropsIF } from "../interface/interface";

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

export const skillsData: skillCardPropsIF[] = [
  { name: "HTML", icon: HTMLIcon },
  { name: "CSS", icon: CSSIcon },
  { name: "SASS", icon: SASSIcon },
  { name: "JavaScrpt", icon: JSIcon },
  { name: "TypeScript", icon: TSIcon },
  { name: "React", icon: ReactIcon },
  { name: "Zustand", icon: HTMLIcon },
  { name: "Redux", icon: ReduxIcon },
  { name: "Material UI", icon: MaterialIcon },
  { name: "Bootstrap", icon: BootstapIcon },
  { name: "Tailwind CSS", icon: TailwindIcon },
  { name: "Node", icon: NodeIcon },
  { name: "Express", icon: ExpressIcon },
  { name: "MongoDB", icon: MongoDBIcon },
  { name: "MySQL", icon: MySQLIcon },
  { name: "GIT", icon: GITIcon },
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
