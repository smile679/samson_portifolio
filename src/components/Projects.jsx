import portfolio from '../images/projectImages/portfolio.jpg'
import movieScope from '../images/projectImages/movieScope.jpg'
import foodie from '../images/projectImages/foodie.jpg'

const Projects = ()=>{

  return <section className='max-w-6xl mx-auto min-h-screen flex flex-col py-20 px-5 text-center' id='projectId'>
    <h1 className='my-5 text-shadow-gray-800 text-shadow-lg'>Projects</h1>
    <div className='project-card'>
      <img src={portfolio} alt="portfolio image"/>
      <div className='project-info'>
        <h3>Portfolio</h3>
          <p className='text-[13px] leading-5 text-white'>I built this portfolio website entirely from scratch
            starting with the design and transforming it into a fully functional site. The project is developed using 
            <span className='text-amber-400 font-bold'> JavaScript</span>, 
            <span className='text-gray-800 font-bold'> React </span>, and the latest <span className='text-sky-400 font-bold'> Tailwind CSS v4. </span><span className='hidden sm:flex'> It includes a clean Home page, an About section, 
            a detailed Skills section, and a fully functional Contact form.</span>
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

    <div className='project-card'>
      <img src={ movieScope } alt="Movie-Scope App image"/>
      <div className='project-info'>
        <h3>Movie Scope App</h3>
          <p className='text-[13px] leading-5 text-white text-pretty'>MovieScope is a modern and responsive web application that allows users to browse, search, 
            and discover movies from a wide selection of genres. The project is developed using 
            <span className='text-amber-400 font-bold'> JavaScript</span>, 
            <span className='text-gray-800 font-bold'> React </span>, and the latest 
            <span className='text-sky-400 font-bold'> Tailwind CSS v4. </span>
            <span className='text-gray-800 font-bold'> and React Router </span> it provides a clean and interactive user experience.
          </p>
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

    <div className='project-card'>
      <img src={ foodie } alt="Foodie Delight image"/>
      <div className='project-info'>
        <h3>Foodie Delight App</h3>
          <p className='text-[13px] leading-5 text-white text-pretty'>MovieScope is a modern and responsive web application that allows users to browse, search, 
            and discover movies from a wide selection of genres. The project is developed using 
            <span className='text-amber-400 font-bold'> JavaScript</span>, 
            <span className='text-gray-800 font-bold'> React </span>, and the latest
            <span className='text-sky-400 font-bold'> Tailwind CSS v4. </span>
            <span className='text-gray-800 font-bold'> and React Router </span> it provides a clean and interactive user experience.
          </p>
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
  </section>
}

export default Projects;