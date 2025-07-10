import Hero from "./Hero";
import About from './About'
import Services from './Services'
import Skills from './Skills'
import ContactMe from './ContactMe'

const Home =()=> {
    
  return <section className="home">
    <Hero/>
    <About/>
    <Services/>
    <Skills/>
    <ContactMe/>
  </section>
}

export default Home; 