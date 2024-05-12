'use client'
import Card from '@/app/components/card/Card'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Filters from './components/Filters';

const page = ({params}) => {
  const {category} = params
  const [types, setTypes] = useState([]);
  const [products, setProducts] = useState([]);
  const [selectType, setSelectType] = useState([]);
  const [selectBrand, setSelectBrand] = useState([]);
  const [brand, setBrand] = useState([]);
  
  const uniqueBrands = new Set(products.map(product => product.brand));

  useEffect(()=> {
    const fetchData = async() => {
        const response = await axios.get(`http://127.0.0.1:3000/api/v1/products?limit=5&page=1&sort=1&brand=${selectBrand}&sub_category=${selectType}&category=${category}`);
        if(response.data.success){
          setProducts(response.data.products.docs)
        }
    }
    fetchData()
  }, [selectType, selectBrand])

  useEffect(() => {
    if(brand.length == 0){
      const uniqueBrands = new Set(products.map(product => product.brand));
      setBrand(Array.from(uniqueBrands).map(brand => ({ name: brand })));

      const uniqueSubCategory = new Set(products.map(product => product.sub_category));
      setTypes(Array.from(uniqueSubCategory).map(sub_category => ({name: sub_category})))
      console.log(uniqueSubCategory)
    }
  },[products])
  return (
    <div>
      <Filters  setSelectType={setSelectType}
                selectType={selectType}
                setSelectBrand={setSelectBrand}
                selectBrand={selectBrand}
                types={types}
                brand={brand} />
      <Card products={products} />
    </div>
  )
}

export default page