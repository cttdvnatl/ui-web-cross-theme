import axios from 'axios';

const instance = (baseURL) => axios.create({
    baseURL: 'localhost:3000',
});

export default instance;