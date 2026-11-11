import luminoviaIcon from "../assets/luminovia-icon.webp";
import luminoviaFullLogo from "../assets/luminovia-full-logo.webp";

const base = import.meta.env.BASE_URL;
const luminovia = "https://luminovia.org";

export const PROFILE = {
    name: "Carina Sophie Schoppe",
    founder: "Carina Sophie Schoppe",
    role: "Educator, Consultant and AI Researcher",
    location: "Brisbane, Australia",
    addressLines: ["43/9 Eduard Place", "4116 Calamvale", "Brisbane, Australia"],
    remote: "Personal portfolio based in Brisbane",
    email: "info@carinaschoppe.com",
    phoneAustralia: "+61 451 448 724",
    phoneGermany: "+49 175 5738 757",
    github: "https://github.com/CarinaSchoppe",
    linkedin: "https://www.linkedin.com/in/carinaschoppe/",
    luminovia,
    luminoviaTraining: `${luminovia}/training/#details`,
    luminoviaContact: `${luminovia}/contact/`,
    consultingDemo: "https://www.youtube.com/watch?v=sYMO5sb-YKg",
    luminoviaEmail: "info@luminovia.org",
    luminoviaGithub: "https://github.com/Luminovia-Training-Consulting",
    analyticsId: "G-YNGD292XE5",
};

export const IMAGES = {
    homeHero: `${base}images/carina-business-hero.jpg`,
    hero: `${base}images/carina-hero.jpg`,
    tablet: `${base}images/carina-tablet.jpg`,
    headshot: `${base}images/carina-headshot.jpg`,
    outdoor: `${base}images/carina-outdoor.jpg`,
    fullBody: `${base}images/carina-fullbody.jpg`,
    luminoviaLogoFull: luminoviaFullLogo,
    luminoviaLogoMark: luminoviaIcon,
};

export const navItems = [
    {to: "/projects", key: "software"},
    {to: "/skills", key: "skills"},
    {to: "/credentials", key: "credentials"},
    {to: "/#referenzen", key: "references"},
    {to: "/blog", key: "blog"},
    {to: "/about", key: "about"},
    {to: "/contact", key: "book"},
];
