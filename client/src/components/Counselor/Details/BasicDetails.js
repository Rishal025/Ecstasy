import React, { useState } from 'react'
import useAuthCounselor from '../../../hooks/useAuthCounselor'
import jwtDecode from 'jwt-decode';

function BasicDetails() {

   
    const { auth } = useAuthCounselor();
    console.log('hello');
    console.log(auth);
    const userDetails = jwtDecode(auth.accessToken);
    console.log(userDetails);

    const [counselor, setCounselor] = useState({

        id: userDetails.userInfo.others._id,
        name: userDetails.userInfo.others.fullname,
        email: userDetails.userInfo.others.email,
        phone: userDetails.userInfo.others.phone,
        experience: userDetails.userInfo.others.experience,
        qualification: userDetails.userInfo.others.qualification,
        specialization: [userDetails.userInfo.others.specializations]

    })

    return (
        <div class="p-16">
            <div class="p-8 bg-white shadow">
                <div class="grid grid-cols-1 md:grid-cols-1">
                    <div class="relative">
                        <div class="w-48 h-48 bg-indigo-100 mx-auto rounded-full shadow-2xl absolute inset-x-0 top-0 -mt-24 flex items-center justify-center text-indigo-500">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-24 w-24" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd" />
                            </svg>
                        </div>
                    </div>
                </div>

                <div class="mt-40 text-left flex justify-center mx-auto border-b pb-12">
                    <form className="mt-6">
                        <div className="mb-2">
                            <label
                                for="fullname"
                                className="block text-sm font-medium text-gray-800"
                            >
                                Full Name
                            </label>
                            <input
                                value={counselor.name}
                                type="text"
                                className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                                name='fullname'
                            />
                        </div>
                        <div className="mb-2">
                            <label
                                for="email"
                                className="block text-sm font-semibold text-gray-800"
                            >
                                Email
                            </label>
                            <input
                                value={counselor.email}
                                type="email"
                                name='email'
                                className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                            />
                        </div>
                        <div className="mb-2">
                            <label
                                for="phone"
                                className="block text-sm font-semibold text-gray-800"
                            >
                                Phone
                            </label>
                            <input
                                value={counselor.phone}
                                type="tel"
                                name='phone'
                                className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                            />
                        </div>
                        <div className="mb-2">
                            <label
                                for="specs"
                                className="block text-sm font-semibold text-gray-800"
                            >
                                Specializations
                            </label>
                            <input
                                value={counselor.specialization}
                                type="text"
                                className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                                name='specs'
                            />
                        </div>
                        <div className="mb-2">
                            <label
                                for="experience"
                                className="block text-sm font-semibold text-gray-800"
                            >
                                Experience
                            </label>
                            <input
                                value={counselor.experience}
                                type="text"
                                className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                                name='experience'
                            />
                        </div>
                        <div className="mb-2">
                            <label
                                for="languages"
                                className="block text-sm font-semibold text-gray-800"
                            >
                                Languages
                            </label>
                            <input
                                type="text"
                                className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                                name='languages'
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
                                className="block w-full px-4 py-2 mt-2 text-blue-900 bg-white border rounded-md focus:border-blue-900 focus:ring-blue-900 focus:outline-none focus:ring focus:ring-opacity-40"
                            />
                        </div>
                        <div className="mt-6">
                            <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600">
                                Save Changes
                            </button>
                        </div>
                    </form>

                </div>

            </div>
        </div>
    )
}

export default BasicDetails