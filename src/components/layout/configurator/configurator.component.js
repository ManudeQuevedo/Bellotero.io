import React from "react";
import './configurator.styles.css'

const Configurator = () => {
   return (
     <React.Fragment>
       <div className="configurator-grid">
         <div className="configurator-title">
           <h1>Save more with</h1>
           <h1>Bellotero.io</h1>
           <div className="configurator-text">
             <p>
               With Bellotero.io you save time and money make real-time
               decisions that boost your business and your bottom line. Get less
               wrongfully blocked payments, save time on bookkeeping and no need
               to worry about safety.
             </p>
           </div>
         </div>
       </div>
     </React.Fragment>
   );
}

export default Configurator