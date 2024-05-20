import React from 'react'
import ImageGallery from "react-image-gallery";

const Gallery = ({images}) => {
    const imagesGallery = images.map( image => ({
        original: 'http://127.0.0.1:3000' + image,
        thumbnail: 'http://127.0.0.1:3000' + image
    }))
  return (
    <div className='gallery'>
      <ImageGallery items={imagesGallery} />
    </div>
  )
}

export default Gallery