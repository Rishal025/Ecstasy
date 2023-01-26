import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import {ToastContainer,toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

function AdminLogin() {
    const [values, setValues] = useState({
        email: '',
        password:'',
    })

    console.log(values)

    const id = 'secret'
    const id2 = 'secret'
    let navigate = useNavigate()

    const submitHandler = async (event) => {
        event.preventDefault();
        try {
          
          const { data } = await axios.post(
            "/auth/admin_login",
            {
              ...values,
            },
            { withCredentials: true }
          );
          
          if (data.notFound) {
            console.log('not found')
            toast.error("Email not valid", {
              toastId:id,
              theme:"light"           
            });
          }else if(data.passwordNotMatch){
            console.log('pass not matching')
            toast.error("Password not matching", {
              toastId:id,
              theme:"light"           
            });
          }else{   
            navigate("/admin");
          }
          
        } catch (ex) {
          console.log('errrrrorrr')
          console.log(ex);
        }
      };
  return (
   <React.Fragment>
     <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
            <div className="w-full p-6 m-auto bg-white rounded-md shadow-xl  ring ring-2 ring-blue-900 lg:max-w-xl">
                <h1 onClick={()=>navigate('/admin')} className="text-3xl cursor-pointer font-semibold text-center text-blue-900 uppercase">
                   Admin Login
                </h1>
                <form onSubmit={(e) => { submitHandler(e) }} className="mt-6">
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
                            name="email"
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
                        onClick={()=>navigate('/signup')}
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


export default AdminLogin