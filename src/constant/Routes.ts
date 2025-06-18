export const ROUTES = {
  default: "/",
  home: "home",
  about: "expertise",
  services: "services",
  projects: "/projects",
  contact: "/contact",
  work: "/experience",
  terms: "/terms",
};

export const NAVBAR_ITEMS = [
  { title: "Home", href: ROUTES.default },
  { title: "Experience", href: ROUTES.work },
  // { title: "Projects", href: ROUTES.projects },
  // { title: "Expertise", href: `#${ROUTES.about}` },
  // { title: "Services", href: `#${ROUTES.services}` },
  { title: "Contact Me", href: ROUTES.contact },
];