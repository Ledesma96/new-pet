'use client'
import React, { useEffect, useState } from 'react'
import Gallery from './Gallery'
import Link from 'next/link'
import { getProductById } from '@/app/api/api'

const ProductDetail = ({id}) => {
    const [product, setProduct] = useState([]);
    const [images, setImages] = useState([]);
    

    useEffect(() => {
        const response = getProductById(id)
        .then((response) => {
            setProduct(response.product)
            setImages(response.product.images)
        })
        .catch((error) => {
            console.log(error)
        })
    }, [])

    return (
    <div className='container-detail'>
        <Gallery images={images} />
        <main className='container-detail_main'>
            <h1 className='container-detail_main_h1'>{product.name}</h1>
            <div className='container-detail_main_div'>
                <aside className='container-detail_main_div_aside'>
                    <svg color={`${product.stock > 0 ? 'green' : 'red'}`} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"  viewBox="0 0 16 16">
                        <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0"/>
                        <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0z"/>
                    </svg>
                    { product.stock > 0 ?
                        <p className='container-detail_main_div_aside_p green' >En stock</p>
                        :
                        <p className='container-detail_main_div_aside_p red'>Sin stock</p>
                    }
                </aside>
                <aside className='container-detail_main_div_aside-today'>
                    <svg className='container-detail_main_div_aside-today_svg' xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="currentColor" viewBox="0 0 16 16">
                        <circle cx="8" cy="8" r="8"/>
                    </svg>
                    <p className='container-detail_main_div_aside-today_p'>Llevalo hoy</p>
                </aside>
            </div>
            <div className='container-detail_main_div-description'>
                <h5 className='container-detail_main_div-description_h5'>D<span>escription</span> : </h5>
                <h4 className='container-detail_main_div-description_h4'>{product.description}</h4>
            </div>
            <div className='container-detail_main_div-btn'>
                <Link className='btn' href=''>CONSULTAR</Link>
            </div>
        </main>
    </div>
  )
}

export default ProductDetail