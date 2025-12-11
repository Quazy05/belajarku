// contoh axios
import axios from 'axios';

const API = axios.create({
  baseURL: 'http://<YOUR_SERVER_IP_OR_DOMAIN>:5000/api',
  timeout: 10000
});

// login
const login = async (email, password) => {
  const res = await API.post('/auth/login', { email, password });
  // simpan token ke secure storage di mobile (expo-secure-store / AsyncStorage)
  return res.data;
};
