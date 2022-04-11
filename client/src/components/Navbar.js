import React from "react"
import {Link} from "react-router-dom"



function Navbar( {account} ) {
   return(
// 		<nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
//   <a className="navbar-brand" href="#">Pillow</a>
//   <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
//     <span className="navbar-toggler-icon"></span>
//   </button>

//   <div className="collapse navbar-collapse" id="navbarsExampleDefault">
//     <ul className="navbar-nav mr-auto">
//       <li className="nav-item active">
//         <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
//       </li>
//       <li className="nav-item">
//         <a className="nav-link" href="#">Latest</a>
//       </li>
//       <li className="nav-item dropdown">
//         <a className="nav-link dropdown-toggle" href="#" id="dropdown01" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" >Search</a>
//         <div className="dropdown-menu" aria-labelledby="dropdown01">
//           <a className="dropdown-item" href="#">Action</a>
//           <a className="dropdown-item" href="#">Another action</a>
//           <a className="dropdown-item" href="#">Something else here</a>
//         </div>
//       </li>
// 		<li className="nav-item">
//         <a className="nav-link" href="#">News</a>
//       </li>
// 		<li className="nav-item">
//         <a className="nav-link" href="#">Advertising</a>
//       </li>
// 		{ account ?
// 		<li className="nav-item">
// 		<Link className="nav-link" to="/">Logout</Link>
//       </li>
// 		:
// 		<>
// 		<li className="nav-item">
//         <Link className="nav-link" to="/login">Login</Link>
//       </li>
// 		<li className="nav-item">
// 		<Link className="nav-link" to="/login">Sign up</Link>
// 	 	</li>
// 	 	</>
// 		}
//     </ul>
//     <form className="form-inline my-2 my-lg-0">
//       <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search"/>
//       <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
//     </form>
//   </div>
// </nav>
   )
}

export default Navbar;
