import { type ProjectCardProps } from "@/components/projects/project-card";
import { type ProjectShowcaseListItem } from "@/components/projects/project-showcase-list";
import { siteMetadata } from "@/data/siteMetaData.mjs";

export const PROJECT_SHOWCASE: ProjectShowcaseListItem[] = [
  {
    index: 0,
    title: "Off-Topics",
    href: "/projects",
    image: {
      LIGHT: "/images/projects/off-1.png",
      DARK: "/images/projects/off-2.png",
    },
  },
  {
    index: 1,
    title: "Kundan's",
    href: "/projects",

    image: {
      LIGHT: "/images/projects/kundan1.png",
      DARK: "/images/projects/kundan2.png",
    },
  },
  {
    index: 2,
    title: "Nextjs-space",
    href: "/projects",
    image: {
      LIGHT: "/images/projects/next1.png",
      DARK: "/images/projects/next2.png",
    },
  },
];

export const PROJECTS_CARD: ProjectCardProps[] = [
  {
    name: "Off-topics",
    favicon: "/images/projects/logos/off-topics.png",
    imageUrl: [
      "/images/projects/off-4.png",
      "/images/projects/off-1.png",
      "/images/projects/off-2.png",
      "/images/projects/off-3.png",
    ],
    description:
      "The website serves as a comprehensive resource for knowledge sharing and tech exploration. It features sections for updates, educational content, schedules, and contributor recognition, fostering a community of learning and engagement.",
    sourceCodeHref: "https://github.com/BUMBAIYA/jsontree",
    liveWebsiteHref: "https://off-topics.vercel.app/First.html",
  },
  {
    name: "Kundan's",
    favicon: "/icons/kundan.svg",
    imageUrl: [
      "/images/projects/kundan1.png",
      "/images/projects/kundan3.png",
      "/images/projects/kundan4.png",
    ],
    description:
      "The Kundan's is a user-friendly design that showcases the restaurant's sweet and savory menu, and branch locations. It includes interactive elements like a reservation system and detailed sections about the restaurant’s story and values.",
    sourceCodeHref: "https://github.com/BUMBAIYA/kanban",
    liveWebsiteHref: "https://kundans-git-main-awkward-pys-projects.vercel.app/",
  },
  {
    name: "Next Space Website",
    favicon: "/images/projects/logos/space1.png",
    imageUrl: [
      "/images/projects/next1.png",
      "/images/projects/next2.png",
      "/images/projects/next3.png",
    ],
    description:
      "This repository features a space-themed website built with Next.js, Tailwind CSS, and Framer Motion. It provides a responsive and customizable design, perfect for showcasing skills and projects.",
    sourceCodeHref: "https://github.com/BUMBAIYA/ManyGames",
    liveWebsiteHref: "https://awkwardpy-awkward-pys-projects.vercel.app/",
  },
  {
    name: "UBTER",
    favicon: "/images/projects/logos/ubter.png",
    imageUrl: [
      "/images/projects/ubter1.png",
      "/images/projects/ubter2.png",
      "/images/projects/ubter3.png",
    ],
    description:
      "I recreated my college website design using Html Css, making it responsive with an enhanced UI/UX for a better user experience.",
    sourceCodeHref: "",
    liveWebsiteHref: "https://ubter-git-main-awkward-pys-projects.vercel.app/",
  },
  {
    name: "Spotify",
    favicon: "/images/projects/logos/spotify.png",
    imageUrl: [
      "/images/projects/spotify1.png",
      "/images/projects/spotify2.png",
    ],
    description:
      "Spotify clone using the powerful MERN stack (MongoDB, Express, React, Node.js) along with Vite for a fast and efficient development experience.",
    sourceCodeHref: "https://",
  liveWebsiteHref:"https://pankaj-portfolio-ochre.vercel.app/Spotify",
  },
];
