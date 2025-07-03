import linkedin from '../images/linkedin.png'
import behance from '../images/behance.png'
import tg from '../images/tg.png'
import whatsapp from '../images/whatsapp.png'
import instagram from '../images/instagram.png'
import github from '../images/github.png'

const Info = () =>{

  return (
     <div className='info'>
        <div className='flex flex-col max-md-items-center md:pl-10'>
           <h1 className='flex flex-col sm:flex-row text-shadow-white text-shadow-2xs'>
            <span className="text-nowrap"> SAMSON GIDEY</span>
          </h1>
         <h2 className='text-emerald-500 font-bold -tracking-tighter flex justify-items-center-safe'>
          <span className='text-gray-400 mr-3'>I'M</span>FRONTEND DEV.
          </h2>
        </div>
        <div className='text-center w-1/1'>
          <p className='para'>" I focus on building clean, responsive, and user-friendly websites"</p>
        </div>
        <div className='flex flex-col-reverse'>
          <div className='relative my-5 sm:ml-20 flex'>
            <button className='button mr-5 xs:mr-10' onClick={()=>{
       const button = document.getElementById("contact-button");
           button.scrollIntoView({behavior: "smooth"});
        }}>
              Let's talk</button>
            <button className='button2' onClick={()=>{alert("Coming Soon")}}>Download CV</button>
          </div>
          <div className='flex justify-evenly'>
              <a href="https://t.me/sami_gra" target='_blank'><img src={ tg } alt="link" className="icons hover:drop-shadow-sky-500"/></a>
              <a href="https://wa.me/251943712048" target='_blank'><img src={ whatsapp } alt="link" className="icons hover:drop-shadow-green-500"/></a>
              <a href="https://instagram.com/samison_gidey" target='_blank'><img src={ instagram } alt="link" className="icons hover:drop-shadow-pink-500"/></a>
              <a href="https://www.linkedin.com/in/samson-gidey-b5a905303" target='_blank' rel="noopener noreferrer"><img src={ linkedin } alt="linkedin" className="icons hover:drop-shadow-sky-500"/></a>
              <a href="https://www.behance.net/samuelgidey1" target='_blank'><img src={ behance } alt="link" className="icons pt-2 hover:drop-shadow-blue-500"/></a>
              <a href="https://github.com/smile679" target='_blank'><img src={ github } alt="link" className="icons hover:drop-shadow-black"/></a>
          </div>
          </div>
      </div>
  )
}

export default Info;

