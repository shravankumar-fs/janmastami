export const SITE = {
  brand: "Aghora Labs",
  url: "https://www.aghoralabs.com",
  email: "aghoralabs.fsdev@gmail.com",
  linkedin: "https://www.linkedin.com/company/aghoralabs",
  location: "Udupi, Karnataka, India",
  year: new Date().getFullYear(),
} as const;

export const NAV_LINKS = [
  { label: "Home", href: "#top" },
  { label: "Krishna", href: "#film" },
  { label: "About Us", href: "#about" },
  { label: "Wishes", href: "#wishes" },
] as const;

export const PILLARS = [
  {
    icon: "design",
    title: "Design led",
    body: "We turn product ideas into interfaces that show people exactly what to do next.",
  },
  {
    icon: "product",
    title: "Product mindset",
    body: "We build for ourselves first, then ship the same proven process to our clients.",
  },
  {
    icon: "shield",
    title: "Built to last",
    body: "Systems that stay stable, stay easy to maintain, and run on infrastructure you control.",
  },
] as const;

export const SERVICES = [
  "Website Design & Development",
  "Mobile Apps (iOS & Android)",
  "SaaS Product Development",
  "Custom Software",
  "Agentic AI & Automation",
  "UI/UX Design",
  "Ecommerce",
  "SEO",
] as const;

export const STATS = [
  { value: "29", label: "Services" },
  { value: "3", label: "Studio arms" },
  { value: "Udupi", label: "Based in" },
] as const;

export const FOOTER_COLS = [
  {
    title: "Solutions",
    links: [
      { label: "Product Engineering", href: "https://www.aghoralabs.com" },
      { label: "Digital Experience", href: "https://www.aghoralabs.com" },
      { label: "Websites & Applications", href: "https://www.aghoralabs.com" },
      { label: "SaaS Applications", href: "https://www.aghoralabs.com" },
      { label: "Logo & Web Design", href: "https://www.aghoralabs.com" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", href: "https://www.aghoralabs.com" },
      { label: "Careers", href: "https://www.aghoralabs.com" },
      { label: "Labs", href: "https://www.aghoralabs.com" },
      { label: "Contact Us", href: "https://www.aghoralabs.com" },
    ],
  },
] as const;

export const WISH_TEXT =
  "May the divine blessings of Lord Krishna fill your life with joy, love and harmony. Happy Krishna Janmashtami — from all of us at Aghora Labs. 🪈";
