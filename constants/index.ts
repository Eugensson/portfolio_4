import {
  HiHome,
  HiUser,
  HiViewColumns,
  HiRectangleGroup,
  HiEnvelope,
  HiChatBubbleBottomCenterText,
} from "react-icons/hi2";
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaWordpress,
  FaFigma,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiFramer,
  SiAdobexd,
  SiAdobephotoshop,
} from "react-icons/si";
import {
  RxCrop,
  RxPencil2,
  RxDesktop,
  RxReader,
  RxRocket,
} from "react-icons/rx";
import {
  RiBehanceLine,
  RiDribbbleLine,
  RiFacebookLine,
  RiInstagramLine,
  RiPinterestLine,
  RiYoutubeLine,
} from "react-icons/ri";

import { AboutItem } from "@/types";

export const NAV_ITEMS = [
  { name: "home", path: "/", icon: HiHome },
  { name: "about", path: "/about", icon: HiUser },
  { name: "services", path: "/services", icon: HiRectangleGroup },
  { name: "work", path: "/work", icon: HiViewColumns },
  {
    name: "testimonials",
    path: "/testimonials",
    icon: HiChatBubbleBottomCenterText,
  },
  { name: "contact", path: "/contact", icon: HiEnvelope },
];

export const ABOUT_DATA: AboutItem[] = [
  {
    title: "skills",
    info: [
      {
        title: "Web Development",
        icons: [
          FaHtml5,
          FaCss3,
          FaJs,
          FaReact,
          SiNextdotjs,
          SiFramer,
          FaWordpress,
        ],
      },
      {
        title: "UI/UX Design",
        icons: [FaFigma, SiAdobexd, SiAdobephotoshop],
      },
    ],
  },
  {
    title: "awards",
    info: [
      {
        title: "Webby Awards - Honoree",
        stage: "2011 - 2012",
      },
      {
        title: "Adobe Design Achievement Awards - Finalist",
        stage: "2009 - 2010",
      },
    ],
  },
  {
    title: "experience",
    info: [
      {
        title: "UX/UI Designer - XYZ Company",
        stage: "2022 - 2025",
      },
      {
        title: "Web Developer - ABC Agency",
        stage: "2015 - 2022",
      },
      {
        title: "Intern - DEF Corporation",
        stage: "2012 - 2015",
      },
    ],
  },
  {
    title: "credentials",
    info: [
      {
        title: "Web Development - ABC University, LA, CA",
        stage: "2011",
      },
      {
        title: "Computer Science Diploma - AV Technical Institute",
        stage: "2009",
      },
      {
        title: "Certified Graphic Designer - ABC Institute, Los Angeles, CA",
        stage: "2006",
      },
    ],
  },
];

export const WORK_DATA = {
  slides: [
    {
      images: [
        { title: "title", path: "/assets/thumb1.jpg" },
        { title: "title", path: "/assets/thumb2.jpg" },
        { title: "title", path: "/assets/thumb3.jpg" },
        { title: "title", path: "/assets/thumb4.jpg" },
      ],
    },
    {
      images: [
        { title: "title", path: "/assets/thumb4.jpg" },
        { title: "title", path: "/assets/thumb1.jpg" },
        { title: "title", path: "/assets/thumb2.jpg" },
        { title: "title", path: "/assets/thumb3.jpg" },
      ],
    },
  ],
};

export const TESTIMONIALS_DATA = [
  {
    image: "/assets/t-avt-1.png",
    name: "Anne Smith",
    position: "Customer",
    message:
      "Choosing this gym was the best decision I made for my health. The trainers are motivating, the equipment is modern, and every session feels rewarding.",
  },
  {
    image: "/assets/t-avt-2.png",
    name: "Jane Doe",
    position: "Customer",
    message:
      "I love the supportive community and the variety of classes offered. Each workout is exciting, and I feel stronger, healthier, and more confident every week.",
  },
  {
    image: "/assets/t-avt-3.png",
    name: "John Doe",
    position: "Customer",
    message:
      "The personalized approach really makes a difference. Friendly staff, clean facilities, and a focus on progress keep me motivated to reach my fitness goals.",
  },
];

export const SERVICES_DATA = [
  {
    icon: RxCrop,
    title: "Branding",
    description: "We create unique brand strategies that strengthen identity.",
  },
  {
    icon: RxPencil2,
    title: "Design",
    description: "Creative design solutions that blend style with usability.",
  },
  {
    icon: RxDesktop,
    title: "Development",
    description: "Custom web development focused on speed, scale, and growth.",
  },
  {
    icon: RxReader,
    title: "Copywriting",
    description: "Engaging copywriting that builds trust and drives results.",
  },
  {
    icon: RxRocket,
    title: "SEO",
    description: "Smart SEO strategies that improve ranking and visibility.",
  },
];

export const SOCIALS_DATA = [
  {
    label: "Youtube",
    link: "https://www.youtube.com",
    icon: RiYoutubeLine,
  },
  {
    label: "Facebook",
    link: "https://facebook.com",
    icon: RiFacebookLine,
  },
  {
    label: "Instagram",
    link: "https://www.instagram.com",
    icon: RiInstagramLine,
  },
  {
    label: "Dribbble",
    link: "https://www.dribbble.com",
    icon: RiDribbbleLine,
  },
  {
    label: "Behance",
    link: "https://www.behance.net",
    icon: RiBehanceLine,
  },
  {
    label: "Pinterest",
    link: "https://www.pinterest.com",
    icon: RiPinterestLine,
  },
];
