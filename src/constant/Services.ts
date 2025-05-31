import {
  Network,
  ShieldCheck,
  ChartNoAxesCombined,
  MonitorSmartphone,
  Webhook,
  Handshake,
} from "lucide-react";

export const ServicesList = [
  {
    title: "Complex SPA Development",
    description:
      "Architecting and building intricate single-page applications with robust state management and modular design for optimal performance and scalability.",
    image: "/assets/SPA_DEVELOPEMENT.webp",
    icon: Network,
  },
  {
    title: "Performance Optimization",
    description:
      "Implementing advanced techniques to deliver exceptional application speed and responsiveness, ensuring an optimal user experience.",
    icon: ChartNoAxesCombined,
  },
  {
    title: "Robust Testing",
    description:
      "Ensuring application reliability and stability through the strategic implementation of comprehensive testing suites across all levels.",
    icon: ShieldCheck,
  },
  {
    title: "Responsive & Accessible Design",
    description:
      "Developing universally accessible and fluidly responsive web applications that adapt seamlessly to any device.",
    image: "/assets/Responsive.png",
    icon: MonitorSmartphone,
  },
  {
    title: "API Integration & Data Handling",
    description:
      "Skillfully integrating with backend systems and managing data flow to power dynamic and efficient frontend experiences.",
    image: "/assets/API.png",
    icon: Webhook,
  },
  {
    title: "Technical Leadership & Collaboration",
    description:
      "Providing technical guidance and fostering collaborative environments to achieve impactful and high-quality software delivery.",
    icon: Handshake,
  },
];

export const ServicesGroup = [
  [ServicesList[0], ServicesList[1]],
  [ServicesList[2], ServicesList[3]],
  [ServicesList[4], ServicesList[5]],
];
