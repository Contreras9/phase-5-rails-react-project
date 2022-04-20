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

      {/* <canvas class="my-4 w-100 chartjs-render-monitor" id="myChart" width="3104" height="1310" style={{display: "block", height: "655px", width: "1552px"}}></canvas> */}

      <div class="table-responsive">
        <table class="table table-striped table-sm">
          <thead>
            <tr>
              <th>#</th>
              <th>Header</th>
              <th>Header</th>
              <th>Header</th>
              <th>Header</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1,001</td>
              <td>Lorem</td>
              <td>ipsum</td>
              <td>dolor</td>
              <td>sit</td>
            </tr>
            <tr>
              <td>1,002</td>
              <td>amet</td>
              <td>consectetur</td>
              <td>adipiscing</td>
              <td>elit</td>
            </tr>
            <tr>
              <td>1,003</td>
              <td>Integer</td>
              <td>nec</td>
              <td>odio</td>
              <td>Praesent</td>
            </tr>
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