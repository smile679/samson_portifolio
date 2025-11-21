import { ChevronsLeftRight, Database, Focus, Globe } from "lucide-react";
import Reveal from "../Animations/Reveal";


const About = () => {
  const aboutSkills = [{
    icon : <ChevronsLeftRight />,
    title : "Frontend Expert",
    skills : "HTML, CSS, Js ,React,Taiwind CSs and other modern CSS framworks",
  },
  {
    icon : <Database />,
    title : "Bakend Mastery",
    skills : "NodeJS, ExpressJs, MongoDb, and API architecture",
  },
  {
    icon : <Globe />,
    title : "Full-Stack Development",
    skills : "End-to-end application development and deployment",
  },
  {
    icon: <Focus />,
    title: "Performance Focuse",
    skills : "Optimaized, scalable, and maintainable solutions",
  },
]

  return (
    <section className="about" name="About">
      <svg class="absolute -top-13 left-0 w-full h-15 rotate-180" viewBox="0 0 100 100" preserveAspectRatio="none">
        <path d="M0,0 L110,0C35,150 35,0 0,100z" fill="#059669"></path>
      </svg>
      <Reveal>
        <h1>About Me</h1>
      </Reveal>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 mt-10 gap-5">
        <Reveal>
          <div className="w-full flex justify-center items-center">
            <p className="text-center">
                I'm a passionate <span className="font-semibold text-amber-50">  Full-Stack Developer </span> and Graphic Designer with a
              strong foundation in <span class="font-semibold text-amber-50">HTML, CSS, JavaScript, React, Tailwind CSS,
              Node.js, Express, and MongoDB </span>. I specialize in building responsive,
              user friendly web applications from intuitive frontend interfaces to
              robust backend systems. With experience in tools like Figma,
              Illustrator, and Photoshop, I combine creativity with technical
              expertise to craft visually compelling and high-performing digital
              experiences. I enjoy solving problems end-to-end, optimizing both
              UI/UX and backend functionality. I'm always eager to learn new
              technologies, stay updated with the latest design and development
              trends, and bring fresh, innovative ideas to every project I work on.
              </p>
          </div>
        </Reveal>
        <Reveal>
          <div className="flex flex-col gap-y-2">
            {
              aboutSkills && aboutSkills.map(skill=>(
                <div className="max-w-lg m-auto flex justify-between items-center shadow-inner shadow-dark-100 rounded-lg p-2">
                  <div className="w-13 h-13 flex justify-center items-center rounded-lg">
                    {skill.icon}
                  </div>
                  <div className="flex flex-col items-start ml-5">
                    <h3>{skill.title}</h3>
                    <p>{skill.skills}</p>
                  </div>
                </div>
              ))
            }
          </div>
          {/* <div className="lang-hobbies">
            <div className="language">
              <div className="lang">
                <svg
                  data-slot="icon"
                  fill="none"
                  stroke-width="2.5"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="m10.5 21 5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 0 1 6-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 0 1-3.827-5.802"
                  ></path>
                </svg>
                <h3>LANGUAGE</h3>
              </div>
              <ul>
                <li>English</li>
                <li>Amharic</li>
                <li>Tigrigna</li>
              </ul>
            </div>
            <div className="w-full center py-7 xs:py-8 md:py-10 rounded-2xl shadow-inner shadow-dark-100 px-3">
              <div className="hobbies">
                <svg
                  data-slot="icon"
                  fill="none"
                  stroke-width="2.5"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M3 3v1.5M3 21v-6m0 0 2.77-.693a9 9 0 0 1 6.208.682l.108.054a9 9 0 0 0 6.086.71l3.114-.732a48.524 48.524 0 0 1-.005-10.499l-3.11.732a9 9 0 0 1-6.085-.711l-.108-.054a9 9 0 0 0-6.208-.682L3 4.5M3 15V4.5"
                  ></path>
                </svg>
                <h3>HOBBIES</h3>
              </div>
              <ul>
                <li>Designing</li>
                <li>Coding</li>
                <li>Traveling</li>
              </ul>
            </div>
          </div> */}
        </Reveal>
      </div>
      <svg class="absolute -bottom-13 left-0 w-full h-15 " viewBox="0 0 100 100" preserveAspectRatio="none">
        <path d="M0,0 L110,0C35,150 35,0 0,100z" fill="#059669"></path>
      </svg>
    </section>
  );
};

export default About;
