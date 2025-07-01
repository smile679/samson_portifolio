import { useState } from "react";
import { Link } from "react-scroll";
import  phone from "../images/phone.png"

const Header=()=>{
const [showMenu, setShowMenu] = useState(false);

  return (
     <header className="wrapper">
      <nav>
        <h2>
        Portfolio<span className="animate-ping">..</span>
        </h2>
        <ul>
          <li>
            <Link activeClass="text-[#45f8b7] border-b-2 pb-0.5" to='Home' spy={true} smooth={true} duration={500} offset={-75}>
              Home
             </Link>
          </li>
          <li>
            <Link activeClass="text-[#45f8b7] border-b-2" to='About' spy={true} smooth={true} duration={500} offset={-75}>
            About
            </Link>
            </li>
          <li>
            <Link activeClass="text-[#45f8b7] border-b-2" to='Service' spy={true} smooth={true} duration={500} offset={-75}>
            Service
            </Link>
          </li>
            <li>
            <Link activeClass="text-[#45f8b7] border-b-2" to='Skills' spy={true} smooth={true} duration={500} offset={-75}>
             Skils
            </Link>
            </li>
        </ul>
        <div className="contact" type="button" onClick={()=>{
       const button = document.getElementById("contact-button");
           button.scrollIntoView({behavior: "smooth"});
        }}
        >
           <img src={phone} alt="contact"/>
           <h3>Contact Me</h3>
        </div>
      </nav>

      <nav className="flex sm:hidden">
        <h2>
        Portfolio<span className="animate-ping pl-2">..</span>
        </h2>
        <button className="cursor-pointer bg-[#3EB489] p-1 rounded-md shadow-emerald-600/50 shadow-lg" onClick={()=>(setShowMenu(!showMenu))}>
          <svg class="w-10 h-10 text-gray-800 dark:text-white hover:text-[#3EB489]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
        <path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M5 7h14M5 12h14M5 17h14"/>
        </svg>
        </button>

        <ul className=" center  text-2xl font-extralight absolute top-18 -right-5 z-2 bg-[#0c0c0cdc] rounded-b-lg"
          style={{display: showMenu ? "flex" : "none"}}>
          <li className="nav-list">
            <Link activeClass="text-[#45f8b7] font-bold bg-[#1c2020f8] border-b-2 " to='Home' spy={true} smooth={true} duration={500} offset={-70}
              onClick={()=>(setShowMenu(false))}>
              Home
             </Link>
          </li>
          <li className="nav-list">
            <Link activeClass="text-[#45f8b7] font-bold" to='About' spy={true} smooth={true} duration={500} offset={-70}
            onClick={()=>(setShowMenu(false))} >
            About
            </Link>
            </li>
          <li className="nav-list">
            <Link activeClass="text-[#45f8b7] font-bold" to='Service' spy={true} smooth={true} duration={500} offset={-100}
            onClick={()=>(setShowMenu(false))}>
            Service
            </Link>
            </li>
          <li className="nav-list">
            <Link activeClass="text-[#45f8b7] font-bold" to='Skills' spy={true} smooth={true} duration={500} offset={-100}
            onClick={()=>(setShowMenu(false))}>
            Skills
            </Link>
            </li>
          <li className="nav-list"
          onClick={()=>{
       const button = document.getElementById("contact-button");
           button.scrollIntoView({behavior: "smooth"});
        }}
        >
           Contact me
            </li>
        </ul>
      </nav> 
    </header>
  )
}

export default Header;





 