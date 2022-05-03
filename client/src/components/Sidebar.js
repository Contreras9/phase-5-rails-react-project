import React from 'react';
import {Link} from 'react-router-dom';
import Footer from './Footer';


function Sidebar() {
   return(
      <>
      <div>
        <span style={{marginTop: "100px"}}>
      <nav class="col-md-2 d-none d-md-block bg-light sidebar">
      <div class="sidebar-sticky">
        <ul class="nav flex-column">
        <li class="nav-item">
            <Link class="nav-link active" to="/dashboard">
            <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" stroke-width="3" fill="none" stroke-linecap="round" stroke-linejoin="round" class="css-i6dzq1"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
            {"  "}<b>Dashboard</b><span class="sr-only">(current)</span>
            </Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link active" to="/myproperty" >
            <p>   </p>
            <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" stroke-width="3" fill="none" stroke-linecap="round" stroke-linejoin="round" class="css-i6dzq1"><line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
            {" "}<b>My Properties</b> <span class="sr-only">(current)</span>
            </Link>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
            <p>   </p>

            <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" stroke-width="3" fill="none" stroke-linecap="round" stroke-linejoin="round" class="css-i6dzq1"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>
            {" "}{" "}<b>Viewings</b>
            </a>
          </li>
        </ul>
        </div>
        </nav>
        </span>
        </div>
      </>
   )
}


export default Sidebar;