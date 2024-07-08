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
    text: "CONSULTANCY",
    path: navPaths.consultancy,
  },
  {
    text: "COURSES",
    path: navPaths.courses,
  },
  {
    text: "TRAINING",
    path: navPaths.training,
  },
  {
    text: "CONTACT",
    path: navPaths.contactUs,
  },
  {
    text: "BLOG",
    path: navPaths.blog,
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
