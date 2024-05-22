import React from 'react'
import Link from 'next/link'

const Card = ({products}) => {
  return (
    <div className='container-card'>
        {products.map((product) =>
            <div key={product._id} className='container-card_card'>
                <img className='container-card_card_img' src={`https://new-pet-nest.onrender.com${product.images[0]}`} alt={product.title} />
                <h3 className='container-card_card_h3'>{`${product.name}`}</h3>
                <Link className="container-card_card_detail" href={`/detail/${product.id}`}>Detalles</Link>
            </div>
        )}
    </div>
  )
}

export default Card