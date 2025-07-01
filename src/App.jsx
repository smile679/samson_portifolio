import './App.css'
import Header from './components/Header'
import Home from './components/Home'
import About from './components/About'
import Services from './components/Services'
import Skills from './components/Skills'
import ContactMe from './components/ContactMe'


function App() {
  return (
     <main>
      <Header/>
       <Home/>
       <About/>
       <Services/>
       <Skills/>
       <ContactMe/>
     </main>
  )
}

export default App
