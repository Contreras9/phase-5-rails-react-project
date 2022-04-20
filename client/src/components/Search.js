
import { useState } from 'react';
import { useNavigate } from 'react-router';
import Nouislider from "nouislider-react";
import "nouislider/distribute/nouislider.css";

function Search() {
   const [location, setLocation] = useState('')
   const [propertyType, setPropertyType] = useState(0)
   let navigate = useNavigate()

   function searchProperties(e) {
      e.preventDefault()
      navigate(`/properties/${propertyType}/${location}`)    
   }

   return (
      <section id="aa-advance-search">
         <div className="container">
            <div className="aa-advance-search-area">
            <div className="form">
               <div className="aa-advance-search-top">
                  <div className="row">
                  <div className="col-md-4">
                     <div className="aa-single-advance-search">
                        <input type="text" placeholder="Type Your City/Zipcode" value={location} onChange={e => setLocation(e.target.value)} />
                     </div>
                  </div>
                  <div className="col-md-2">
                     <div className="aa-single-advance-search">
                        <select onChange={e => setPropertyType(e.target.value)}>
                        <option value="0" selected>Category</option>
                        <option value="1">Buy</option>
                        <option value="2">Sale</option>
                        </select>
                     </div>
                  </div>
                  <div className="col-md-2">
                     <div className="aa-single-advance-search">
                        <select>
                        <option value="0" selected>Rooms</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        </select>
                  </div>
                  </div>
                  <div className="col-md-2">
                     <div className="aa-single-advance-search">
                        <select>
                        <option value="0" selected>Bathrooms</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        </select>
                  </div>
                  </div>
                  <div className="col-md-2">
                     <div className="aa-single-advance-search">
                        <input className="aa-search-btn" type="submit" value="Search" onClick={e => searchProperties(e)} />
                     </div>
                  </div>
                  </div>
               </div>
               <div className="aa-advance-search-bottom">
           <div className="row">
            <div className="col-md-6">
              <div className="aa-single-filter-search">
                <span>AREA (SQ)</span>
                <span>FROM</span>
                <span id="skip-value-lower" className="example-val">500.00</span>
                <span>TO</span>
                <span id="skip-value-upper" className="example-val">7500.00</span>
               
                   
                  <Nouislider range={{ min: 0, max: 100 }} start={[150, 300]} connect />
               
              </div>
            </div>
            
            <div className="col-md-6">
               <div className="aa-single-filter-search">
                <span>PRICE ($)</span>
                <span>FROM</span>
                <span id="skip-value-lower2" className="example-val">350,000.00</span>
                <span>TO</span>
                <span id="skip-value-upper2" className="example-val">850,000.00</span>
         
              </div>
              
            </div>
          </div>  
         </div>
            </div>
            </div>
         </div>
      </section>
   )
}

export default Search;