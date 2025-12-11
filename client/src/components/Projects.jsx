// src/components/Projects.jsx
import portfolio from '../images/projectImages/portfolio.webp';
import movieScope from '../images/projectImages/movieScope.webp';
import movieScope2 from '../images/projectImages/movieScope2.jpg';
import foodiehome2 from '../images/projectImages/foodiehome2.webp';
import foodie2 from '../images/projectImages/foodie2.webp';
import bakeryFront from '../images/projectImages/Bakery_front.jpg';
import bakeryListing from '../images/projectImages/Bakery_listing.jpg';
import form from '../images/projectImages/form.jpeg';
import ProjectCard from './ProjectCard.jsx';

// Main Projects component
const Projects = () => {
  const projectsData = [
    {
      title: "Portfolio",
      images: [portfolio],
      description: "I built this portfolio from scratch with React, Tailwind CSS, and JavaScript. Includes a Home page, About section, Skills, and Contact form.",
      techStack: ["JavaScript", "React", "Tailwind CSS"],
      demoLink: "https://samsongideyportifolio.netlify.app/",
      githubLink: "https://github.com/smile679/samson_portifolio.git",
    },
    {
      title: "Movie Scope App",
      images: [movieScope2, movieScope],
      description: "MovieScope lets users browse, search, and discover movies with a responsive UI.",
      techStack: ["JavaScript", "React", "Tailwind CSS", "React Router"],
      features: [
        "Search movies by title",
        "Browse trending and popular movies",
        "View detailed movie info",
        "Add to cart functionality",
        "Fully responsive design",
      ],
      demoLink: "https://moviescopapp.netlify.app/",
      githubLink: "https://github.com/smile679/Movie-App.git",
    },
    {
      title: "Foodie Delight App",
      images: [foodiehome2, foodie2],
      description: "Discover and order meals from around the world with a modern responsive web application.",
      techStack: ["JavaScript", "React", "Tailwind CSS", "React Router"],
      features: [
        "Search recipes by name",
        "Responsive recipe card layout",
        "Detailed recipe pages",
        "Add to cart functionality",
        "Cart summary and order receipt",
        "Order and payment simulation",
      ],
      demoLink: "https://foodiedelightapp.netlify.app/",
      githubLink: "https://github.com/smile679/Foodie-Delight.git",
    },
    {
      title: "Form Backend Only",
      images: [form],
      description: "Node.js + Express backend for user registration, authentication, and image uploads with User/Admin roles.",
      techStack: ["Node.js", "Express", "MongoDB", "JWT", "Multer", "dotenv"],
      features: [
        "Users can register, login, change password, and view uploads",
        "Admins can upload and delete images",
      ],
      githubLink: "https://github.com/smile679/Form-backend-only.git",
    },
    {
      title: "Bakery Fullstack App",
      images: [bakeryFront, bakeryListing],
      description: "A full-stack bakery e-commerce app for browsing and ordering baked goods.",
      techStack: ["JavaScript", "React", "Tailwind CSS", "React Router", "Node.js", "Express", "MongoDB"],
      features: [
        "Responsive bakery card layout",
        "Detailed product pages",
        "Add to cart functionality",
        "Cart summary and order receipt",
        "Order/payment simulation",
      ],
      demoLink: "https://bakery-full-stack-webisite-front.onrender.com",
      githubLink: "https://github.com/smile679/Bakery-Full-stack-Webisite.git",
    },
    {
      title: "Merkato eCommerce App",
      images: [
        "https://res.cloudinary.com/dineyc77u/image/upload/v1763652914/nn3_yz6lwo.jpg",
        "https://res.cloudinary.com/dineyc77u/image/upload/v1763652914/nn2_apgwdx.jpg",
      ],
      description: "Full-featured eCommerce platform with secure PayPal payments and admin management.",
      techStack: ["JavaScript", "React", "Tailwind CSS", "Redux Toolkit", "Node.js", "Express", "MongoDB", "PayPal API"],
      features: [
        "Responsive ecommerce card layout",
        "Detailed product pages",
        "Add to cart functionality",
        "Cart summary and order receipt",
        "Order/payment simulation",
      ],
      demoLink: "https://ecommerce-app-1-q5og.onrender.com",
      githubLink: "https://github.com/smile679/eCommerce-app.git",
    },
  ];

  return (
    <section id="projectId" className="max-w-6xl mx-auto min-h-screen flex flex-col py-10 px-5">
      <h1 className="text-4xl font-bold text-shadow-gray-800 mb-10">Projects</h1>
      {projectsData.map((project) => (
        <ProjectCard key={project.title} {...project} />
      ))}
    </section>
  );
};

export default Projects;