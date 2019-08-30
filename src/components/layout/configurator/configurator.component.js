import React, { useEffect, useState } from "react"
import Calculator from './calculator/calculator.component'
import './configurator.styles.css'

const Configurator = () => {
  const [data, setData] = useState(null)

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/Bernabe-Felix/Bellotero/master/page2.json"
    )
      .then(res => res.json())
      
      .then(setData);
  }, [])

   return (
     <React.Fragment>
       {data ?
       <>
         <div className="configurator-grid">
           <div className="configurator-title">
             <h1>{data.calculator.title}</h1>
             <div className="configurator-text">
               <p>{data.calculator.description}</p>
             </div>
           </div>
           <Calculator className="configurator-calculator" />
         </div>
       </>
       : <p>Loading...</p>}
     </React.Fragment>
   );
}

export default Configurator