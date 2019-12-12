import axios from 'axios'
import { apiUrl } from '../config/baseConfig'

import LocalStorageService from './LocalStorageService'
axios.defaults.baseURL = apiUrl;
axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
axios.defaults.xsrfCookieName = "csrftoken";
axios.defaults.withCredentials = true;
  
axios.interceptors.request.use(
  config => {
    const token = LocalStorageService.getAccessToken();
    if(token) {
      config.headers['Authorization'] = 'Bearer ' + token;
    }
    config.headers['Content-Type'] = 'application/json';
    return config
  },
  error => {
    Promise.reject(error)
  }
);

axios.interceptors.response.use((response) => {
  return response
}, function(error) {
  const originalRequest = error.config;
  if(error.response.status === 401 && !originalRequest._retry) {
    originalRequest._retry = true;
    console.log("Refresh Token => ", localStorage.getItem('refresh'))
    return axios.post('/auth/token/refresh/', 
    {
      "refresh": LocalStorageService.getRefreshToken()
    })
    .then(res => {
      if(res.status === 200) {
        LocalStorageService.refreshToken(res.data)
        axios.defaults.headers.common['Authorization'] = 'Bearer ' + LocalStorageService.getAccessToken();
        return axios(originalRequest);
      }
    })
  }
  return Promise.reject(error);
}); 

export default axios