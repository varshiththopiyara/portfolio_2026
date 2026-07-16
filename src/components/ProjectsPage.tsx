import ProjectsScrollSection, { type Project } from "../containers/Projects";
import qKartImage from "../assets/projectImages/q-kart.jpg";
import qTripImage from "../assets/ProjectImages/q-trip.jpg";
import qtifyImage from "../assets/ProjectImages/q-tify.jpg"

const projects: Project[] = [
  {
    id: "1",
    title: "Q-Trip",
    category: "Web app",
    year: "2025",
    description: "A web Page built on React for making Travelling easy.",
    image: qTripImage,
    tags: ["React", "Tailwind"],
    link: "https://qtri-dynamic.vercel.app/",
  },
  {
    id: "2",
    title: "Q-Kart",
    category: "Web App",
    year: "2025",
    description: "Web Application for shopping home essentials at one place.",
    image: qKartImage,
    tags: ["React", "Tailwind", "Debouncing"],
    link: "https://varshiththopiyara-vh-me-qkart-frontend-v2-hqp694r5e.vercel.app/",
  },
   {
    id: "3",
    title: "Q-Tify",
    category: "Web App",
    year: "2025",
    description: "A song browsing application for music listeners.",
    image: qtifyImage,
    tags: ["React", "Tailwind", "Material UI","Swiper"],
    link: "https://qtify-new-bay.vercel.app/",
  },
];

export default function ProjectsPage() {
  return <ProjectsScrollSection projects={projects}  />;
}
