import axios from 'axios';

const clothesApi = axios.create({
  baseURL: '/api', 
});

export default clothesApi;
