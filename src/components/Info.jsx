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
         <h2 className='text-[#3EB489] font-bold -tracking-tighter flex justify-items-center-safe'>
          <span className='text-gray-500 mr-3'>I'M</span>FRONTEND DEV.
          </h2>
        </div>
        <div className='text-center w-1/1'>
          <p className='para'>" I focus on building clean,responsive,and user-friendly websites "</p>
        </div>
        <div className='flex items-center flex-col-reverse sm:flex-row md:ml-5'>
          <button className='button text-nowrap my-5 sm:mx-5'>Lets's talk</button>
          <div className='flex justify-center'>
              <a href="https://t.me/sami_gra"><img src={ tg } alt="link" className="icons"/></a>
              <a href="https://wa.me/251943712048" target='_blank'><img src={ whatsapp } alt="link" className="icons"/></a>
              <a href="https://instagram.com/samison_gidey"><img src={ instagram } alt="link" className="icons"/></a>
              <a href="https://www.linkedin.com/in/samson-gidey-b5a905303" target='_blank' rel="noopener noreferrer"><img src={ linkedin } alt="linkedin" className="icons"/></a>
              <a href="https://www.behance.net/samuelgidey1" target='_blank'><img src={ behance } alt="link" className="icons pt-2"/></a>
              <a href="https://github.com/smile679" target='_blank'><img src={ github } alt="link" className="icons"/></a>
          </div>
          </div>
      </div>
  )
}

export default Info;

