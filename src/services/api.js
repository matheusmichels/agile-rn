import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';

// configuring axios
const api = axios.create({
  baseURL: 'http://localhost:3333',
});

// setting user token in requests
api.interceptors.request.use(
  function configure(config) {
    const token = AsyncStorage.getItem('token');

    if (token != null) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  function error(err) {
    return Promise.reject(err);
  }
);

export default api;
