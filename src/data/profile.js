const base = import.meta.env.BASE_URL;

export const PROFILE = {
    name: "Carina Sophie Schoppe",
    founder: "Carina Sophie Schoppe",
    role: "Portfolio for software, research, teaching and digital education",
    location: "Brisbane, Australia",
    addressLines: ["43/9 Eduard Place", "4116 Calamvale", "Brisbane, Australia"],
    remote: "Personal portfolio based in Brisbane",
    email: "info@carinaschoppe.com",
    phoneAustralia: "+61 451 448 724",
    phoneGermany: "+49 175 5738 757",
    github: "https://github.com/CarinaSchoppe",
    linkedin: "https://www.linkedin.com/in/carinaschoppe/",
    luminovia: "https://luminovia.org",
    luminoviaEmail: "info@luminovia.org",
    luminoviaGithub: "https://github.com/Luminovia-Training-Consulting",
    appointmentSchedule: "https://calendar.google.com/calendar/appointments/schedules/AcZssZ1DRa4OAiQN9y8F-86ull0Jqb25hCL2ZimE4Wo5dojeEF3eSVDBMk6mGJMUG0mZxUR8wSD5-BB6?gv=true",
    analyticsId: "G-YNGD292XE5",
};

export const IMAGES = {
    hero: `${base}images/carina-hero.jpg`,
    tablet: `${base}images/carina-tablet.jpg`,
    headshot: `${base}images/carina-headshot.jpg`,
    outdoor: `${base}images/carina-outdoor.jpg`,
    fullBody: `${base}images/carina-fullbody.jpg`,
    luminoviaLogoFull: `${base}images/luminovia-logo-full.svg`,
    luminoviaLogoMark: `${base}images/luminovia-logo-mark.svg`,
};

export const navItems = [
    {to: "/projects", key: "software"},
    {to: "/skills", key: "skills"},
    {to: "/credentials", key: "credentials"},
    {to: "/blog", key: "blog"},
    {to: "/about", key: "about"},
    {to: "/contact", key: "book"},
];
