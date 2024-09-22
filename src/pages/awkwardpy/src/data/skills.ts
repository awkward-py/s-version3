import {
  SiExpress,
  SiNextdotjs,
  SiFirebase,
  SiGithub,
  SiCplusplus,
  SiVercel,
  SiNetlify,
  SiAdobeaftereffects,
  SiAdobephotoshop,
  SiAdobelightroom,
  SiCanva,
  SiVisualstudiocode,
} from "react-icons/si";
import { FramerMotionIcon } from "@/components/icons";
import { type SkillsShowcaseProps } from "@/components/skills/skills-showcase";

// Languages
import HtmlSvg from "@/public/icons/html.svg";
import CsssSvg from "@/public/icons/css.svg";
import SassSvg from "@/public/icons/sass.svg";
import JavascriptSvg from "@/public/icons/javascript.svg";
import TypescriptSvg from "@/public/icons/typescript.svg";
import PythonSvg from "@/public/icons/python.svg";

// Libraries
import ReactjsSvg from "@/public/icons/reactjs.svg";

import TailwindcssSvg from "@/public/icons/tailwindcss.svg";

import ViteSvg from "@/public/icons/vite.svg";

// Backend
import NodejsSvg from "@/public/icons/nodejs.svg";

// Database and ORMS
import MongoDBSvg from "@/public/icons/mongodb.svg";
import PostgressSvg from "@/public/icons/postgresql.svg";

// Tools and Tech
import GitSvg from "@/public/icons/git.svg";

export const SKILLS_DATA: SkillsShowcaseProps["skills"] = [
  {
    sectionName: "Languages",
    skills: [
      {
        name: "HTML",
        icon: HtmlSvg,
      },
      {
        name: "CSS",
        icon: CsssSvg,
      },
      {
        name: "SASS",
        icon: SassSvg,
      },
      {
        name: "Javascript",
        icon: JavascriptSvg,
      },
      {
        name: "Typescript",
        icon: TypescriptSvg,
      },
      {
        name: "C++",
        icon: SiCplusplus,
      },
    ],
  },
  {
    sectionName: "Libraries and Frameworks",
    skills: [
      {
        name: "Reactjs",
        icon: ReactjsSvg,
      },
      {
        name: "Nextjs",
        icon: SiNextdotjs,
      },
      {
        name: "Tailwindcss",
        icon: TailwindcssSvg,
      },
      {
        name: "Framer motion",
        icon: FramerMotionIcon,
      },
      {
        name: "Vite",
        icon: ViteSvg,
      },
    ],
  },
  {
    sectionName: "Backend",
    skills: [
      {
        name: "Nodejs",
        icon: NodejsSvg,
      },
      {
        name: "Express",
        icon: SiExpress,
      },
    ],
  },
  {
    sectionName: "Databases",
    skills: [
      {
        name: "MongoDB",
        icon: MongoDBSvg,
      },
      {
        name: "Postgress",
        icon: PostgressSvg,
      },
      {
        name: "Firebase",
        icon: SiFirebase,
      },
    ],
  },
  {
    sectionName: "Tools and Technologies",
    skills: [
      {
        name: "Github",
        icon: SiGithub,
      },
      {
        name: "Netlify",
        icon: SiNetlify,
      },
      {
        name: "Git",
        icon: GitSvg,
      },
      {
        name: "VsCode",
        icon: SiVisualstudiocode,
      },
      {
        name: "Vercel",
        icon: SiVercel,
      },
    ],
  },
  {
    sectionName: "Creativity Tools",
    skills: [
      {
        name: "After Effects",
        icon: SiAdobeaftereffects,
      },
      {
        name: "Photoshop",
        icon: SiAdobephotoshop,
      },
      {
        name: "Lightroom",
        icon: SiAdobelightroom,
      },
      {
        name: "Canva",
        icon: SiCanva,
      },
    ],
  },
];
