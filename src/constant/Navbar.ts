import { Routes } from "./Routes";
import {House} from "lucide-react"

export const NavbarItems = [
  { title: "Home", href: `${Routes.home}`, icon: House },
  { title: "Expertise", href: `#${Routes.about}`, icon: House },
  { title: "Projects", href: `${Routes.projects}`, icon: House },
  { title: "Services", href: `#${Routes.services}`, icon: House },
  { title: "Contact", href: `${Routes.contact}`, icon: House },
];
