import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';

function Signup() {
   
   const [firstName, setFirstName] = useState('')
   const [lastName, setlastName] = useState('')
   const [password, setPassword] = useState('')
   const [email, setEmail] = useState('')

   const [error, setError] = useState(null)

   let navigate = useNavigate();

   function onClick(e) {
       e.preventDefault()
       const user = {
           first_name: firstName,
           last_name: lastName,
           email: email,
           password: password,
       }

       fetch('http://localhost:4001/accounts', {
           method: 'POST',
           headers: {'Content-Type': 'application/json'},
           body: JSON.stringify(user)
       })
       .then(res => {
           if(res.ok){
             res.json()
             .then(user=>{
               navigate("/login");
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
                <h4>Create your account and Stay with us</h4>
              </div>
              <form className="contactform">                                                 
                <div className="aa-single-field">
                  <label for="name">Name <span className="required">*</span></label>
                  <input type="text" value={firstName} onChange={e => setFirstName(e.target.value) }required="required" aria-required="true" name="name" />
                </div>
                <div className="aa-single-field">
                  <label for="name">Last Name <span className="required">*</span></label>
                  <input type="text" value={lastName} onChange={e => setlastName(e.target.value) } required="required" aria-required="true" name="name" />
                </div>
                <div className="aa-single-field">
                  <label for="email">Email <span className="required">*</span></label>
                  <input type="email" value={email} onChange={e => setEmail(e.target.value) } required="required" aria-required="true" name="email" />
                </div>
                <div className="aa-single-field">
                  <label for="password">Password <span className="required">*</span></label>
                  <input type="password" value={password} onChange={e => setPassword(e.target.value) } name="password" /> 
                </div>
                <div className="aa-single-field">
                  <label for="confirm-password">Confirm Password <span className="required">*</span></label>
                  <input type="password" name="confirm-password" /> 
                </div>
                <div className="aa-single-submit">
                  <input type="submit" value="Create Account" onClick={onClick} name="submit" />                    
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

export default Signup;