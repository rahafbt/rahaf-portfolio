// Mobile Projects
import easyrideImage from "/assets/projects/EasyRide-project-image.jpg";
import healthcareImage from "/assets/projects/Healthcare-project-image.jpg";
import weatherImage from "/assets/projects/Weather-project-image.jpg";
// Web Projects
import authSystemImage from "/assets/projects/WebAuthenticationSystem-project-image.jpg";
import littleLemonImage from "/assets/projects/LittleLemon-project-image.jpg";
import toDoListImage from "/assets/projects/ToDoList-project-image.jpg";
import airlineBookingImage from "/assets/projects/AirlineBooking-project-image.jpg";
import calculatorImage from "/assets/projects/Calculator-project-image.jpg";


export interface Experience {
  title: string;
  company: string;
  duration: string;
  responsibilities: string[];
}

export interface Project {
  title: string;
  subtitle?: string | null;
  technologies?: string[];
  description?: string | null;
  image?: string | null;
  github?: string | null;
  category: "web" | "ux" | "pm";
  enabled: boolean;
}

export interface Skill {
  name: string;
  enabled: boolean;
  accent?: "pink" | "yellow";
}

export const experiences: Experience[] = [
  {
    title: "Product Management Intern",
    company: "1Pass",
    duration: "Aug 2025 – Jan 2026",
    responsibilities: [
      "Gathered, analyzed, and prioritized product requirements, and created functional specifications, user stories, and workflows.",
      "Collaborated with cross-functional teams including Design, Tech, Finance, Marketing, and Operations to align product goals and requirements.",
      "Supported sprint planning and backlog prioritization using Jira to ensure timely delivery.",
      "Conducted market research, competitive analysis, and user interviews to identify customer needs, gather feedback, and support product decisions.",
    ],
  },
  {
    title: "Business Analyst Intern",
    company: "SetupB (MCIT Tech Champions Program)",
    duration: "Sep 2024 – Dec 2024",
    responsibilities: [
      "Developed comprehensive Functional Requirements Documentation (FRDs), including user stories and detailed functional requirements.",
      "Created user personas, process maps, and workflow diagrams to support product planning and solution design.",
      "Conducted market research, competitive analysis, and user interviews to support product strategy and development.",
      "Designed a pitch deck and collaborated with founders and the product team in a fast-paced startup environment.",
    ],
  },
  {
    title: "Systems Features Analyst (COOP)",
    company: "Digital Transformation and IT Center at Jeddah University",
    duration: "Jun 2022 – Aug 2022",
    responsibilities: [
      "Collaborated with stakeholders across multiple departments to gather and validate requirements for new system features.",
      "Created UML diagrams, workflow documentation, wireframes, and user interface designs using Figma and draw.io.",
    ],
  },
];

export const projects: Project[] = [
  {
    title: "Easy Ride",
    subtitle: "Cross-platform mobile application - Senior Project",
    technologies: ["Flutter", "Dart", "Friebase", "Google Maps API"],
    description:
      "Easy Ride is a mobile application that compares all ride- sharing apps which are operating in Saudi Arabia such as (Careem, Uber,...etc). with the cheapest, the fastest, and the best optimal available option.",
    image: easyrideImage,
    github: null,
    category: "web",
    enabled: true,
  },
  {
    title: "Health Care",
    subtitle: "Android mobile application",
    technologies: ["Java", "Friebase"],
    description:
      "Health Care is an Android application that helps people improve their health by gathering all they need in one application, such as laboratory test, meals, and exercises.",
    image: healthcareImage,
    github: null,
    category: "web",
    enabled: true,
  },
  {
    title: "Weather",
    subtitle: "Android mobile application",
    technologies: ["Java", "Friebase"],
    description:
      "This Android weather application provides real-time weather updates based on user search inputs. With a clean interface, it delivers accurate weather conditions and forecasts",
    image: weatherImage,
    github: null,
    category: "web",
    enabled: false,
  },
  {
    title: "Web Authentication System",
    subtitle: "Full-stack web application",
    technologies: ["React", "Vite", "Friebase", "Bootstrap"],
    description:
      "This web authentication system offers a secure and user-friendly experience with features like email and Google sign-in. It supports light and dark themes, and includes password recovery and email verification.",
    image: authSystemImage,
    github: "https://github.com/rahafbt/Web-Authentication-System/tree/master",
    category: "web",
    enabled: true,
  },
  {
    title: "Little Lemon",
    subtitle: "Frontend Web Application",
    technologies: ["React", "Vite", "Bootstrap"],
    description:
      "This Little Lemon website, part of the Meta Front-End Developer Professional Certificate, offers a seamless booking experience for users to reserve tables. It features a user-friendly interface and responsive design, ensuring accessibility across devices.",
    image: littleLemonImage,
    github: "https://github.com/rahafbt/little-lemon",
    category: "web",
    enabled: true,
  },
  {
    title: "To-Do List",
    subtitle: "Frontend Web Application",
    technologies: ["React", "Vite", "Bootstrap"],
    description:
      "This To-Do List website provides easily task management. Users can add, edit, and organize their tasks, while a dynamic progress bar visually tracks their completion.",
    image: toDoListImage,
    github: "https://github.com/rahafbt/to-do-list/tree/main",
    category: "web",
    enabled: true,
  },
  {
    title: "Airline Booking",
    subtitle: "Frontend Web Application",
    technologies: ["HTML", "CSS", "JavaScript", "PHP"],
    description:
      "This Airline Booking website offers users the ability to book and view airline tickets.",
    image: airlineBookingImage,
    github: null,
    category: "web",
    enabled: true,
  },
  {
    title: "Calculator",
    subtitle: "Frontend Web Application",
    technologies: ["React", "Vite", "Bootstrap"],
    description:
      "This simple calculator website offers a sleek and functional design with support for both light and dark modes.",
    image: calculatorImage,
    github: "https://github.com/rahafbt/Calculator/tree/main",
    category: "web",
    enabled: true,
  },
];

export const skillRows: Skill[][] = [
  // Row 1 — Programming
  [
    { name: "Java", enabled: true, accent: "pink" },
    { name: "Python", enabled: true },
    { name: "Dart", enabled: true },
    { name: "JavaScript", enabled: true, accent: "yellow" },
    { name: "SQL", enabled: true },
  ],

  // Row 2 — Web & Mobile Development
  [
    { name: "HTML", enabled: true, accent: "pink" },
    { name: "CSS", enabled: true },
    { name: "React", enabled: true, accent: "yellow" },
    { name: "Bootstrap", enabled: true },
    { name: "Flutter", enabled: true, accent: "pink" },
    { name: "Firebase", enabled: true },
    { name: "Android Development", enabled: true },
  ],

  // Row 3 — Software Engineering & Product
  [
    { name: "Requirements Gathering", enabled: true, accent: "pink" },
    { name: "FRD Writing", enabled: true },
    { name: "User Stories", enabled: true, accent: "yellow" },
    { name: "Agile", enabled: true },
    { name: "Sprint Planning", enabled: true },
    { name: "Backlog Prioritization", enabled: true, accent: "pink" },
    { name: "Market Research", enabled: true },
    { name: "Process Mapping", enabled: true, accent: "yellow" },
    { name: "UML", enabled: true },
  ],

  // Row 4 — UX / UI
  [
    { name: "User-Centered Design", enabled: true, accent: "pink" },
    { name: "User Research", enabled: true },
    { name: "User Interviews", enabled: true, accent: "yellow" },
    { name: "Competitive Analysis", enabled: true },
    { name: "Wireframing", enabled: true, accent: "pink" },
    { name: "Prototyping", enabled: true },
    { name: "Figma", enabled: true, accent: "yellow" },
    { name: "Usability Testing", enabled: true },
  ],

  // Row 5 — Tools
  [
    { name: "Jira", enabled: true, accent: "pink" },
    { name: "Git", enabled: true },
    { name: "GitHub", enabled: true, accent: "yellow" },
    { name: "draw.io", enabled: true },
    { name: "Lucidchart", enabled: true },
    { name: "Android Studio", enabled: true, accent: "pink" },
    { name: "Visual Studio Code", enabled: true },
  ],

  // Row 6 — Soft Skills
  [
    { name: "Communication", enabled: true, accent: "yellow" },
    { name: "Collaboration", enabled: true },
    { name: "Problem Solving", enabled: true, accent: "pink" },
    { name: "Analytical Thinking", enabled: true },
    { name: "Time Management", enabled: true, accent: "yellow" },
  ],
];