'use client'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Card from '../card/Card'
import { getAllProducts } from '@/app/api/api'

const NewProducts = () => {
    const [ products, setProducts] = useState([])
    const [ loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await getAllProducts();
                console.log(response)
                setProducts(response);
            } catch (error) {
                console.log('Error fetching products:', error);
            }
        };
    
        fetchData();
    }, []);

    useEffect(() => {
        console.log(products);
    }, [products])
    
  return (
    <div className='container-newProducts'>
        <h2 className='container-newProducts_h2'>Nuevos ingresos</h2>
        <Card products = {products}/>
    </div>
  )
}

export default NewProducts