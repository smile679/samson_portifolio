import computer from '../images/computer.png'
import html from '../images/html.png'
import css3 from '../images/css3.png'
import javascript from '../images/javascript.png'
import Ps from '../images/Ps.png'
import Ai from '../images/Ai.png'
import Pr from '../images/Pr.png'

const Skills = ()=>{

  return (
    <section className='skills' name="Skills">
      <h1>Skills</h1>
      <div className="skills-grid">
        <div className="ul-grid">
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
        </div>
        <div className='center'>
          <img src={ computer } alt="computer"/>
        </div>
      </div>
    </section>
  )
}


export default Skills;