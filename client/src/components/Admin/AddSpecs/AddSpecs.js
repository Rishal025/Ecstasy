import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function AddSpecs() {

    const [values, setValues] = useState('');
    const navigate = useNavigate();

    console.log(values)

    const handleSubmit = (e) =>{
        console.log('submit')
        axios.post("/admin/add_specs", {
            ...values, 
          }, { withCredentials: true }).then((data)=>{
              console.log(data);
              navigate('/admin');
          }).catch((e)=>{
            console.log(e)
          })



    }

    return (
        <React.Fragment>
            <div>
                <form action="" onSubmit={(e) => { handleSubmit(e) }}>
                    <div className="mb-2">
                        <label
                            for="specs"
                            className="block text-sm font-semibold text-gray-800"
                        >
                            Specialization
                        </label>
                        <input
                            onChange={(e) => setValues({ ...values, [e.target.name]: e.target.value })}
                            type="text"
                            name="specs"
                            className="block w-full px-4 py-2 mt-2 text-blue-900 bg-white border rounded-md focus:border-blue-900 focus:ring-blue-900 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                    </div>

                    <div className="mb-2">
                        <label
                            for="specLogo"
                            className="block text-sm font-semibold text-gray-800"
                        >
                            Logo
                        </label>
                        <input
                            onChange={(e) => setValues({ ...values, [e.target.name]: e.target.value })}
                            type="file"
                            name="specLogo"
                            className="block w-full px-4 py-2 mt-2 text-blue-900 bg-white border rounded-md focus:border-blue-900 focus:ring-blue-900 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                    </div>

                    <div className="mt-6 text-center">
                        <button type='submit' className="h-10 text-base w-60 px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-blue-900 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-blue-900">
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </React.Fragment>
    )
}

export default AddSpecs