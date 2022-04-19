import React, {useEffect, useState} from 'react';
import Navbar from './Navbar';
import Footer from './Footer'
import Map from './Map'
import { useParams } from 'react-router-dom';

function PropertyDetails() {

   const [details, setDetails] = useState(null)
   const {id} = useParams()

   useEffect(() => {
      fetch(`http://localhost:4001/details/${id}`, {
       method:"GET",
       headers: {
          "Content-Type": "application/json"
       }
    })
    .then(res => res.json())
    .then(res => {
         setDetails(res)
         console.log(res)
    })
   }, [])

   if (!details) return "Loading "

   return (
      <>
      <Navbar />
      
       <section id="aa-property-header">
         <div className="container">
            <div className="row">
            <div className="col-md-12">
               <div className="aa-property-header-inner">
                  <h2>Properties Details</h2>
                  <ol className="breadcrumb">
                  <li><a href="/">HOME</a></li>            
                  <li className="active">APPARTMENT TITLE</li>
               </ol>
               </div>
            </div>
            </div>
         </div>
      </section> 
      


      <section id="aa-properties">
         <div className="container">
            <div className="row">
            <div className="col-md-8">
               <div className="aa-properties-content">            
         
                  <div className="aa-properties-details">
                  <div className="aa-properties-details-img">
                     <img src="img/slider/1.jpg" alt="img" />
                     <img src="img/slider/2.jpg" alt="img" />
                     <img src="img/slider/3.jpg" alt="img" />
                  </div>
                  <div className="aa-properties-info">
                     <h2>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex, alias!</h2>
                     <span className="aa-price">{8}</span>
                     <div class="dp_form">

                     <h4>Propery Features</h4>
                        <div class="features_cols">
                           <div class="info_icons">
                                 <img src="https://content.harstatic.com/resources/images/listing_details/beds.png" alt='features-icons' />
                                 <span>{details.rooms} Bed(s)</span>
                           </div>
                                    <div class="info_icons">
                                 <img src="https://content.harstatic.com/resources/images/listing_details/baths.png" alt='features-icons' />
                                 <span>{details.bathrooms} Full Bath(s)</span>
                           </div>
                                    <div class="info_icons">
                                 <img src="https://content.harstatic.com/resources/images/listing_details/built.png" alt='features-icons' />
                                 <span>{details.sqft} Sqft. </span>
                           </div>
                                             <div class="info_icons">
                                 <img src="https://content.harstatic.com/resources/images/listing_details/map.png" alt='features-icons' />
                                 <span>15,633 Lot Sqft.</span>
                           </div>
                                    <div class="info_icons">
                                 <img src="https://content.harstatic.com/resources/images/listing_details/single_family.png" alt='features-icons' />
                                 <span></span>
                           </div>
                           <div class="clearfix"></div>

                        </div>
                        </div>
                     <h4>Property Map</h4>
                     <Map address={details.address} lat={details.lat} lng={details.lng} />
                  </div>
               
                  <div className="aa-properties-social">
                     <ul>
                     <li>Share</li>
                     <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                     <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                     <li><a href="#"><i className="fa fa-google-plus"></i></a></li>
                     <li><a href="#"><i className="fa fa-pinterest"></i></a></li>
                     </ul>
                  </div>
                  

                  </div>           
               </div>
            </div>
         
            <div className="col-md-4">
               <aside className="aa-properties-sidebar">
               
                  <div className="aa-properties-single-sidebar">
                  <h3>Properties Search</h3>
                  <form action="">
                     <div className="aa-single-advance-search">
                        <input type="text" placeholder="Type Your Location" />
                     </div>
                     <div className="aa-single-advance-search">
                        <select id="" name="">
                        <option selected="" value="0">Category</option>
                        <option value="1">Flat</option>
                        <option value="2">Land</option>
                        <option value="3">Plot</option>
                        <option value="4">Commercial</option>
                        </select>
                     </div>
                     <div className="aa-single-advance-search">
                        <select id="" name="">
                        <option selected="" value="0">Type</option>
                        <option value="1">Flat</option>
                        <option value="2">Land</option>
                        <option value="3">Plot</option>
                        <option value="4">Commercial</option>
                        </select>
                     </div>
                     <div className="aa-single-advance-search">
                        <select id="" name="">
                        <option selected="" value="0">Type</option>
                        <option value="1">Flat</option>
                        <option value="2">Land</option>
                        <option value="3">Plot</option>
                        <option value="4">Commercial</option>
                        </select>
                     </div>
                     <div className="aa-single-filter-search">
                        <span>AREA (SQ)</span>
                        <span>FROM</span>
                        <span id="skip-value-lower" className="example-val">30.00</span>
                        <span>TO</span>
                        <span id="skip-value-upper" className="example-val">100.00</span>
                        <div id="aa-sqrfeet-range" className="noUi-target noUi-ltr noUi-horizontal noUi-background">
                        </div>                  
                     </div>
                     <div className="aa-single-filter-search">
                        <span>PRICE ($)</span>
                        <span>FROM</span>
                        <span id="skip-value-lower2" className="example-val">30.00</span>
                        <span>TO</span>
                        <span id="skip-value-upper2" className="example-val">100.00</span>
                        <div id="aa-price-range" className="noUi-target noUi-ltr noUi-horizontal noUi-background">
                        </div>      
                     </div>
                     <div className="aa-single-advance-search">
                        <input type="submit" value="Search" className="aa-search-btn" />
                     </div>
                  </form>
                  </div> 
               
                  <div className="aa-properties-single-sidebar">
                  <h3>Populer Properties</h3>
                  <div className="media">
                     <div className="media-left">
                        <a href="#">
                        <img className="media-object" src="img/item/1.jpg" alt="img" />
                        </a>
                     </div>
                     <div className="media-body">
                        <h4 className="media-heading"><a href="#">This is Title</a></h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>                
                        <span>$65000</span>
                     </div>              
                  </div>
                  <div className="media">
                     <div className="media-left">
                        <a href="#">
                        <img className="media-object" src="img/item/1.jpg" alt="img" />
                        </a>
                     </div>
                     <div className="media-body">
                        <h4 className="media-heading"><a href="#">This is Title</a></h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>                
                        <span>$65000</span>
                     </div>              
                  </div>
                  <div className="media">
                     <div className="media-left">
                        <a href="#">
                        <img className="media-object" src="img/item/1.jpg" alt="img" />
                        </a>
                     </div>
                     <div className="media-body">
                        <h4 className="media-heading"><a href="#">This is Title</a></h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>                
                        <span>$65000</span>
                     </div>              
                  </div>
                  </div>
               </aside>
            </div>
            </div>
         </div>
      </section>
      <Footer />
      </>
   )
}

export default PropertyDetails;