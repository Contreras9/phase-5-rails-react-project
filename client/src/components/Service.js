import { Link } from "react-router-dom";


function Service() {
   return(
      <>
      <section id="aa-service">
         <div className="container">
            <div className="row">
            <div className="col-md-12">
               <div className="aa-service-area">
                  <div className="aa-title">
                  <h2>Our Service</h2>
                  <span></span>
                  <p>Looking to Buy or Rent? We have you covered.</p>
                  </div>
            
                  <div className="aa-service-content">
                  <div className="row">
                     <div className="col-md-5">
                        <div className="aa-single-service">
                        <div className="aa-service-icon">
                           <span className="fa fa-home"></span>
                        </div>
                        <div className="aa-single-service-content">
                           <h4><Link to="/properties/1/">Property Sale</Link></h4>
                           <p>Find the right Home for you.</p>
                        </div>
                        </div>
                     </div>
                     <div className="col-md-7">
                        <div className="aa-single-service">
                        <div className="aa-service-icon">
                           <span className="fa fa-check"></span>
                        </div>
                        <div className="aa-single-service-content">
                           <h4><Link to="/properties/2/">Property Rent</Link></h4>
                           <p>Thousands of options to choose from.</p>
                        </div>
                        </div>
                     </div>
                  </div>
                  </div>
               </div>
            </div>
            </div>
         </div>
      </section>

      <section id="aa-promo-banner">
         <div className="container">
            <div className="row">
            <div className="col-md-12">
               <div className="aa-promo-banner-area">
                  <h3>Find Your Best Property</h3>
                  <p></p>
                  <a href="/" className="aa-view-btn">View Details</a>
               </div>
            </div>
            </div>
         </div>
      </section>
      </>
   )
}

export default Service;