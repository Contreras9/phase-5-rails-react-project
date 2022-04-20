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
                   
            </div>
            <div className="aa-latest-properties-content">
               
               <div className="row">
               {propertyResults.map(house => 
                  <div className="col-md-4">
                  <article className="aa-properties-item">
                     <a href="#" className="aa-properties-item-img">
                        <img src={house.photo} />
                     </a>
                     <div className="aa-tag for-sale">
                        {house.home_status}
                     </div>
                     <div className="aa-properties-item-content">
                        <div className="aa-properties-info">
                        <span>{house.rooms} rooms</span>
                        <span>{house.bathrooms} bath(s)</span>
                        <span>{house.sqft} sqft</span>-
                        <span>{house.property_status}</span>
                        </div>
                        <div className="aa-properties-about">
                        <h3>{house.price}</h3>
                        <span>{house.address}</span>,
                        <span> {house.city}</span>,
                        <span> {house.state}</span>
                        <span> {house.zipcode}</span>

                        </div>
                        <div className="aa-properties-detial">
                        <span className="aa-price">
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