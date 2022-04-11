import React, {useState} from 'react'
import { useNavigate } from "react-router-dom";

function Signup() {
   
   const [firstName, setFirstName] = useState('')
   const [lastName, setlastName] = useState('')
   const [password, setPassword] = useState('')
   const [email, setAge] = useState('')
   const [country, setCountry] = useState('')

   const [error, setError] = useState(null)

   let navigate = useNavigate();

   function onClick(e) {
       e.preventDefault()
       const user = {
           name: name,
           password: password,
           age: age,
           country: country
       }

       fetch('http://localhost:4000/coders', {
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
      <form class="form-auth text-center">
         <img class="mb-4" src="/docs/4.3/assets/brand/bootstrap-solid.svg" alt="" width="72" height="72" />
         <h1 class="h3 mb-3 font-weight-normal">Please Sign Up</h1>
         <label for="inputfirstName" class="sr-only">Email address</label>
         <input type={firstName} id="inputEmail" class="form-control" placeholder="Email address" required="" autofocus="" />
         <label for="inputLastName" class="sr-only">Email address</label>
         <input type={lastName} id="inputEmail" class="form-control" placeholder="Email address" required="" autofocus="" />
         <label for="inputEmail" class="sr-only">Email address</label>
         <input type={email} id="inputEmail" class="form-control" placeholder="Email address" required="" autofocus="" />
         <label for="inputPassword" class="sr-only">Password</label>
         <input type={password} id="inputPassword" class="form-control" placeholder="Password" required="" />
         <div class="checkbox mb-3">
            <label>
               <input type="checkbox" value="remember-me"/> Remember me
            </label>
         </div>
         <button class="btn btn-lg btn-primary btn-block" type="submit" onClick={onClick}>Sign in</button>
         <p class="mt-5 mb-3 text-muted">© 2017-2019</p>
      </form>
   )
}

export default Signup;