import { refreshToken } from "./AuthService";
import AsyncStorage from '@react-native-async-storage/async-storage';

const axios = require('axios');
export const axiosApiInstance = axios.create();

// Request interceptor for API calls
axiosApiInstance.interceptors.request.use(
    async (config: any )=> {
      config.headers = {
        'Authorization': `Bearer ${await AsyncStorage.getItem("token")}`,
      }
      return config;
    },
    (error:any) => {
      Promise.reject(error)
  });

// Response interceptor for API calls
axiosApiInstance.interceptors.response.use((response : any) => {
  return response
}, async function (error :any) {
  const originalRequest = error.config;
  if (error.response.status === 401 && !originalRequest._retry) {
    originalRequest._retry = true;
    let token= await AsyncStorage.getItem("token");
    let refeshToken=  await AsyncStorage.getItem("refeshToken");
    let tokens: any= await refreshToken({access_token: token, refresh_token: refeshToken});
    axios.defaults.headers.common['Authorization'] = 'Bearer ' + tokens.access_token;
    await AsyncStorage.setItem("token", tokens.access_token)
    await AsyncStorage.setItem("refeshToken", tokens.refresh_token)
    return axiosApiInstance(originalRequest);
  }
  return Promise.reject(error);
});
