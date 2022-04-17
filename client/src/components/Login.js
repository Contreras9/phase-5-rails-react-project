import React, {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom';

function Login( {setAccount} ) {

   const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const [error, setError] = useState(null)

    let navigate = useNavigate();

    function onClick(e) {
        e.preventDefault()
        const user = {
            email: email,
            password: password
        }

        fetch('http://localhost:4001/login', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(user)
        })
        .then(res => {
            if(res.ok){
              res.json()
              .then(user=>{
                setAccount(user)
                navigate("/dashboard");
              })
            } else {
              res.json()
              .then(json => setError(json.error))
            }
          })
    }



   return(
      <section id="aa-signin">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="aa-signin-area">
            <div className="aa-signin-form">
              <div className="aa-signin-form-title">
                <a className="aa-property-home" href="index.html">Property Home</a>
                <h4>Sign in</h4>
              </div>
              <form className="contactform">                                                 
                <div className="aa-single-field">
                  <label for="email">Email <span className="required">*</span></label>
                  <input type="email" value={email} onChange={e => setEmail(e.target.value)} required="required" aria-required="true" name="email" />
                </div>
                <div className="aa-single-field">
                  <label for="password">Password <span className="required">*</span></label>
                  <input type="password" value={password} onChange={e => setPassword(e.target.value)} name="password" /> 
                </div>
                <div className="aa-single-field">
                <label>
                  <input type="checkbox" /> Remember me
                </label>                                                          
                </div> 
                <div className="aa-single-submit">
                  <input type="submit" value="Submit" onClick={onClick} className="aa-browse-btn" name="submit" />  
                  <p>Don't Have A Account Yet? <Link to="signup">CREATE NOW!</Link></p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
   )
}

export default Login;