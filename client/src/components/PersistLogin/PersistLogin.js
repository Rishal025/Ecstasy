import React, { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import useRefresh from '../../hooks/useRefresh'
import useAuth from '../../hooks/useAuth'
import HashLoader from 'react-spinners/HashLoader'

function PersistLogin() {
  
    const [isLoading, setIsLoading] = useState(true)
    const refresh = useRefresh();
    const {auth} = useAuth();
    console.log('persist login');
    console.log(auth)
    let [color, setColor] = useState("#000000");

    useEffect(()=>{
        const verifyRefreshToken = async () => {
            try{
                await refresh();
            }
            catch(err) {
                console.log(err);
            }
            finally {
                setIsLoading(false)
            }
        }

        !auth?.accessToken ? verifyRefreshToken(): setIsLoading(false);
    },[])

  return (
    <>
     {
        isLoading ? <div>
                        <div className='spinning'>
                            <HashLoader
                            color={color}
                            loading={isLoading}
                            size={150}
                            aria-label="Loading Spinner"
                            data-testid="loader"
                            />
                        </div>
                   </div>
                  : <Outlet/>
     }
    </>
  )
}

export default PersistLogin