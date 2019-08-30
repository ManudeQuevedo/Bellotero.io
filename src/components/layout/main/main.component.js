import React, {useState, useEffect } from 'react'
import './main.styles.css'
import Testimonials from '../testimonialCarousel/testimonials.component'

const Main = () => {
  const [data, setData] = useState(null)

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/Bernabe-Felix/Bellotero/master/page1.json"
    )
      .then(res => res.json())

      .then(setData)
  }, [])
   return (
     <React.Fragment>
       {data ? (
         <div className="main-grid">
           <div className="main-title">
             <h1>{data.slider.title}</h1>
           </div>
           <Testimonials />
         </div>
       ) : (
         <p>Loading...</p>
       )}
     </React.Fragment>
   );
}

export default Main