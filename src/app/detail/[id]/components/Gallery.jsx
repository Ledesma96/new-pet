import React from 'react'
import ImageGallery from "react-image-gallery";

const Gallery = ({images}) => {
    const imagesGallery = images.map( image => ({
        original: 'https://new-pet-nest.onrender.com' + image,
        thumbnail: 'https://new-pet-nest.onrender.com' + image
    }))
  return (
    <div className='gallery'>
      <ImageGallery items={imagesGallery} />
    </div>
  )
}

export default Gallery