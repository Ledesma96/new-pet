/** @type {import('next').NextConfig} */
const nextConfig = {
    env:{
        'API_GET_ID': 'https://new-pet-nest.onrender.com/',
       'API_GET_URL': 'https://new-pet-nest.onrender.com/api/v1/products?limit=8',
       'API_GET_URL_BRANDS': 'https://new-pet-nest.onrender.com/api/v1/products/brands',
       'API_GET_SEARCH': 'https://new-pet-nest.onrender.com/api/v1/products/search',
    }
};

export default nextConfig;
