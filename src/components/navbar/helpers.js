import { navPaths } from "../../utils/constants";

const navItems = [
  {
    text: "HOME",
    path: "/",
  },
  {
    text: "COMPANY",
    path: navPaths.company,
  },
  {
    text: "PROJECTS",
    path: navPaths.consultancy,
  },
  {
    text: "SERVICES",
    path: navPaths.services,
  },
  {
    text: "NEWS",
    path: navPaths.training,
  },
  {
    text: "CONTACT",
    path: navPaths.contact,
  },
];

const companySubItems = [
  {
    text: "About Us",
    path: navPaths.about,
  },
  {
    text: "Our People",
    path: navPaths.ourPeople,
  },
  {
    text: "Testimonials",
    path: navPaths.testimonials,
  },
  {
    text: "Faq",
    path: navPaths.FAQ,
  },
  {
    text: "Pricing",
    path: navPaths.pricing,
  },
];

export { navItems, companySubItems };
