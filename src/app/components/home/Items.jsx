
import Link from 'next/link'
import React from 'react'

const img = [{url: '/items-home/perro.png', category: 'perros'}, {url: '/items-home/gato.png', category: 'gatos'}, {url: '/items-home/pajaro.png', category: 'aves'}, {url: '/items-home/pescado.png', category: 'peces'}, {url: '/items-home/conejito.png', category: 'otros'}]

const Items = () => {
  return (
    <div className='container-cards'>
        {img.map((item, index) => (
            <Link href={`/products/${item.category}`} className='container-cards_card' key={index}>
                <img className='container-cards_card_img' src={item.url} alt={item.category}/>
                <p className='container-cards_card_p'>{item.category}</p>
            </Link>
        ))}
    </div>
  )
}

export default Items