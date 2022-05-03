import React from 'react';
import Header from './Header';
import Navbar from './Navbar';
import Footer from './Footer';
import Sidebar from './Sidebar';

function Dashboard() {

   return (
      <>
       
         <section id="aa-property-header">
            <div className="container">
               <div className="row">
               <div className="col-md-12">
                  <div className="aa-property-header-inner">
                     <h2>Properties</h2>
                     <ol className="breadcrumb">           
                     <li className="active"></li>
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
       
      <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 class="h2">Dashboard</h1>
        <div class="btn-toolbar mb-2 mb-md-0">
          <div class="btn-group mr-2">
          </div>
        </div>
      </div>

      <img width="200px" height="200px" style={{display: "block", height: "655px", "background-size": "cover" , width: "1552px"}} src='/img/download.png' />

      {/* <img src='/img/download.png'/> */}
      <div class="table-responsive">
        <table class="table table-striped table-sm">
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
               <th colSpan={3}></th>
            </tr>
          </thead>
          <tbody>
            
          </tbody>
        </table>
      </div>
    </main>
  </div>
</div>

      </>
   )
}

export default Dashboard;