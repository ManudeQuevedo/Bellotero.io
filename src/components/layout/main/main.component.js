import React from 'react'
import './main.styles.css'
import Testimonials from '../testimonialCarousel/testimonials.component'

const Main = () => {
   return (
     <React.Fragment>
       <div className="main-grid">
         <div className="main-title">
           <h1>Our customers love us</h1>
         </div>
         <Testimonials />
       </div>
     </React.Fragment>
   );
}

export default Main