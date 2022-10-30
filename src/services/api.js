import axios from "axios";

const api = process.env.REACT_APP_IBM_API;

const app = axios.create({
    baseURL: api,
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
    },
    withCredentials: true
})

export default app;