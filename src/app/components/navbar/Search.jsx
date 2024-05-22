'use client'
import { searchProducts } from '@/app/api/api';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

const Search = () => {
    const [products, setProducts] = useState([]);
    const [prefix, setPrefix] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            if (prefix === '') {
                setProducts([]);
                return;
            }

            const response = await searchProducts(prefix);
            if (response.success) {
                setProducts(response.products);
            }
        };

        fetchData();
    }, [prefix]);

    return (
        <div className='navbar-desktop_search'>
            <div className="search-container">
                <div className="search-input-container">
                    <input onChange={(e) => setPrefix(e.target.value)} placeholder='Buscar...' className="search-input"></input>
                    <div className="search-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
                        </svg>
                    </div>
                </div>
                <section className='navbar-desktop_search-result'>
                    {products.map(product => (
                        <Link href={`/detail/${product._id}`}className='navbar-desktop_search-result_link' key={product._id}>
                            <img width={40} src={'https://new-pet-nest.onrender.com' + product.images[0]} alt={product.name}/>
                            <p>{product.name}</p>
                        </Link>
                    ))}
                </section>
            </div>
        </div>
    );
}

export default Search;
