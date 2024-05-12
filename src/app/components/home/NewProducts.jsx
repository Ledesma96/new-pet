'use client'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Card from '../card/Card'

const NewProducts = () => {
    const [ products, setProducts] = useState([])
    const [ loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://127.0.0.1:3000/api/v1/products?limit=5&page=1&sort=1');
                setProducts(response.data.products.docs);
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