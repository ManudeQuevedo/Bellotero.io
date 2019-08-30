import React, { useState, useEffect } from 'react'
import { connect } from "react-redux"
import { getData } from "../../../redux/actions/actions"
import { MENU_LOADED } from "../../../redux/constants/constants"
import { NavLink } from 'react-router-dom'
import './navbar.styles.css'


const Navbar = () => {
   const [data, setData] = useState(null);

   useEffect(() => {
     fetch(
       "https://raw.githubusercontent.com/Bernabe-Felix/Bellotero/master/app.json"
     )
       .then(res => res.json())

       .then(setData);
   }, []);
   return (
      <React.Fragment>
         <nav className="navbar-grid">
            <div className="navbar-wrapper">
               <div className="navbar-logo" />
               <div className="navbar-items">
                  <NavLink to="/stories">Testimonial</NavLink>
                  <NavLink to="/solutions">Configurators</NavLink>
                  <NavLink to="/partners">Stories</NavLink>
                  <NavLink to="/about">About</NavLink>
               </div>
            </div>
         </nav>
      </React.Fragment>
   )
}

export default Navbar