import useAuth from './useAuth'
import axios from 'axios'
import useAuthCounselor from './useAuthCounselor';

function useRefreshCounselor() {
    const { setAuth } = useAuthCounselor();
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

export default useRefreshCounselor