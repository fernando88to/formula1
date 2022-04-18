import axios from 'axios';

const http = axios.create({
   //baseURL: process.env.BACKEND_HOST ?? 'http://0.0.0.0:8080/backend',
   baseURL: 'http://localhost/backend',
});


export default http;