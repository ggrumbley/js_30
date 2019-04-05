import axios from 'axios';

const api = axios.create({
  baseURL: 'https://burgertime-c63d9.firebaseio.com/',
});

export default api;
