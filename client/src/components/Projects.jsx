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
import Header from './Header.jsx';


const Projects = () => {
  const projectsData = [
    // {
    //   title: "Portfolio",
    //   images: [portfolio],
    //   description: "I designed and developed this portfolio website from scratch, starting from UI/UX layout to full implementation.It includes a clean Home page, structured About section, detailed Skills overview, and a fully functional Contact form.",
    //   techStack: ["JavaScript", "React", "Tailwind CSS"],
    //   demoLink: "https://samsongideyportifolio.netlify.app/",
    //   githubLink: "https://github.com/smile679/samson_portifolio.git",
    // },
    {
      title: "Bakery Fullstack App",
      images: [bakeryFront, bakeryListing],
      description: "The Bakery Fullstack App was built to make it easier for customers to discover, browse, and order baked goods online without navigating multiple platforms. Many small bakeries struggle to present their products clearly or handle orders efficiently, so this app brings everything into one streamlined experience. Users can explore breads, pastries, and cakes, learn details about each item, add them to their cart, and place orders, while the admin side manages products and content. The goal is to provide a smooth, modern shopping experience for both customers and bakery owners.",
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
      description: "The Merkato eCommerce App was built to offer a smoother, more organized shopping experience for users who often face slow, cluttered, or confusing online stores. It provides a clear product catalog, detailed item pages, and a simple cart and checkout process that helps customers shop without frustration. The platform also includes an admin system for managing products and store content, giving business owners an easy way to operate their online shop. Overall, the app delivers a modern and efficient marketplace experience for both shoppers and sellers.",
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
    {
      title: "Foodie Delight App",
      images: [foodiehome2, foodie2],
      description: "The Bakery Fullstack App was created to give customers and bakery owners a smoother, more organized online experience. Many local bakeries have great products but lack an easy way for customers to explore items, view details, or place orders without confusion. This application solves that by offering a clean marketplace where users can browse breads, pastries, and cakes, read descriptions, add items to their cart, and check out with a simple flow. At the same time, the admin panel allows bakery owners to manage products and content efficiently, creating a unified system that keeps both sides connected and reduces the friction found in typical bakery websites.",
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
      title: "Movie Scope App",
      images: [movieScope2, movieScope],
      description: "MovieScope is a responsive movie discovery web application that allows users to browse trending films, search titles, and view detailed information including rating, description, and posters. The application is built using JavaScript, React, Tailwind CSS v4, and React Router to deliver a clean, fast, and interactive user experience.",
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
      title: "Form Backend Only",
      images: [form],
      description: "Node.js + Express backend for user registration, authentication, and image uploads with User/Admin roles.",
      techStack: ["Node.js", "Express", "MongoDB", "JWT", "Multer", "dotenv"],
      features: [
        "Users can register, login, change password, and view uploads",
        "Admins can upload and delete images",
      ],
      githubLink: "https://github.com/smile679/Form-backend-only.git",
    }
  ];

  return (
    <section id="projectId" className="max-w-6xl mx-auto min-h-screen flex flex-col py-10 px-5">
      <Header />
      <h1 className="text-4xl font-bold text-shadow-gray-800 my-15">Projects</h1>
      {projectsData && projectsData.map((project) => (
        <ProjectCard key={project.title} {...project} />
      ))}
    </section>
  );
};

export default Projects;