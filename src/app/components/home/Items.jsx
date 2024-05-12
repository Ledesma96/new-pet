
import Link from 'next/link'
import React from 'react'

const img = [{url: '/items-home/perro.png', category: 'Perros'}, {url: '/items-home/gato.png', category: 'Gatos'}, {url: '/items-home/pajaro.png', category: 'Aves'}, {url: '/items-home/pescado.png', category: 'Peces'}, {url: '/items-home/conejito.png', category: 'Otros'}]

const Items = () => {
  return (
    <div className='container-cards'>
        {img.map((item, index) => (
            <Link href='' className='container-cards_card' key={index}>
                <img className='container-cards_card_img' src={item.url} alt={item.category}/>
                <p className='container-cards_card_p'>{item.category}</p>
            </Link>
        ))}
    </div>
  )
}

export default Items