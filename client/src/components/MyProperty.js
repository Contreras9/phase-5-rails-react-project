import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import Sidebar from './Sidebar';

function MyProperties() {

   const [myProperties, setMyproperties] = useState([])

   

   function updateMyProperty() {
      fetch("http://localhost:4001/myproperties", {
         method: 'GET',
         headers: {'Content-Type': 'application/json'}
      })
      .then(res => res.json())
      .then(res => {
         setMyproperties(res)
      })
   }

   function showProperty(propertyid) {

   }

   function editProperty(propertyid) {
      
   }

   function deleteProperty(propertyid) {
      fetch(`http://localhost:4001/properties/${propertyid}`, {
         method: "DELETE",
         headers: { 'Content-Type': 'application/json'
         }
      })
      .then(res => res.json())
      .then(res => {
         updateMyProperty(res)
      })
   }

   useEffect(() => {
      updateMyProperty()
   }, [])

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

      <div class="container-fluid">
  <div class="row">
    <Sidebar />

    <main role="main" class="col-md-9 ml-sm-auto col-lg-10 px-4">

       <h1>Properties</h1>

   <table className="table table-striped">
          <thead>
            <tr>
               <th>Property Type</th>
               <th>Address</th>
               <th>Price</th>
               <th>Rooms</th>
               <th>Bathrooms</th>
               <th>Sqft</th>
               <th>Zipcode</th>
               <th>City</th>
               <th>Photo</th>
               <th colSpan={3}></th>
            </tr>
          </thead>

          <tbody>
             {myProperties.map(myProperty => 
            <tr>
              <td>{myProperty.property_type === 1 ? "For Sale" : "For Rent"}</td>
              <td>address</td>
              <td>price</td>
              <td>rooms</td>
              <td>bathrooms</td>
              <td>sqft</td>
              <td>Zipcode</td>
              <td>city</td>
              <td>photo</td>
              <td>
              <span onClick={() => showProperty(myProperty.id)}>Show</span>
              </td>
              <td>
              <span onClick={() => editProperty(myProperty.id)}>Edit</span>
              </td>
              <td>
              <span onClick={() => deleteProperty(myProperty.id)}>Delete</span>
              </td>
            </tr> 
            )}
          </tbody>
        </table>
        <div className='action'>
      <form>
        <Link to='/mypropertiesform'><input type="submit" value={"new"} className='btn btn-success'/></Link>
      </form>
      </div>
        </main>
        </div>
        </div>

        </>
   )
}

export default MyProperties;