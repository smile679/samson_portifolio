import Reveal from '../Animations/Reveal'
const About = ()=>{

  return <section className="about" name="About">
    <Reveal>
    <h1>About Me</h1>
    </Reveal>
    <Reveal>
    <p>
    I'm a passionate <span class="font-semibold text-amber-50">Frontend Developer</span> and 
    <span class="font-semibold text-amber-50"> Graphic Designer</span> with a strong background in 
    <span class="font-medium text-amber-50"> HTML, CSS, JavaScript, React, Tailwindcss</span>, and the 
    <span class="font-medium text-amber-50">Adobe Creative Suite</span>. I specialize in building 
    responsive, user-friendly web interfaces and designing visually compelling digital content. 
    With experience in tools like Figma, Illustrator, and Photoshop, I enjoy combining creativity 
    with technical skills to craft engaging digital experiences. I'm always eager to learn new 
    frameworks, keep up with design trends, and bring fresh ideas to every project I work on.
  </p>
    </Reveal>
    <Reveal>
  <div className='lang-hobbies'>
          <div className='language'>
            <div className='lang'>
              <svg data-slot="icon" fill="none" stroke-width="2.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="m10.5 21 5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 0 1 6-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 0 1-3.827-5.802"></path>
              </svg>
              <h3>LANGUAGE</h3>
                </div>
              <ul>
                <li>English</li>
                <li>Amharic</li>
                <li>Tigrigna</li>
              </ul>
          </div>
          <div className='center'>
             <div className='hobbies'>
               <svg data-slot="icon" fill="none" stroke-width="2.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
               <path stroke-linecap="round" stroke-linejoin="round" d="M3 3v1.5M3 21v-6m0 0 2.77-.693a9 9 0 0 1 6.208.682l.108.054a9 9 0 0 0 6.086.71l3.114-.732a48.524 48.524 0 0 1-.005-10.499l-3.11.732a9 9 0 0 1-6.085-.711l-.108-.054a9 9 0 0 0-6.208-.682L3 4.5M3 15V4.5"></path>
               </svg>
               <h3>HOBBIES</h3>
             </div>
             <ul>
              <li>Designing</li>
              <li>Coding</li>
              <li>Traveling</li>
          </ul>
          </div>
        </div>
        </Reveal>
  </section>
}

export default About;