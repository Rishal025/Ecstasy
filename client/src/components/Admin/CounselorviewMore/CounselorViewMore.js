import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

function CounselorViewMore() {

    const [counselor, setCounselor] = useState({});
    const params = useParams();

    useEffect(() => {
        axios.get(`/admin/counselor_details/${params.counselorId}`).then((response) => {
            setCounselor(response.data)
        }).catch((e) => {
            console.log(e)
        })
    }, [counselor])

  return (
    <section class="bg-white dark:bg-gray-900 w-full">
            <div class="py-8 px-4 mx-auto lg:py-16 lg:px-6">
                <div className='grid gap-8 lg:grid-cols-2'>
                    <article class="p-6 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                        <h2 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"><a href="#">{counselor.fullname}</a></h2>
                        <p class="mb-5 font-light text-gray-500 dark:text-gray-400">Email - {counselor.email}</p>
                        <p class="mb-5 font-light text-gray-500 dark:text-gray-400">Mobile - {counselor.phone}</p>
                        <p class="mb-5 font-light text-gray-500 dark:text-gray-400">About - {counselor.about}</p>
                        <div class="space-x-8 flex justify-between md:mt-0 md:justify-center">
{/*                          
                        <button
                            class="text-white py-2 px-4 uppercase rounded bg-blue-400 hover:bg-blue-500 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5 mr-5"
                            // onClick= {() => {if(window.confirm('Are you sure, do you want to approve?')){approve(counselor._id)}}}
                        
                        >
                            Approve
                        </button> */}
                         
                    </div>
                    </article>

                    <article class="p-6 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                        <p class="mb-5 font-light text-gray-500 dark:text-gray-400">Qualification - {counselor.qualification}</p>
                        <p class="mb-5 font-light text-gray-500 dark:text-gray-400">Experience - {counselor.experience}</p>
                        <p class="mb-5 font-light text-gray-500 dark:text-gray-400">Registration - {counselor.medicalRegNum}</p>
                        <p class="mb-5 font-light text-gray-500 dark:text-gray-400">Specialization - {counselor.specializations}</p>
                    </article>
                </div>
            </div>
        </section>
  )
}

export default CounselorViewMore