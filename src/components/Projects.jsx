import portfolio from '../images/projectImages/portfolio.webp'
import movieScope from '../images/projectImages/movieScope.webp'
import movieScope2 from '../images/projectImages/movieScope2.jpg'
import foodiehome2 from '../images/projectImages/foodiehome2.webp'
import foodie2 from '../images/projectImages/foodie2.webp'
import bakeryFront from '../images/projectImages/Bakery_front.jpg'
import bakeryListing from '../images/projectImages/Bakery_listing.jpg'
import form from '../images/projectImages/form.jpeg'
import { useState, useEffect } from 'react'

const Projects = ()=>{
  const [showText, setShowText] = useState({movie: false, foodie: false})

  useEffect(() => {
  const isMobile = window.innerWidth < 640;
  setShowText({ movie: !isMobile, foodie: !isMobile });
}, []);

  return <section className='max-w-6xl mx-auto min-h-screen flex flex-col py-10 px-5' id='projectId'>
    <h1 className='my-5 text-shadow-gray-800 text-shadow-lg'>Projects</h1>
    <div className='project-card'>
        <h3>Portfolio</h3>
        <div className='project-grid'>
          <img src={portfolio} alt="portfolio image"/>
        <div className='project-info'>
            <p className='text-[1rem] leading-6 text-white'>I built this portfolio website entirely from scratch
              starting with the design and transforming it into a fully functional site. The project is developed using 
              <span className='text-amber-400 font-bold'> JavaScript</span>, 
              <span className='text-gray-800 font-bold'> React </span>, and the latest <span className='text-sky-400 font-bold'> Tailwind CSS v4. </span>
              It includes a clean Home page, an About section, a detailed Skills section, and a fully functional Contact form.
            </p>
          <div className='project-buttons'>
              <a
              href="https://samsongideyportifolio.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="button px-2 py-2 my-2 max-sm:my-3"> Visit Live Website</button>
            </a>
            <a
              href="https://github.com/smile679/samson_portifolio.git"
              target="_blank"
              rel="noopener noreferrer"
            >
            <button className="button3"> Code on Github</button>
            </a>
          </div>
        </div>
      </div>
    </div>

    <div className='project-card'>
        <h3>Movie Scope App</h3>
      <div className='project-grid'>
        <div className='flex flex-col justify-evenly space-y-3'>
          <img src={ movieScope2 } alt="Movie-Scope App image"/>
          <img src={ movieScope } alt="Movie-Scope App image"/>
        </div>
      <div className='project-info'>
          <p className='text-[1rem] leading-6 text-white text-pretty my-2'>MovieScope is a modern and responsive web application that allows users to browse, search, 
            and discover movies from a wide selection of genres. The project is developed using 
            <span className='text-amber-400 font-bold'> JavaScript</span>, 
            <span className='text-gray-800 font-bold'> React </span>, and the latest 
            <span className='text-sky-400 font-bold'> Tailwind CSS v4. </span>
            <span className='text-gray-800 font-bold'> and React Router </span> it provides a clean and interactive user experience.
          </p>
          <div className='flex flex-col items-start my-2'>
            <div className='w-full flex justify-between'>
              <h3>🔥 Features</h3>
              <button className='text-[0.8rem] text-emerald-400 font-semibold sm:hidden' onClick={()=>setShowText(prev=>({...prev, movie:!prev.movie}))}>{showText.movie ? "Hide Text" : "Show More"}</button>
            </div>
              { showText.movie ? <ul className='text-[1.1rem] text-gray-800 font-semibold my-2'>
                <li>🔍 Search movies by title</li>
                <li>🎞️ Browse trending and popular movies</li>
                <li>🧾 View detailed movie info: title, rating, description, poster, and more</li>
                <li>🛒 Add to cart functionality</li>
                <li>📱 Fully responsive design for both desktop and mobile devices</li>
              </ul> : ""}
          </div>
          <div className='project-buttons'>
            <a
            href="https://moviescopapp.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="button px-2 py-2 my-2 max-sm:my-3"> Visit Live Website</button>
          </a>
          <a
            href="https://github.com/smile679/Movie-App.git"
            target="_blank"
            rel="noopener noreferrer"
          >
          <button className="button3"> Code on Github</button>
          </a>
        </div>
      </div>
      </div>
    </div>

    <div className='project-card'>
      <h3>Foodie Delight App</h3>
      <div className='project-grid'>
        <div className='flex flex-col justify-evenly space-y-3'>
        <img src={ foodiehome2 } alt="Foodie Delight image"/>
        <img src={ foodie2 } alt="Foodie Delight image"/>
      </div>
      <div className='project-info'>
          <p className='text-[1rem] leading-6 text-white text-pretty my-1'>Foodie Delight is a modern, responsive web application that helps users discover and now order delicious meals from around the world. Whether you're in the mood for pasta, dessert,
             or something brand new, Foodie Delight lets you search, explore, and order with ease. Build with
            <span className='text-amber-400 font-bold'> JavaScript</span>, 
            <span className='text-gray-800 font-bold'> React </span>, and the latest
            <span className='text-sky-400 font-bold'> Tailwind CSS v4. </span>
            <span className='text-gray-800 font-bold'> and React Router </span> it provides a clean and interactive user experience.
          </p>
          <div className='flex flex-col items-start my-2'>
            <div className='w-full flex justify-between'>
              <h3>🔥 Features</h3>
              <button className='text-[0.8rem] text-emerald-400 font-semibold sm:hidden' onClick={()=>setShowText(prev=>({...prev, foodie:!prev.foodie}))}>{showText.foodie ? "Hide Text" : "Show More"}</button>
            </div>
              { showText.foodie ? <ul className='text-[1.1rem] text-gray-800 font-semibold my-2'>
                <li>🔍 Search any recipe by name</li>
                <li>🖼️ Clean and responsive recipe card layout</li>
                <li>📄 Detailed recipe pages with ingredients and instructions</li>
                <li>🛒 Add to cart functionality</li>
                <li>🧾 Cart summary and order receipt</li>
                <li>💳 Order and payment simulation (demo)</li>
                <li>🌐 Built with React, Tailwind CSS, and React Router</li>
                <li>📱 Fully responsive design for both desktop and mobile devices</li>
              </ul> : ""}
          </div>
          <div className='project-buttons'>
            <a
            href="https://foodiedelightapp.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="button px-2 py-2 max-sm:my-3"> Visit Live Website</button>
          </a>
          <a
            href="https://github.com/smile679/Foodie-Delight.git"
            target="_blank"
            rel="noopener noreferrer"
          >
          <button className="button3">
            Code on Github</button>
          </a>
        </div>
      </div>
      </div>
    </div>

    <div className='project-card'>
      <h3>Form Backend Only</h3>
      <div className='project-grid'>
        <div className='flex flex-col justify-evenly space-y-3'>
        <img src={ form } alt="Form"/>
        {/* <img src={ foodie2 } alt="Foodie Delight image"/> */}
      </div>
      <div className='project-info'>
          <p className='text-[1rem] leading-6 text-white text-pretty my-1'>This is a Node.js + Express backend project for handling user registration, authentication, and image uploads.
            The system supports User and Admin roles. Built with
            <span className='text-amber-400 font-bold'> NodeJS(expressJs)</span>, 
            <span className='text-gray-800 font-bold'> MongoDB with Mongoose </span>,
            <span className='text-amber-400 font-bold'> dotenv for environment variables </span>
            <span className='text-sky-400 font-bold'> , Multer (file uploads) </span>
            <span className='text-gray-800 font-bold'> , JWT (JSON Web Tokens) for authentication. </span> it provides a secure and user-friendly experience.
          </p>
          <div className='flex flex-col items-start my-2'>
            <div className='w-full flex justify-between'>
              <h3>🔒 User Roles</h3>
              <button className='text-[0.8rem] text-emerald-400 font-semibold sm:hidden' onClick={()=>setShowText(prev=>({...prev, foodie:!prev.foodie}))}>{showText.foodie ? "Hide Text" : "Show More"}</button>
            </div>
              { showText.foodie ? <ul className='text-[1.1rem] text-gray-800 font-semibold my-2 ml-5 list-disc'>
                <li>Users can register, log in, change their password, and view uploaded images.</li>
                <li>Admins can do everything a User can, plus upload and delete images.</li>
              </ul> : ""}
          </div>
          <div className='project-buttons'>
          <a
            href="https://github.com/smile679/Form-backend-only.git"
            target="_blank"
            rel="noopener noreferrer"
          >
          <button className="button3">
            Code on Github</button>
          </a>
        </div>
      </div>
      </div>
    </div>

    <div className='project-card'>
      <h3>Bakery Fullstack app</h3>
      <div className='project-grid'>
        <div className='flex flex-col justify-evenly space-y-3'>
        <img src="https://res.cloudinary.com/dineyc77u/image/upload/v1763417061/bakerFront_xvptpc.jpg" alt="Bakery Front image"/>
        <img src="https://res.cloudinary.com/dineyc77u/image/upload/v1763417091/bakerSecond_owhgcg.jpg" alt="Bakery Listing image"/>
      </div>
      <div className='project-info'>
          <p className='text-[1rem] leading-6 text-white text-pretty my-1'>Bakery Fullstack app is a modern, responsive web application that helps users discover and now order delicious baked goods from around the world. Whether you're in the mood for bread, pastries,
             or something brand new, Bakery Fullstack app lets you search, explore, and order with ease. Build with
            <span className='text-amber-400 font-bold'> JavaScript</span>,
            <span className='text-gray-800 font-bold'> React </span>, and the latest
            <span className='text-sky-400 font-bold'> Tailwind CSS v4. </span>
            <span className='text-gray-800 font-bold'> and React Router </span> it provides a clean and interactive user experience.
          </p>
          <div className='flex flex-col items-start my-2'>
            <div className='w-full flex justify-between'> 
              <h3>🔥 Features</h3>
              <button className='text-[0.8rem] text-emerald-400 font-semibold sm:hidden' onClick={()=>setShowText(prev=>({...prev, foodie:!prev.foodie}))}>{showText.foodie ? "Hide Text" : "Show More"}</button>
            </div>
              { showText.foodie ? <ul className='text-[1.1rem] text-gray-800 font-semibold my-2'>
                <li>🖼️ Clean and responsive bakery card layout</li>
                <li>📄 Detailed bakery pages with ingredients and instructions</li>
                <li>🛒 Add to cart functionality</li>
                <li>🧾 Cart summary and order receipt</li>
                <li>💳 Order and payment simulation (demo)</li>
                <li>🌐 Built with React, Tailwind CSS, and React Router</li>
                <li>📱 Fully responsive design for both desktop and mobile devices</li>
              </ul> : ""}
          </div>
          <div className='project-buttons'>
            <a
            href="https://bakery-full-stack-webisite-front.onrender.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="button px-2 py-2 max-sm:my-3"> Visit Live Website</button>
          </a>
          <a
            href="https://github.com/smile679/Bakery-Full-stack-Webisite.git"
            target="_blank"
            rel="noopener noreferrer"
          >
          <button className="button3">
            Code on Github</button>
          </a>
        </div>
      </div>
      </div>
    </div>
  </section>
}

export default Projects;