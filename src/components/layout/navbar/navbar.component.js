import React from 'react'
import { Link } from 'react-router-dom'
import './navbar.styles.css'


const Navbar = () => {
   return (
      <React.Fragment>
         <nav className="navbar-grid">
            <div className="navbar-wrapper">
               <div className="navbar-logo" />
               <div className="navbar-items">
                  <Link to="/">Home</Link>
                  <Link to="/solutions">Solutions</Link>
                  <Link to="/stories">Stories</Link>
                  <Link to="/partners">Partners</Link>
                  <Link to="/about">About</Link>
                  <Link to="/blog">Blog</Link>
               </div>
            </div>
         </nav>
      </React.Fragment>
   )
}

export default Navbar