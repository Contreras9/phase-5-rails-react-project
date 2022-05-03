import React, {useState, useEffect} from 'react';
import { useParams, Link } from 'react-router-dom';
import Footer from './Footer';
import Navbar from './Navbar';


function Properties() {

   const [location, setLocation] = useState('')
   const [propertyResults, setPropertyResults] = useState([])
   const [sortCondition, setSortCondition] = useState(1)
   const [numOfHomesPerPage,setNumOfHomesPerPage] = useState(5)
   const [pageToShow,setPageToShow] = useState(0)
   let {locationSearch, propertyTypeParam} = useParams()

   const propertyType = propertyTypeParam ? propertyTypeParam : 0;

   function sortedHomes() {

      switch(sortCondition) {
         case "1": 
            return [...propertyResults].sort((a , b) => parseInt(a.price.replaceAll("$","").replaceAll(",","")) < parseInt(b.price.replaceAll("$","").replaceAll(",","")) ? 1 : -1)
         
         case "2":
            return [...propertyResults].sort((a , b) => parseInt(a.price.replaceAll("$","").replaceAll(",","")) > parseInt(b.price.replaceAll("$","").replaceAll(",","")) ? 1 : -1)
        
            default: return propertyResults
      }
   }

   function paginateHomes(homes)
   {
      const chunks = []
      for (let i = 0 ; i < homes.length ; i += numOfHomesPerPage)
      {
         chunks.push(homes.slice(i,i+numOfHomesPerPage))
      }
      return chunks.length === 0 ? [[]] : chunks
   }

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
      let q = ""
      if (locationSearch) {
         setLocation(locationSearch)
         q = locationSearch
      } 
      searchQuiry(q)
   }, [])



   return (
      <>

      
      <section id="aa-property-header">
         <div className="container">
            <div className="row">
            <div className="col-md-12">
               <div className="aa-property-header-inner">
                  {/* <h2>Properties Page</h2> */}
                  <ol className="breadcrumb">
                  {/* <li><a href="/">HOME</a></li>             */}
                  {/* <li className="active">PROPERTIES</li> */}
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
                        <select name="" onChange={(e) => setSortCondition(e.target.value)}>
                        <option value="1" selected="Default">Default</option>
                        <option value="2">Price (ascending)</option>
                        
                        <option value="3">City</option>
                        </select>
                     </form>
                     <form action="" className="aa-show-form">
                        <label for="">Show</label>
                        <select name="" onChange={e =>  setNumOfHomesPerPage(parseInt(e.target.value))}>
                        <option value="5" selected="5">5</option>
                        <option value="10">10</option>
                        <option value="20">20</option>
                        </select>
                     </form>
                  </div>
                  <div className="aa-properties-content-head-right">
                  </div>            
                  </div>
                  
                  <div className="aa-properties-content-body">
                  <ul className="aa-properties-nav">
                   
                     { paginateHomes(sortedHomes())[pageToShow].map(propertyResult => 
                        <li>
                        <article className="aa-properties-item">
                        <a className="aa-properties-item-img" href="#">
                           <Link to={`/propertyDetails/${propertyResult.id}`}><img alt="img" src={propertyResult.photo} /></Link>
                        </a>
                        <div className="aa-tag for-rent">
                        {propertyResult.home_status}
                        </div>
                        <div className="aa-properties-item-content">
                           <div className="aa-properties-info">
                           <span>{propertyResult.rooms} rooms</span>
                           <span>{propertyResult.bathrooms} bath(s)</span>
                           <span>{propertyResult.sqft} sqft</span>-
                           <span>{propertyResult.property_status}</span>
                           </div>
                           <div className="aa-properties-about">
                              <h3><Link to={`/propertyDetails/${propertyResult.id}`}>{propertyResult.price}</Link></h3>
                              <span>{propertyResult.address}</span>,
                              <span> {propertyResult.city}</span>,
                              <span> {propertyResult.state}</span>
                              <span> {propertyResult.zipcode}</span>                     
                           </div>
                           <div className="aa-properties-detial">
                              <span className="aa-price">
                              </span>
                              <Link className="aa-secondary-btn" to={`/propertyDetails/${propertyResult.id}`}>View Details</Link>
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
                        <a onClick={() => setPageToShow(p => 0 < p ? p-1 : p)} aria-label="Previous">
                           <span aria-hidden="true">&laquo;</span>
                        </a>
                        </li>

                        { Array.from(Array(Math.ceil(propertyResults.length / numOfHomesPerPage)) , (_,i) => i).map(i =>  <li className={ i === pageToShow ? "active" : ""} ><a onClick={() => setPageToShow(i)}>{i+1}</a></li>  )}
                        
                        <li>
                        <a onClick={() => setPageToShow(p => p < Math.ceil(propertyResults.length / numOfHomesPerPage)-1 ? p+1 : p) } aria-label="Next">
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
                        <input type="text" placeholder="Type Your City/Zipcode" value={location} onChange={e => {setLocation(e.target.value)}}/>
                     </div>
                     <div className="aa-single-advance-search">
                        <select id="" name="">
                        <option selected="" value="0">Category</option>
                        <option value="1">Buy</option>
                        <option value="2">Rent</option>
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