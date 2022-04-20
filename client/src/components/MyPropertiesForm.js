import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './Header';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import 'semantic-ui-css/semantic.min.css'


function MyPropertiesForm() {
  const [propertyType, setPropertyType] = useState(1)
  const [address, setAddress] = useState('')
  const [price, setPrice] = useState('')
  const [rooms, setRooms] = useState('')
  const [bathrooms, setBathrooms] = useState('')
  const [sqft, setSqft] = useState('')
  const [zipcode, setZipcode] = useState('')
  const [city, setCity] = useState('')
  const [photo, setPhoto] = useState('')

  let navigate = useNavigate()

  function uploadPhoto(target) {
    let reader = new FileReader()
        reader.readAsDataURL(target.files[0])
        reader.addEventListener('load', () => {
        setPhoto(reader.result)
        })

  }

  function createMyProperty(e) {
    e.preventDefault()
    fetch("http://localhost:4001/properties", {
       method: 'POST',
       headers: {'Content-Type': 'application/json'},
       body:JSON.stringify({
         property_type: propertyType,
         address: address,
         price: price,
         rooms: rooms,
         bathrooms: bathrooms,
         sqft: sqft,
         zipcode: zipcode,
         city: city,
         photo: photo
       })
    })
    .then(res => res.json())
    .then(res => {
      //  setMyproperties(res)
      console.log(res)
      navigate('/myproperty')
    })
 }

   return (
     <>
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
      
      {/* <div className='field'>
      <form>
        <label>
        Property Type
        <br />
        <input type="textField" name="name" className='form-control' value={propertyType} onChange={(e) => setPropertyType(e.target.value)} />
        </label>
      </form>
      </div>

      <div className='field'>
      <form>
        <label>
        Address
        <br />
        <input type="textField" name="name" className='form-control' value={address} onChange={(e) => setAddress(e.target.value)} />
        </label>
      </form>
      </div>

      <div className='field'>
      <form>
        <label>
        Price
        <br />
        <input type="textField" name="name" className='form-control' value={price} onChange={(e) => setPrice(e.target.value)} />
        </label>
      </form>
      </div>

      <div className='field'>
      <form>
        <label>
        Rooms
        <br />
        <input type="textField" name="name" className='form-control' value={rooms} onChange={(e) => setRooms(e.target.value)} />
        </label>
      </form>
      </div>

      <div className='field'>
      <form>
        <label>
        Bathrooms
        <br />
        <input type="textField" name="name" className='form-control' value={bathrooms} onChange={(e) => setBathrooms(e.target.value)} />
        </label>
      </form>
      </div>

      <div className='field'>
      <form>
        <label>
        Sqft
        <br />
        <input type="textField" name="name" className='form-control' value={sqft} onChange={(e) => setSqft(e.target.value)} />
        </label>
      </form>
      </div>

      <div className='field'>
      <form>
        <label>
        Zipcode
        <br />
        <input type="textField" name="name" className='form-control' value={zipcode} onChange={(e) => setZipcode(e.target.value)} />
        </label>
      </form>
      </div>

      <div className='field'>
      <form>
        <label>
        City
        <br />
        <input type="textField" name="name" className='form-control' value={city} onChange={(e) => setCity(e.target.value)} />
        </label>
      </form>
      </div>

      <div className='field'>
      <form>
        <label>
        Photo
        <br />
        <input type="file" placeholder="Profile Photo" />
        </label>
      </form>
      </div>

      <div className='action'>
      <form>
        <input type="submit" name="name" className='btn btn-success' onClick={createMyProperty}/>
      </form>
      </div>
 */}

<div class="ui inverted segment">
  <div class="ui  form">
    <div class="two fields">
      <div class="field">
        <label>Property Type</label>
        <input placeholder="Property Type" type="text" value={propertyType} onChange={(e) => setPropertyType(e.target.value)}/>
        {/* <input type="textField" name="name" className='form-control' value={propertyType} onChange={(e) => setPropertyType(e.target.value)} /> */}

      </div>
      <div class="field">
        <label>Street Address</label>
        <input placeholder="Street Address" type="text" value={address} onChange={(e) => setAddress(e.target.value)}/>
      </div>
    </div>
    <div class="two fields">
      <div class="field">
        <label>Property Price</label>
        <input placeholder="Property Price" type="text"  value={price} onChange={(e) => setPrice(e.target.value)} />
        {/* <input type="textField" name="name" className='form-control' value={propertyType} onChange={(e) => setPropertyType(e.target.value)} /> */}

      </div>
      <div class="field">
        <label>Number of Rooms</label>
        <input placeholder="Number of Rooms" type="text" value={rooms} onChange={(e) => setRooms(e.target.value)}/>
      </div>
    </div>
    <div class="two fields">
      <div class="field">
        <label>Property Sqft</label>
        <input placeholder="Property Sqft" type="text"  value={sqft} onChange={(e) => setSqft(e.target.value)} />
        {/* <input type="textField" name="name" className='form-control' value={propertyType} onChange={(e) => setPropertyType(e.target.value)} /> */}

      </div>
      <div class="field">
        <label>Property ZipCode</label>
        <input placeholder="Property ZipCode" type="text" value={zipcode} onChange={(e) => setZipcode(e.target.value)}/>
      </div>
    </div>
    <div class="two fields">
      <div class="field">
        <label>Property Number of Bathrooms</label>
        <input placeholder="bathrooms" type="text"  value={bathrooms} onChange={(e) => setBathrooms(e.target.value)} />
        {/* <input type="textField" name="name" className='form-control' value={propertyType} onChange={(e) => setPropertyType(e.target.value)} /> */}

      </div>
      <div class="field">
        <label>Property City</label>
        <input placeholder="Property City" type="text" value={city} onChange={(e) => setCity(e.target.value)}/>
      </div>

      <div class="field">
        <label>Property City</label>
        <input type="file" placeholder="Profile Photo" onChange={(e) => uploadPhoto(e.target)}/>
      </div>
    </div>


    
    
    <div class="ui submit button" type="submit" name="name" onClick={createMyProperty}>Submit</div>
  </div>
</div>

    </main>
    </div>
    </div>
     </>
   )
}

export default MyPropertiesForm;