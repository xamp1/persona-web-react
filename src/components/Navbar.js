import React from 'react'
import './Style.css';
// import { NavLink } from "react-router-dom";

export const Navbar = () => {
  // const [isOpen, setOpen] = useState(false);
  return (
    <>
      <header>
        <div className="container">
          <div id="branding">
            <h1><span className="highlight">Personal Website</span> | Ath Thaariq Adz Zyad</h1>
          </div>
          <nav>
            <ul>
              <li className="current"><a href="index.html">Home</a></li>
              <li><a href="about.html">About</a></li>
              <li><a href="skills.html">Skills</a></li>
              <li><a href="blogs.html">Blogs</a></li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  )
}

export default Navbar;