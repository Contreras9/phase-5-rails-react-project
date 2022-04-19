import React, {useEffect, useState} from 'react'


function PropertyList() {

   const [propertyResults, setPropertyResults] = useState([])

   function searchQuiry(location) {

      fetch("http://localhost:4001/search", {
         method:"POST",
         headers: {"Content-Type": "application/json"
         },
         body:JSON.stringify({location: '', property_type: 0})
      })
      .then(res => res.json())
      .then(res => {
         setPropertyResults(res.slice(0,6))
      })
   }

   useEffect(() => {
      searchQuiry()
   }, [])




   return(
      <>
      <section id="aa-latest-property">
         <div className="container">
            <div className="aa-latest-property-area">
            <div className="aa-title">
               <h2>Latest Properties</h2>
               <span></span>
               <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum sit ea nobis quae vero voluptatibus.</p>         
            </div>
            <div className="aa-latest-properties-content">
               
               <div className="row">
               {propertyResults.map(house => 
                  <div className="col-md-4">
                  <article className="aa-properties-item">
                     <a href="#" className="aa-properties-item-img">
                        <img src="img/item/1.jpg" alt="img"/>
                     </a>
                     <div className="aa-tag for-sale">
                        For Sale
                     </div>
                     <div className="aa-properties-item-content">
                        <div className="aa-properties-info">
                        <span>5 Rooms</span>
                        <span>2 Beds</span>
                        <span>3 Baths</span>
                        <span>1100 SQ FT</span>
                        </div>
                        <div className="aa-properties-about">
                        <h3><a href="#">Appartment Title</a></h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim molestiae vero ducimus quibusdam odit vitae.</p>                      
                        </div>
                        <div className="aa-properties-detial">
                        <span className="aa-price">
                           $35000
                        </span>
                        <a href="#" className="aa-secondary-btn">View Details</a>
                        </div>
                     </div>
                  </article>
                  </div>
                  )}
      
               </div>
            </div>
            </div>
         </div>
      </section>
      </>
   )
}

export default PropertyList;