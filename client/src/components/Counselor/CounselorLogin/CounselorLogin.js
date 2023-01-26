import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import {ToastContainer,toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import useAuthCounselor from '../../../hooks/useAuthCounselor';
import Cookies from 'js-cookie';


function CounselorLogin() {
    const navigate = useNavigate()
    const [values, setValues] = useState({
        email: '',
        password:'',
    })

    const {setAuth} = useAuthCounselor();

    const id = 'secret'
    const id2 = 'secret'

    const handleSubmit = (e) =>{
        e.preventDefault();
        axios.post("/auth/counselor/login", {...values,},{ withCredentials: true } ).then((data)=>{

            if (data.data.notFound) {
                console.log('not found')
                toast.error("User not found", {
                  toastId:id,
                  theme:"light"           
                });
              }else if(data.data.passwordNotMatch){
                console.log('pass not matching')
                toast.error("Password not matching", {
                  toastId:id,
                  theme:"light"           
                });
              }else if(data.data.status == 'requested' ){   
                console.log("rejected page")
                navigate("/counselor/requested");
              }else if(data.data.status == 'rejected'){
                toast.error("Sorry! your request has been rejected", {
                    toastId:id,
                    theme:"light"           
                  });
              }
              
              else{
                console.log('login')
                Cookies.set('jwt', data.data.refreshToken, {expires: 7});
                setAuth({ accessToken: data.data.accessToken })
                navigate('/counselor')
              }
        })
    }

    console.log(values)
  return (
    <React.Fragment>
     <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
            <div className="w-full p-6 m-auto bg-white rounded-md shadow-xl  ring ring-2 ring-blue-900 lg:max-w-xl">
                <h1 className="text-3xl font-semibold text-center text-blue-900  uppercase ">
                   Counselor Login
                </h1>
                <form className="mt-6" onSubmit={handleSubmit}>
                    <div className="mb-2">
                        <label
                            for="email"
                            className="block text-sm font-semibold text-gray-800"
                        >
                            Email
                        </label>
                        <input
                             onChange={(e) => setValues({ ...values, [e.target.name]: e.target.value })}
                            type="email"
                            name='email'
                            className="block w-full px-4 py-2 mt-2 text-blue-900 bg-white border rounded-md focus:border-blue-900 focus:ring-blue-900 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                    </div>
                    <div className="mb-2">
                        <label
                            for="password"
                            className="block text-sm font-semibold text-gray-800"
                        >
                            Password
                        </label>
                        <input
                            onChange={(e) => setValues({ ...values, [e.target.name]: e.target.value })}
                            type="password"
                            name='password'
                            className="block w-full px-4 py-2 mt-2 text-blue-900 bg-white border rounded-md focus:border-blue-900 focus:ring-blue-900 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                    </div>
                    <a
                        href="#"
                        className="text-xs text-blue-900 hover:underline"
                    >
                        Forget Password?
                    </a>
                    <div className="mt-6">
                        <button type='submit' className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-blue-900 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-blue-900">
                            Login
                        </button>
                    </div>
                </form>

                <p className="mt-8 text-xs font-light text-center text-gray-700">
                    {" "}
                    Don't have an account?{" "}
                    <a
                        onClick={()=>navigate('/counselor_reg')}
                        className="cursor-pointer font-medium text-blue-900 hover:underline"
                    >
                        Sign up
                    </a>
                </p>
            </div>
            <ToastContainer/>
        </div>
   </React.Fragment>
  )
}

export default CounselorLogin