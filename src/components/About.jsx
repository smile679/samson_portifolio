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
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 md:mt-10 gap-5">
        <Reveal>
          <div className="w-full">
            <p className="text-md text-gray-900 text-shadow-lg leading-relaxed max-md:text-center">
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
          <div className="flex flex-col gap-y-4">
            {
              aboutSkills && aboutSkills.map(skill=>(
                <div className="w-full max-w-lg flex items-center shadow-inner shadow-dark-100 rounded-lg p-2">
                  <div className="w-13 h-13 flex justify-center items-center rounded-lg shadow-inner shadow-dark-100 px-2">
                    {skill.icon}
                  </div>
                  <div className="flex flex-col justify-start items-start ml-5">
                    <h3>{skill.title}</h3>
                    <p className="text-sm text-gray-900 text-shadow-lg leading-relaxed py-2">{skill.skills}</p>
                  </div>
                </div>
              ))
            }
          </div>
        </Reveal>
      </div>
      <svg class="absolute -bottom-13 left-0 w-full h-15 " viewBox="0 0 100 100" preserveAspectRatio="none">
        <path d="M0,0 L110,0C35,150 35,0 0,100z" fill="#059669"></path>
      </svg>
    </section>
  );
};

export default About;
