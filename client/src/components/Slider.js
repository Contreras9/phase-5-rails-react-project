import React from 'react'
import SimpleImageSlider from "react-simple-image-slider";

function Slider() {


const images = [
   { url: "img/slider/3.jpg" },
   { url: "img/slider/2.jpg" },
   { url: "img/slider/1.jpg" },
   { url: "img/slider/5.jpg" },
   { url: "img/slider/4.jpg" },
   { url: "img/slider/6.jpg" },
 ];


   return(
     <>
      <SimpleImageSlider
        width={1920}
        height={700}
        images={images}
        showBullets={true}
        showNavs={true}
      />
     </>
 )
}

export default Slider;