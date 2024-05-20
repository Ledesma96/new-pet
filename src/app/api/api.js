import axios from "axios";

const api_url = process.env.API_GET_URL
const api_url_get_brandsAndTypes = process.env.API_GET_URL_BRANDS

export const getAllProducts = async() => {
    try {
        const response = await axios.get(api_url)
        console.log(response)
        return response.data.products.docs
    } catch (error) {
        throw error
    }
}

export const getProdcutsCategory = async(page, brand, type, category) => {
    try {
        const response = await axios.get(api_url + `&page=${page}&sort=1&brand=${brand}&sub_category=${type}&category=${category}`)
        return response
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