import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Home from './components/Home'
import Projects from './components/Projects'

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={ <Home/> } />
        <Route path='/projects' element={ <Projects/> } />
      </Routes>
    </BrowserRouter>
  )
}

export default App
