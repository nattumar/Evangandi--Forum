import axios from 'axios';

const api = axios.create({
  baseURL: 'https://evangandi-forum.onrender.com/api',

});


export default api;
