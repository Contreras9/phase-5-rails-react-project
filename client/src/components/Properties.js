import React, {useState, useEffect} from 'react';
import { useParams, Link } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';
import Navbar from './Navbar';


function Properties() {

   const [location, setLocation] = useState('')
   const [propertyResults, setPropertyResults] = useState([])
   let {locationSearch, propertyTypeParam} = useParams()

   const propertyType = propertyTypeParam ? propertyTypeParam : 0;

   function searchQuiry(location) {

      fetch("http://localhost:4001/search", {
         method:"POST",
         headers: {"Content-Type": "application/json"
         },
         body:JSON.stringify({location: location, property_type: propertyType})
      })
      .then(res => res.json())
      .then(res => {
         setPropertyResults(res)
      })
   }


   function searchProperties(e) {
      e.preventDefault()
      searchQuiry(location)
   }

   useEffect(() => {
      if (locationSearch) {
         setLocation(locationSearch)
         searchQuiry(locationSearch)
      } 
   }, [])



   return (
      <>
      <Header />
      <Navbar />
      <section id="aa-property-header">
         <div className="container">
            <div className="row">
            <div className="col-md-12">
               <div className="aa-property-header-inner">
                  <h2>Properties Page</h2>
                  <ol className="breadcrumb">
                  <li><a href="/">HOME</a></li>            
                  <li className="active">PROPERTIES</li>
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
               
                  <div className="aa-properties-content-head">              
                  <div className="aa-properties-content-head-left">
                     <form action="" className="aa-sort-form">
                        <label for="">Sort by</label>
                        <select name="">
                        <option value="1" selected="Default">Default</option>
                        <option value="2">Name</option>
                        <option value="3">Price</option>
                        <option value="4">Date</option>
                        </select>
                     </form>
                     <form action="" className="aa-show-form">
                        <label for="">Show</label>
                        <select name="">
                        <option value="1" selected="12">6</option>
                        <option value="2">12</option>
                        <option value="3">24</option>
                        </select>
                     </form>
                  </div>
                  <div className="aa-properties-content-head-right">
                     <a id="aa-grid-properties" href="#"><span className="fa fa-th"></span></a>
                     <a id="aa-list-properties" href="#"><span className="fa fa-list"></span></a>
                  </div>            
                  </div>
                  
                  <div className="aa-properties-content-body">
                  <ul className="aa-properties-nav">
                   
                     { propertyResults.map(propertyResult => 
                        <li>
                        <article className="aa-properties-item">
                        <a className="aa-properties-item-img" href="#">
                           <Link to="/propertyDetails"><img alt="img" src={propertyResult.photo} /></Link>
                        </a>
                        <div className="aa-tag for-rent">
                           For Rent
                        </div>
                        <div className="aa-properties-item-content">
                           <div className="aa-properties-info">
                              <span>{propertyResult.rooms} rooms</span>
                              <span>{propertyResult.bathrooms} bathrooms</span>
                              <span>{propertyResult.sqft} sqft</span>
                              <span>- {propertyResult.name}</span>
                           </div>
                           <div className="aa-properties-about">
                              <h3><Link to="/propertyDetails">{propertyResult.price}</Link></h3>
                              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim molestiae vero ducimus quibusdam odit vitae.</p>                      
                           </div>
                           <div className="aa-properties-detial">
                              <span className="aa-price">
                              address
                              </span>
                              <Link className="aa-secondary-btn" to="/propertyDetails">View Details</Link>
                           </div>
                        </div>
                        </article>
                        </li>
                     )}

                    
                  </ul>
                  </div>
            
                  <div className="aa-properties-content-bottom">
                  <nav>
                     <ul className="pagination">
                        <li>
                        <a href="#" aria-label="Previous">
                           <span aria-hidden="true">&laquo;</span>
                        </a>
                        </li>
                        <li><a href="#">1</a></li>
                        <li><a href="#">2</a></li>
                        <li className="active"><a href="#">3</a></li>
                        <li><a href="#">4</a></li>
                        <li><a href="#">5</a></li>
                        <li>
                        <a href="#" aria-label="Next">
                           <span aria-hidden="true">&raquo;</span>
                        </a>
                        </li>
                     </ul>
                  </nav>
                  </div>
               </div>
            </div>
            
            <div className="col-md-4">
               <aside className="aa-properties-sidebar">
               
                  <div className="aa-properties-single-sidebar">
                  <h3>Search {["All","for Sale","for Rent"][propertyType]}</h3>
                  <form action="">
                     <div className="aa-single-advance-search">
                        <input type="text" placeholder="Type Your Location" value={location} onChange={e => {setLocation(e.target.value)}}/>
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
                        <input type="submit" value="Search" className="aa-search-btn" onClick={e => searchProperties(e)}/>
                     </div>
                  </form>
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

export default Properties;