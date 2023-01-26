import React from 'react'
import useAuth from './useAuth'
import axios from 'axios'

function useRefresh() {
    const { setAuth } = useAuth();
    const refresh = async () => {
        const response = await axios.get('/refresh', {
            withCredentials: true
        });
        setAuth(prev => {
            
            return { ...prev, accessToken: response.data.accessToken }
        })
        return response.data.accessToken;
    }
  return refresh
}

export default useRefresh