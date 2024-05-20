'use client'
import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const images = ['royal-canin-1-logo.png',
'applaws-logo-0BF68F0583-seeklogo.com.png',
'descarga.png',
'descarga (1).png',
'logo_Alpha_blanco_fondo_negro_11ebe5c1-fbe0-45c8-ac65-858392f17fb0_1024x.webp',
'logo-tropical-png-300x117.png',
'Tetra_Logo.png']
const BrandsCarrousel = () => {
    const settings = {
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear",
      };
  return (
    <div className="slider-container">
        <section className='slider-contaier_section'>
            <h4>Calidad premium</h4>
        </section>
      <Slider {...settings}>
        {images.map((image, index) =>(
            <div key={index}>
              <img width={100} src={'/images/' + image} alt={image} />
            </div>
        ))}
      </Slider>
    </div>
  )
}

export default BrandsCarrousel