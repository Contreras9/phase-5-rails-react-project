import {Link} from 'react-router-dom';

function Header( {account, setAccount} ) {

   function signOut() {
      fetch("http://localhost:4001/logout", {
         method: "DELETE",
         headers: { 'Content-Type': 'application/json'
         }
      })
      .then(res => res.json())
      .then(res => {
         setAccount(null)
      })
   }



   return (
      <header id="aa-header">  
         <div className="container">
            <div className="row">
            <div className="col-md-12">
               <div className="aa-header-area">
                  <div className="row">
                  <div className="col-md-6 col-sm-6 col-xs-6">
                     <div className="aa-header-left">
                        <div className="aa-telephone-no">
                        <span className="fa fa-phone"></span>
                        1-800-999-9999
                        </div>
                        <div className="aa-email hidden-xs">
                        <span className="fa fa-envelope-o"></span> agent@flatiron.com
                        </div>
                     </div>              
                  </div>
                  <div className="col-md-6 col-sm-6 col-xs-6">
                     <div className="aa-header-right">
                        {account ?
                        <Link className="aa-login" to="/" onClick={() => signOut()} >LOG OUT</Link>
                        :
                        <div>
                        <Link className="aa-register" to="/signup" >SIGN UP</Link>
                        <Link className="aa-login" to="/login" > LOGIN</Link>
                        </div>
                        }
                     </div>
                  </div>
                  </div>
               </div>
            </div>
            </div>
         </div>
      </header>
   )
}

export default Header;