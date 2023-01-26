import React,{useEffect, useState} from 'react'
import {useNavigate} from 'react-router-dom'
import axios from 'axios'
import {ToastContainer,toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

function Signup() {

    let navigate = useNavigate()
    const [values, setValues] = useState({
        fullname:'',
        email: '',
        phone:'',
        dob:'',
        password: '',
      })
      const id = 'secret'
      const id2 = 'secret'

      const [formErrors, setFormErrors] = useState({});
      const [isSubmit, setIsSubmit] = useState(false)
  

      console.log(values)

      const validate = (values) =>{
        const errors = {}
        const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        const regexNum = /^[0-9 ]*$/
  
        if(!values.fullname){
            errors.fullname = 'full name is required!';
        }else if(values.fullname.length < 3){
            errors.fullname = 'full name must contains more than 3 characters'
        }

        if(!values.email){
         errors.email = 'email is required!';
        }else if(!regex.test(values.email)){
            errors.email = 'this is not a valid email'
        }

        if(!values.phone){
            errors.phone = 'mobile number is required!';
           }else if(values.phone.length < 10 || values.phone.length > 10){
            errors.phone = 'phone number must have 10 digits'
           }else if(!regexNum.test(values.phone)){
            errors.phone= 'this is not a valid phone number'
           }

        if(!values.password){
            errors.password = 'password is required!';
        } else if(values.password.length < 3){
            errors.password = 'password must contains atleast 3 characters'
        }
        
        if(!values.dob) {
            errors.dob = 'Date of birth is required'
        }
        return errors;
 
     }

      const submitHandler = async (e) => {
        e.preventDefault()
        setFormErrors(validate(values));
        setIsSubmit(true);
      }

      useEffect(()=>{

        if(Object.keys(formErrors).length === 0 && isSubmit ){

            axios.post("/auth/signup", {
                ...values, 
              }, { withCredentials: true }).then((data)=>{
                console.log(values,"valuessss")
                console.log(data,"userexist")
              if (data) {
                if (data.data.userExist) {
                  console.log('user existingggggg')
                  toast.error(`user already exists `, {
                    toastId:id,
                    theme:"light"           
                  });
            
                } else {
                    console.log('hellooo')
                    toast.success(`Successfully registered. Please login `, {
                    toastId:id2,
                    theme:"light"           
                  });
                 setTimeout(()=>{
                    navigate('/login')
                 },3000)
                }
              }
              })

        }
  
      },[formErrors])
   
  return (
    <React.Fragment>
     <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
            <div className="w-full p-6 m-auto bg-white rounded-md mt-10 mb-10 shadow-xl ring-2 ring-blue-900 lg:max-w-xl">
                <h1 onClick={()=>navigate('/')} className="text-3xl cursor-pointer font-semibold text-center text-blue-900 uppercase">
                   Sign up
                </h1>
                <form className="mt-6" onSubmit={(e) => { submitHandler(e) }}>
                <div className="mb-2">
                        <label
                            for="email"
                            className="block text-sm font-semibold text-gray-800"
                        >
                            Full Name
                        </label>
                        <input
                            onChange={(e) => setValues({ ...values, [e.target.name]: e.target.value })}
                            type="text"
                            name='fullname'
                            className="block w-full px-4 py-2 mt-2 text-blue-900 bg-white border rounded-md focus:border-blue-900 focus:ring-blue-900 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                    </div>
                    <p className='text-red-700'>{ formErrors.fullname }</p>
                    
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

                    <p className='text-red-700'>{ formErrors.email }</p>

                    <div className="mb-2">
                        <label
                            for="phone"
                            className="block text-sm font-semibold text-gray-800"
                        >
                            Mobile
                        </label>
                        <input
                            onChange={(e) => setValues({ ...values, [e.target.name]: e.target.value })}
                            type="tel"
                            name='phone'
                            className="block w-full px-4 py-2 mt-2 text-blue-900 bg-white border rounded-md focus:border-blue-900 focus:ring-blue-900 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                    </div>

                    <p className='text-red-700'>{ formErrors.phone }</p>
                
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

                    <p className='text-red-700'>{ formErrors.password }</p>

                    <div className="mb-2">
                        <label
                            for="dob"
                            className="block text-sm font-semibold text-gray-800"
                        >
                            Date Of Birth
                        </label>
                        <input
                            onChange={(e) => setValues({ ...values, [e.target.name]: e.target.value })}
                            type="date"
                            name='dob'
                            className="block w-full px-4 py-2 mt-2 text-blue-900 bg-white border rounded-md focus:border-blue-900 focus:ring-blue-900 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                    </div>
                    <p className='text-red-700'>{ formErrors.dob }</p>
                     
                    <a
                        href="#"
                        className="text-xs text-blue-900 hover:underline"
                    >
                        Forget Password?
                    </a>
                    <div className="mt-6">
                        <button type='submit' className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-blue-900 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-blue-900">
                            Sign up
                        </button>
                    </div>
                </form>

                <p className="mt-8 text-xs font-light text-center text-gray-700">
                    {" "}
                    Don't have an account?{" "}
                    <a
                        onClick={()=>navigate('/login')}
                        className="cursor-pointer font-medium text-blue-900 hover:underline"
                    >
                        Login
                    </a>
                </p> 
            </div>
            <ToastContainer/>
        </div>
        
     </React.Fragment>
  )
}


export default Signup


