import computer from '../images/computer.png'
import html from '../images/html.png'
import css3 from '../images/css3.png'
import javascript from '../images/javascript.png'
import Ps from '../images/Ps.png'
import Ai from '../images/Ai.png'
import Pr from '../images/Pr.png'
import Reveal from '../Animations/Reveal'

const Skills = ()=>{

  return (
    <section className='skills' name="Skills">
      <Reveal>
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
          <div className='py-2 xs:pb-10'>
            <h2>Tech Skills:</h2>
          <ul>
          <li>HTML5</li>
          <li>CSS3</li>
          <li>Javascript</li>
          <li>React</li>
          <li>Tailwind CSS</li>
          <li>Bootstrap</li>
        </ul>
        <div className='flex py-5 lg:gap-x-10 max-xs:-ml-2'>
          <img src={ html } alt="html icon" className="icons w-25 xs:w-30 drop-shadow-red-600 drop-shadow-lg"/>
          <img src={ javascript } alt="css icon" className="icons w-25 xs:w-33 drop-shadow-amber-500 drop-shadow-lg"/>
          <img src={ css3 } alt="css icon" className="icons w-17 xs:w-20 drop-shadow-blue-700 drop-shadow-lg"/>
        </div>
          </div>
          </Reveal>
          <Reveal>
          <div className='pb-2 md:pb-5'>
            <h2>Design Skills:</h2>
        <ul>
          <li>Adobe Photoshop</li>
          <li>Adobe Illustrator</li>
          <li className="text-nowrap">Adobe Primere Pro</li>
        </ul>
        <div className='flex py-5 md:gap-x-10 max-xs:-ml-2'>
          <img src={ Ps } alt="html icon" className="icons w-25 xs:w-30 drop-shadow-cyan-500 drop-shadow-2xl"/>
          <img src={ Ai } alt="css icon" className="icons w-25 xs:w-30 drop-shadow-amber-500 drop-shadow-xl"/>
          <img src={ Pr } alt="css icon" className="icons w-25 xs:w-30 drop-shadow-fuchsia-500 drop-shadow-xl"/>
        </div>
          </div>
          </Reveal>
        </div>
        <div className='center comp-img'>
          <Reveal>
          <img src={ computer } alt="computer"/>
          </Reveal>
        </div>
      </div>
    </section>
  )
}


export default Skills;