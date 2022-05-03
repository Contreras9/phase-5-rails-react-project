import React from 'react';
import {Link} from 'react-router-dom';



function Navbar( {account} ) {
   return(
	
	<>
	<section id="aa-menu-area">
		<nav className="navbar navbar-default main-navbar" role="navigation">  
			<div className="container">
			<div className="navbar-header">

				<button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
					<span className="sr-only">Toggle navigation</span>
					<span className="icon-bar"></span>
					<span className="icon-bar"></span>
					<span className="icon-bar"></span>
				</button>
				                                              
			
				<Link className="navbar-brand aa-logo" to="/"> Villa <span>Property</span></Link>

			</div>
			<div id="navbar" className="navbar-collapse collapse">
				<ul id="top-menu" className="nav navbar-nav navbar-right aa-main-nav">
					<li className="active"><a href="/">HOME</a></li>
					<li>
						<Link to="/properties/1/">BUY</Link>
					</li>
					<li>
						<Link to="/properties/2/">RENT</Link>
					</li>
					{/* <li>
						<Link to="/signup">SELL</Link>
					</li> */}
					<li className="dropdown">
					<a className="dropdown-toggle" data-toggle="dropdown" href="blog-archive.html">News <span className="caret"></span></a>
					<ul className="dropdown-menu" role="menu">                
						<li><a href="blog-archive.html">BLOG</a></li>
						<li><a href="blog-single.html">BLOG DETAILS</a></li>                                            
					</ul>
					</li>
					{account ? 
					<li>
						<Link to="/dashboard">DASHBOARD</Link>
					</li>
					:
					''}                            
				</ul>                            
			</div>      
			</div>          
		</nav> 
	</section>
	</>
	)
}

export default Navbar;