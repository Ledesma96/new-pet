'use client'
import Card from '@/app/components/card/Card'
import React, { useEffect, useState } from 'react'
import Filters from './components/Filters';
import Paginate from './components/Paginate';
import { getBrands, getProdcutsCategory } from '@/app/api/api';

const page = ({params}) => {
  const {category} = params
  const [types, setTypes] = useState([]);
  const [products, setProducts] = useState([]);
  const [selectType, setSelectType] = useState([]);
  const [selectBrand, setSelectBrand] = useState([]);
  const [brand, setBrand] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [nextPage, setNextPage] = useState();
  const [prevPage, setPrevPage] = useState();

  useEffect(()=> {
    const fetchData = async() => {
        const response = await getProdcutsCategory(page, selectBrand, selectType, category)
        if(response.success){
          setProducts(response.products.docs)
          setNextPage(response.products.nextPage)
          setPrevPage(response.products.prevPage)
          setTotalPages(response.products.totalPages)
        }
    }
    fetchData()
  }, [selectType, selectBrand, page])

  useEffect(() => {
    const fetchDataBrandsAndSubCategories = async() =>{
      const response = await getBrands(category)
      if(response.success){
        setBrand(response.data.brands)
        setTypes(response.data.sub_categories)
      }
    }
    fetchDataBrandsAndSubCategories()
  },[category])

  return (
    <div className='container-products-category'>
      <Filters  setSelectType={setSelectType}
                selectType={selectType}
                setSelectBrand={setSelectBrand}
                selectBrand={selectBrand}
                types={types}
                brand={brand} />
      <Card products={products} />
      <Paginate page={page}
                setPage={setPage}
                totalPages={totalPages}
                nextPage={nextPage}
                prevPage={prevPage} />
    </div>
  )
}

export default page