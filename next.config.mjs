/** @type {import('next').NextConfig} */
const nextConfig = {
    env:{
       'API_GET_URL': 'http://127.0.0.1:3000/api/v1/products?limit=8',
       'API_GET_URL_BRANDS': 'http://127.0.0.1:3000/api/v1/products/brands'
    }
};

export default nextConfig;
