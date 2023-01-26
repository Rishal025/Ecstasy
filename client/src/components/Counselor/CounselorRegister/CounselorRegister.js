import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';


function CounselorRegister() {
    const navigate = useNavigate()
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false)
    const [values, setValues] = useState({
        fullname: '',
        email: '',
        phone: '',
        password: '',
        qualification: '',
        medicalRegNum: '',
        experience: '',
        specializations: '',
        languages: '',
        about: ''

    })

    console.log(values)

    const validate = (values) => {
        console.log('validate')
        console.log(values)
        const errors = {}
        const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        const regexNum = /^[0-9 ]*$/

        if (!values.fullname) {
            errors.fullname = 'full name is required!';
        } else if (values.fullname.length < 3) {
            errors.fullname = 'full name must contains more than 3 characters'
        }

        if (!values.email) {
            errors.email = 'email is required!';
        } else if (!regex.test(values.email)) {
            errors.email = 'this is not a valid email'
        }

        if (!values.phone) {
            errors.phone = 'mobile number is required!';
        } else if (values.phone.length < 10 || values.phone.length > 10) {
            errors.phone = 'phone number must have 10 digits'
        } else if (!regexNum.test(values.phone)) {
            errors.phone = 'this is not a valid phone number'
        }

        if (!values.password) {
            errors.password = 'password is required!';
        } else if (values.password.length < 3) {
            errors.password = 'password must contains atleast 3 characters'
        }
        if (!values.qualification) {
            errors.qualification = 'qualification is required!';
        }
        if (!values.medicalRegNum) {
            errors.medicalRegNum = 'medical registration number is required!';
        }
        if (!values.experience) {
            errors.experience = 'experience is required!';
        }
        if (!values.specializations) {
            errors.specializations = 'specializations are required!';
        }

        return errors;

    }

    const submitHandler = async (e) => {
        e.preventDefault()
        setFormErrors(validate(values));
        setIsSubmit(true);
    }

    useEffect(() => {
        if (Object.keys(formErrors).length === 0 && isSubmit) {
            axios.post("/auth/counselor_reg", {
                ...values,
            }, { withCredentials: true }).then((data) => {
                if (data) {
                    if (data.data.userExist) {
                        console.log('user existingggggg')
                        toast.error(`Counselor already exists `, {
                            toastId: id,
                            theme: "light"
                        });

                    } else {
                        console.log('hellooo')
                        toast.success(`Successfully requested`, {
                            toastId: id2,
                            theme: "light"
                        })
                        setTimeout(() => {
                            navigate('/counselor_req')
                        }, 3000)
                    }
                }
            }).catch((e) => {
                console.log(e)
            })
        }
    }, [formErrors])

    const id = 'secret'
    const id2 = 'secret'


    return (
        <React.Fragment>
            <div className="relative flex flex-col justify-center min-h-screen overflow-hidden mt-10 mb-10">
                <div className="w-full p-6 m-auto bg-white rounded-md shadow-xl ring-2 ring-blue-900 lg:max-w-xl">
                    <h1 className="text-3xl font-semibold text-center text-blue-900 uppercase">
                        Counselor Registration
                    </h1>
                    <form className="mt-6" onSubmit={submitHandler}>
                        <div className="mb-2">
                            <label
                                for="text"
                                className="block text-sm font-semibold text-gray-800"
                            >
                                Full Name
                            </label>
                            <input
                                name='fullname'
                                onChange={(e) => setValues({ ...values, [e.target.name]: e.target.value })}
                                type="text"
                                className="block w-full px-4 py-2 mt-2 text-blue-900 bg-white border rounded-md focus:border-blue-900 focus:ring-blue-900 focus:outline-none focus:ring focus:ring-opacity-40"
                            />
                        </div>
                        <p className='text-red-700'>{formErrors.fullname}</p>

                        <div className="mb-2">
                            <label
                                for="email"
                                className="block text-sm font-semibold text-gray-800"
                            >
                                Email
                            </label>
                            <input
                                name='email'
                                type="email"
                                onChange={(e) => setValues({ ...values, [e.target.name]: e.target.value })}
                                className="block w-full px-4 py-2 mt-2 text-blue-900 bg-white border rounded-md focus:border-blue-900 focus:ring-blue-900 focus:outline-none focus:ring focus:ring-opacity-40"
                            />
                        </div>
                        <p className='text-red-700'>{formErrors.email}</p>

                        <div className="mb-2">
                            <label
                                for="mobileNumber"
                                className="block text-sm font-semibold text-gray-800"
                            >
                                Mobile Number
                            </label>
                            <input
                                name='phone'
                                type="tel"
                                onChange={(e) => setValues({ ...values, [e.target.name]: e.target.value })}
                                className="block w-full px-4 py-2 mt-2 text-blue-900 bg-white border rounded-md focus:border-blue-900 focus:ring-blue-900 focus:outline-none focus:ring focus:ring-opacity-40"
                            />
                        </div>
                        <p className='text-red-700'>{formErrors.phone}</p>

                        <div className="mb-2">
                            <label
                                for="password"
                                className="block text-sm font-semibold text-gray-800"
                            >
                                Password
                            </label>
                            <input
                                name='password'
                                type="password"
                                onChange={(e) => setValues({ ...values, [e.target.name]: e.target.value })}
                                className="block w-full px-4 py-2 mt-2 text-blue-900 bg-white border rounded-md focus:border-blue-900 focus:ring-blue-900 focus:outline-none focus:ring focus:ring-opacity-40"
                            />
                        </div>
                        <p className='text-red-700'>{formErrors.password}</p>

                        <div class="justify-center">
                            <label
                                for="mobileNumber"
                                className="block text-sm font-semibold text-gray-800"
                            >
                                Qualification
                            </label>
                            <div class="mb-3 mt-3">
                                <select class="form-select appearance-none
                                block
                                w-full
                                px-3
                                py-1.5
                                text-base
                                font-normal
                                text-gray-700
                                bg-white bg-clip-padding bg-no-repeat
                                border border-solid border-gray-300
                                rounded
                                transition
                                ease-in-out
                                m-0
                                focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" aria-label="Default select example" name='qualification'
                                    onChange={(e) => setValues({ ...values, [e.target.name]: e.target.value })}
                                >
                                    <option selected>Choose your Qualification</option>
                                    <option value="Msc.Psychology">Msc.Psychology</option>
                                    <option value="Msc.Sexology">Msc.Sexology</option>
                                    <option value="Msc in psychological sciences">Msc in psychological sciences</option>
                                    <option value="Masters in family therapy">MSc Global Mental Health and Wellbeing</option>

                                </select>
                            </div>
                        </div>
                        <p className='text-red-700'>{formErrors.qualification}</p>

                        <div class="justify-center">
                            <label
                                for="experience"
                                className="block text-sm font-semibold text-gray-800"
                            >
                                Experience
                            </label>
                            <div class="mb-3 mt-3">
                                <select class="form-select appearance-none
                                block
                                w-full
                                px-3
                                py-1.5
                                text-base
                                font-normal
                                text-gray-700
                                bg-white bg-clip-padding bg-no-repeat
                                border border-solid border-gray-300
                                rounded
                                transition
                                ease-in-out
                                m-0
                                focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" aria-label="Default select example"
                                    name='experience'
                                    onChange={(e) => setValues({ ...values, [e.target.name]: e.target.value })}
                                >

                                    <option selected>Choose your experience</option>
                                    <option value="0-1">0-1 Years</option>
                                    <option value="1-3">1-3 Years</option>
                                    <option value="3-5">3-5 Years</option>
                                    <option value="5 or Above">5 or Above</option>

                                </select>
                            </div>
                        </div>
                        <p className='text-red-700'>{formErrors.experience}</p>

                        <div class="justify-center">
                            <label
                                for="mobileNumber"
                                className="block text-sm font-semibold text-gray-800"
                            >
                                Specializations
                            </label>
                            <div class="mb-3 mt-3">
                                <select class="form-select appearance-none
                                block
                                w-full
                                px-3
                                py-1.5
                                text-base
                                font-normal
                                text-gray-700
                                bg-white bg-clip-padding bg-no-repeat
                                border border-solid border-gray-300
                                rounded
                                transition
                                ease-in-out
                                m-0
                                focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" aria-label="Default select example"
                                    name='specializations'
                                    onChange={(e) => setValues({ ...values, [e.target.name]: e.target.value })}
                                >
                                    <option selected>Choose your Specialization</option>
                                    <option value="Stress">Stress</option>
                                    <option value="Depression">Depression</option>
                                    <option value="Anxiety">Anxiety</option>
                                    <option value="Relationship issues">Relationship issues</option>
                                    <option value="LGBTQ">LGBTQ</option>
                                </select>
                            </div>
                        </div>
                        <p className='text-red-700'>{formErrors.specializations}</p>

                        <div className="mb-2">
                            <label
                                for="medicalRegNum"
                                className="block text-sm font-semibold text-gray-800"
                            >
                                Medical registration number
                            </label>
                            <input
                                onChange={(e) => setValues({ ...values, [e.target.name]: e.target.value })}
                                type="number"
                                name='medicalRegNum'
                                className="block w-full px-4 py-2 mt-2 text-blue-900 bg-white border rounded-md focus:border-blue-900 focus:ring-blue-900 focus:outline-none focus:ring focus:ring-opacity-40"
                            />
                        </div>
                        <p className='text-red-700'>{formErrors.medicalRegNum}</p>

                        <div className="mb-2">
                            <label
                                for="languages"
                                className="block text-sm font-semibold text-gray-800"
                            >
                                Languages
                            </label>
                            <input
                                onChange={(e) => setValues({ ...values, [e.target.name]: e.target.value })}
                                type="text"
                                name='languages'
                                className="block w-full px-4 py-2 mt-2 text-blue-900 bg-white border rounded-md focus:border-blue-900 focus:ring-blue-900 focus:outline-none focus:ring focus:ring-opacity-40"
                            />
                        </div>
                        <div className="mb-2">
                            <label
                                for="about"
                                className="block text-sm font-semibold text-gray-800"
                            >
                                About
                            </label>
                            <textarea
                                name='about'
                                type="text"
                                onChange={(e) => setValues({ ...values, [e.target.name]: e.target.value })}
                                className="block w-full px-4 py-2 mt-2 text-blue-900 bg-white border rounded-md focus:border-blue-900 focus:ring-blue-900 focus:outline-none focus:ring focus:ring-opacity-40"
                            />
                        </div>


                        <div className="mt-6">
                            <button type='submit' className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-blue-900 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-blue-900">
                                Submit
                            </button>
                        </div>
                    </form>

                    <p className="mt-8 text-xs font-light text-center text-gray-700">
                        {" "}
                        already registered?{" "}
                        <a
                            onClick={() => navigate('/counselor_login')}
                            className="cursor-pointer font-medium text-blue-900 hover:underline"
                        >
                            Sign in
                        </a>
                    </p>
                </div>
                <ToastContainer />
            </div>

        </React.Fragment>
    )
}

export default CounselorRegister