import axios from 'axios';

// configuring axios
const api = axios.create({
  baseURL: 'http://localhost:3333',
});

export default api;
