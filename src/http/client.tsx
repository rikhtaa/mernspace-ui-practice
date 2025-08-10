import axios from "axios";
import { useAuthStore } from "../../store";

export const api = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL,
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
    }
})

const refreshToken = async() => {
    await api.post(`${import.meta.env.VITE_BASE_URL}/auth/refresh`),
    {},
     {
        withCredentials: true

     }
}

api.interceptors.response.use((response)=> response, async(error)=>{
    const originalRequest = error.config
  try {
    if(error.response.status === 401){
        const headers = {...originalRequest.headers}
        await refreshToken()
        return api.request({...originalRequest, headers})
    }
  } catch (err) {
    useAuthStore.getState().logout
     Promise.reject(err)
  }
  Promise.reject(error)
})