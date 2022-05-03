import React from 'react'
import GoogleMapReact from 'google-map-react'
import { Icon } from '@iconify/react'
import locationIcon from '@iconify/icons-mdi/map-marker'

const LocationPin = ({ text }) => (
   <div className="pin">
     <Icon icon={locationIcon} className="pin-icon" />
     <p className="pin-text">{text}</p>
   </div>
 )

function Map( {address, lat, lng} ) {
   
   const location = {
      address: address,
      lat: parseFloat(lat),
      lng: parseFloat(lng),
   }


   const zoomLevel = 15
   
   return(
      
   
      <div className="map">
    <h2 className="map-h2"></h2>

    <div className="google-map">
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyDlLuMwrfVb4hvWH3IV1zy58fRDgudVjq0' }}
        defaultCenter={location}
        defaultZoom={zoomLevel}
      >
        <LocationPin
          lat={location.lat}
          lng={location.lng}
          text={location.address}
        />
      </GoogleMapReact>
    </div>
  </div>
   )
}

export default Map;