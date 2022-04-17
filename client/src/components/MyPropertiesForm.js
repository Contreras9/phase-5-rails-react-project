import React, {useState} from 'react';
import Header from './Header';
import Navbar from './Navbar';
import Sidebar from './Sidebar';


function MyPropertiesForm() {
  const [propertyType, setPropertyType] = useState(1)
  const [address, setAddress] = useState('')
  const [price, setPrice] = useState(1)
  const [rooms, setRooms] = useState(1)
  const [bathrooms, setBathrooms] = useState(1)
  const [sqft, setSqft] = useState(1)
  const [zipcode, setZipcode] = useState(1)
  const [city, setCity] = useState(1)
  const [photo, setPhoto] = useState(1)


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
    })
 }

   return (
     <>
     <Header />
      <Navbar />
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
      
      <div className='field'>
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
        <input type="file" placeholder="Profile Photo" value={photo} onChange={(e) => setPhoto(e.target.value)} />
        </label>
      </form>
      </div>

      <div className='action'>
      <form>
        <input type="submit" name="name" className='btn btn-success' onClick={createMyProperty}/>
      </form>
      </div>


    </main>
    </div>
    </div>
     </>
   )
}

export default MyPropertiesForm;