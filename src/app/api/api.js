import axios from "axios";

const api_url = process.env.API_GET_URL
const api_url_get_brandsAndTypes = process.env.API_GET_URL_BRANDS
const api_url_search = process.env.API_GET_SEARCH
const api_id = process.env.API_GET_ID

export const getAllProducts = async() => {
    try {
        const response = await axios.get(api_url)
        console.log(response)
        return response.data.products.docs
    } catch (error) {
        throw error
    }
}

export const getProductById = async(id) => {
    try {
        const response = await axios.get(api_id + `api/v1/products/filter/${id}`)
        return response.data
    } catch (error) {
        throw error
    }
}

export const getProdcutsCategory = async(page, brand, type, category) => {
    try {
        console.log(category);
        const response = await axios.get(api_url + `&page=${page}&sort=1&brand=${brand}&sub_category=${type}&category=${category}`)
        console.log(response);
        return response.data
    } catch (error) {
        throw error
    }
}

export const getBrands = async(category) => {
    try {
        const response = await axios.get(api_url_get_brandsAndTypes + `?category=${category}`)
        return response.data
    } catch (error) {
        throw error
    }
}

export const searchProducts = async(prefix) => {
    try {
        const response = await axios.get(api_url_search + `?search=${prefix}`)
        return response.data
    } catch (error) {
        throw error
    }
}