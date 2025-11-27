import Hero from "./Hero";
import About from './About'
import Services from './Services'
import Skills from './Skills'
import ContactMe from './ContactMe'
import Header from './Header'
import GeminiChatbot from "../geminiChatbot/GeminiChatBot";

const Home =()=> {
    
  return <section className="home">
    <Header/>
    <Hero/>
    <About/>
    <Services/>
    <Skills/>
    <ContactMe/>
    <GeminiChatbot />
  </section>
}

export default Home; 