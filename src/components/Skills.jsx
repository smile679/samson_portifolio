import manInFront from '../images/manInFront.png'
import manWithComp from '../images/manWithComp.png'
import html33 from '../images/html33.png'
import react from '../images/react.png'
import tailwindcss from '../images/tailwindcss.png'
import Ps from '../images/Ps.png'
import Ai from '../images/Ai.png'
import Pr from '../images/Pr.png'
import Reveal from '../Animations/Reveal'
import RevealX from '../Animations/RevealX'

const Skills = ()=>{

  return (
    <section className='skills' name="Skills">
      <Reveal>
       <svg class="absolute -top-8 left-0 w-full h-10 rotate-180" viewBox="0 0 100 100" preserveAspectRatio="none">
        <path d="M0,0 L110,0C35,150 35,0 0,100z" fill="#059669"></path>
      </svg>
      <div className='skills-header'>
        <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="none" viewBox="0 0 24 24">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m7.171 12.906-2.153 6.411 2.672-.89 1.568 2.34 1.825-5.183m5.73-2.678 2.154 6.411-2.673-.89-1.568 2.34-1.825-5.183M9.165 4.3c.58.068 1.153-.17 1.515-.628a1.681 1.681 0 0 1 2.64 0 1.68 1.68 0 0 0 1.515.628 1.681 1.681 0 0 1 1.866 1.866c-.068.58.17 1.154.628 1.516a1.681 1.681 0 0 1 0 2.639 1.682 1.682 0 0 0-.628 1.515 1.681 1.681 0 0 1-1.866 1.866 1.681 1.681 0 0 0-1.516.628 1.681 1.681 0 0 1-2.639 0 1.681 1.681 0 0 0-1.515-.628 1.681 1.681 0 0 1-1.867-1.866 1.681 1.681 0 0 0-.627-1.515 1.681 1.681 0 0 1 0-2.64c.458-.361.696-.935.627-1.515A1.681 1.681 0 0 1 9.165 4.3ZM14 9a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"/>
        </svg>
      <h1>Skills</h1>
      </div>
      </Reveal>
      <div className="skills-grid">
        <div className="ul-grid">
          <Reveal>
        <div className='py-2 xs:pb-5 mb-10 p-5 sm:pl-8 rounded-lg shadow-inner shadow-dark-100 overflow-x-hidden'>
          <h2>Tech Skills:</h2>
          <ul>
            <li>HTML/CSS</li>
            <li>Tailwind</li>
            <li>Javascript</li>
            <li>React</li>
            <li>MongoDB</li>
            <li>NodeJs</li>
            <li>ExpressJs</li>
            <li>RestAPI</li>
          </ul>
        <div className='flex justify-evenly md:justify-center lg:justify-evenly py-5 max-xs:-ml-2'>
          <img src={ html33 } alt="html icon" className="w-30 xs:w-60 md:w-40 lg:w-60 drop-shadow-green-800 drop-shadow-sm object-cover"/>
          <img src={ react } alt="react icon" className="w-10 xs:w-20 md:w-15 lg:w-20 drop-shadow-sky-500 drop-shadow-sm object-cover"/>
          <img src={ tailwindcss } alt="react icon" className="w-10 xs:w-20 md:w-15 lg:w-20 object-cover"/>
        </div>
        </div>
          </Reveal>
          <Reveal>
          <div className='py-5 px-5 md:pb-5 rounded-lg shadow-inner shadow-dark-100 box-border overflow-x-hidden'>
            <h2>Design Skills:</h2>
            <ul className='grid grid-cols-1 sm:grid-cols-2'>
              <li>Photoshop</li>
              <li>A. Illustrator</li>
              <li className="text-nowrap">A. Primere Pro</li>
              <li className="text-nowrap">Figma</li>
            </ul>
        <div className='grid grid-cols-3 py-5 md:gap-x-2 max-xs:-ml-2'>
          <img src={ Ps } alt="Pr icon" className=" drop-shadow-cyan-500 drop-shadow-lg"/>
          <img src={ Ai } alt="Ai icon" className=" drop-shadow-amber-500 drop-shadow-lg"/>
          <img src={ Pr } alt="pr icon" className=" drop-shadow-fuchsia-500 drop-shadow-lg"/>
        </div>
          </div>
          </Reveal>
        </div>
        <div className='comp-img w-full flex flex-col justify-evenly max-md:my-10 '>
          <RevealX>
            <img src={ manInFront } alt="computer" className='hidden md:flex'/>
          </RevealX>
          <RevealX>
            <img src={ manWithComp } alt="computer"/>
          </RevealX>
        </div>
      </div>
    </section>
  )
}


export default Skills;