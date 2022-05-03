import React, {useEffect, useState} from 'react';
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
            <div className="col-md-8">
               <div className="aa-properties-content">            
         
                  <div className="aa-properties-details">
                  <div className="aa-properties-details-img">
                     <img src={details.photo}/>
                  </div>
                  <div className="aa-properties-info">
                     <h2>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex, alias!</h2>
                     <span className="aa-price">{details.price}</span>
                     <div class="dp_form">
                        <h4>Propery Features</h4>
                        <div className='section_content' style={{display:"block"}}>
                              <div class="dp_form">
                                 <div class="features_cols">
                                    <div class="info_icons">
                                          <img src="https://content.harstatic.com/resources/images/listing_details/beds.png" />
                                          <span>{details.rooms} Bed(s)</span>
                                    </div>
                                             <div class="info_icons">
                                          <img src="https://content.harstatic.com/resources/images/listing_details/baths.png" />
                                          <span>{details.bathrooms} Full Bath(s)</span>
                                    </div>
                                             <div class="info_icons">
                                          <img src="https://content.harstatic.com/resources/images/listing_details/built.png" />
                                          <span>{details.sqft} Bldg Sqft. </span>
                                    </div>
                                             <div class="info_icons">
                                          <img src="https://content.harstatic.com/resources/images/listing_details/single_family.png" />
                                          <span>{details.home_type}</span>
                                    </div>
                                    <div class="clearfix"></div>

                                 </div>
                              </div>
                          
                        </div>            
                     </div>
              
                     <h3>Property Map</h3>
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
                        <option value="1">Buy</option>
                        <option value="2">Sale</option>
                        </select>
                     </div>
                     <div className="aa-single-advance-search">
                        <select id="" name="">
                        <option selected="" value="0">Rooms</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        </select>
                     </div>
                     <div className="aa-single-advance-search">
                        <select id="" name="">
                        <option selected="" value="0">Bathrooms</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        </select>
                     </div>
                     <div className="aa-single-filter-search">
                        <span>AREA (SQ)</span>
                        <span>FROM</span>
                        <span id="skip-value-lower" className="example-val">30.00</span>
                        <span>TO</span>
                        <span id="skip-value-upper" className="example-val">100.00</span>
                        <div id="aa-sqrfeet-range" className="noUi-target noUi-ltr noUi-horizontal noUi-background">
                        <div className='noUi-base'>
                              <div className='noUi-origin noUi-connect' style={{left: '20%'}}>
                                 <div className='noUi-handle noUi-handle-lower'></div>
                              </div>
                              <div className='noUi-origin noUi-background' style={{left: '70%'}}>
                                 <div className='noUi-handle noUi-handle-upper'></div>
                              </div>
                           </div>
                        </div>                  
                     </div>
                     <div className="aa-single-filter-search">
                        <span>PRICE ($)</span>
                        <span>FROM</span>
                        <span id="skip-value-lower2" className="example-val">30.00</span>
                        <span>TO</span>
                        <span id="skip-value-upper2" className="example-val">100.00</span>
                        <div id="aa-price-range" className="noUi-target noUi-ltr noUi-horizontal noUi-background">
                        <div className='noUi-base'>
                              <div className='noUi-origin noUi-connect' style={{left: '20%'}}>
                                 <div className='noUi-handle noUi-handle-lower'></div>
                              </div>
                              <div className='noUi-origin noUi-background' style={{left: '70%'}}>
                                 <div className='noUi-handle noUi-handle-upper'></div>
                              </div>
                           </div>
                        </div>      
                     </div>
                     <div className="aa-single-advance-search">
                        <input type="submit" value="Search" className="aa-search-btn" />
                     </div>
                  </form>
                  </div> 
               </aside>
            </div>
         </div>
      </section>
      <Footer />
      </>
   )
}

export default PropertyDetails;