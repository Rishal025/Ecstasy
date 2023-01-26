import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import SchoolIcon from '@mui/icons-material/School';
import AppsIcon from '@mui/icons-material/Apps';
import LanguageIcon from '@mui/icons-material/Language';
import InfoIcon from '@mui/icons-material/Info';

function CounselorProfile() {

    const [counselor, setCounselor] = useState();
    const [boolean, setBoolean] = useState();
    const [timeSlots, setTimeSlots] = useState([])
    const id = useParams()
    const navigate = useNavigate()
    console.log(id)

    useEffect(() => {

        axios.get(`/user/counselor_profile/${id.id}`).then((response) => {
            setCounselor(response.data);
            setTimeSlots(response.data.timeSlot);
        }).catch((err) => {
            console.log(err);
        })

    }, [])
    console.log(timeSlots);
    console.log(counselor);

    const [data, setData] = useState({})

    const handleTimeClick = (time, id) => {
        console.log(time)
        console.log(id)
        navigate('/sub_plans',{state:{counselor, time}})     
    }
    return (

        counselor && <section class="relative bg-blueGray-50">
            <div class="container mx-auto">
                <div class="flex flex-wrap items-center">
                    <div class="w-10/12 md:w-6/12 lg:w-4/12 px-12 md:px-4 mr-auto ml-auto">
                        <div class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg bg-pink-500">
                            <div>
                                <img alt="..." src="https://media.istockphoto.com/id/1207514066/photo/mature-counselor-listens-compassionately-to-unrecognizable-female-client.jpg?s=612x612&w=0&k=20&c=WKAXSwDdoK06BdZUeVbdXsWTlQU2s4MJSHj6R0vgJc4=" className="w-full align-middle rounded" />
                            </div>
                            <blockquote class="relative p-8 mb-4 text-center">
                                <svg preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 583 95" class="absolute left-0 w-full block h-95-px -top-60-px">
                                    <polygon points="-30,95 583,95 583,65" class="text-pink-500 fill-current"></polygon>
                                </svg>
                                <h2 class="text-3xl uppercase font-bold text-white">
                                    {counselor.fullname}
                                </h2>
                                <p class="text-xl font-light  text-white">
                                    {counselor.qualification}
                                </p>
                            </blockquote>
                        </div>
                    </div>

                    <div class="w-full md:w-6/12 px-4 mt-20">

                        <div class="flex flex-wrap">
                            <div class="w-full md:w-6/12 px-4">
                                <div class="relative flex flex-col mt-4">
                                    <div class="px-4 py-5 flex-auto">
                                        <div class="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                                            <SchoolIcon />
                                        </div>
                                        <h6 class="text-xl mb-1 font-semibold">Qualification</h6>
                                        <p class="mb-4 text-blueGray-500 text-xl">
                                            {counselor.qualification}
                                        </p>
                                    </div>
                                </div>
                                <div class="relative flex flex-col min-w-0">
                                    <div class="px-4 py-5 flex-auto">
                                        <div class="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                                            <LanguageIcon />
                                        </div>
                                        <h6 class="text-xl mb-1 font-semibold">
                                            Languages
                                        </h6>
                                        <p class="mb-4 text-blueGray-500 text-xl">
                                            English, Hindi, Malayalam
                                        </p>
                                    </div>
                                </div>

                            </div>

                            <div class="w-full md:w-6/12 px-4">

                                <div class="relative flex flex-col min-w-0 mt-4">
                                    <div class="px-4 py-5 flex-auto">
                                        <div class="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                                            <AppsIcon />
                                        </div>
                                        <h6 class="text-xl mb-1 font-semibold">Specializations</h6>
                                        <p class="mb-4 text-blueGray-500">
                                            {counselor.specializations}
                                        </p>
                                    </div>
                                </div>

                                <div class="relative flex flex-col min-w-0">
                                    <div class="px-4 py-5 flex-auto">
                                        <div class="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                                            <LanguageIcon />
                                        </div>
                                        <h6 class="text-xl mb-1 font-semibold">
                                            Experience
                                        </h6>
                                        <p class="mb-4 text-blueGray-500 text-xl">
                                            {counselor.experience} Years
                                        </p>
                                    </div>
                                </div>

                            </div>

                            <div class="w-full px-4">
                                <div class="relative flex flex-col min-w-0 mt-4">
                                    <div class="px-4 py-5 flex-auto">
                                        <div class="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                                            <InfoIcon />
                                        </div>
                                        <h6 class="text-xl mb-1 font-semibold">About</h6>
                                        <p class="mb-4 text-blueGray-500 text-xl">
                                           {counselor.about}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div class="w-full px-4 mb-10">
                                <div className='w-full h-60 mb-5 rounded-lg border-2 border-dashed border-gray-600'>
                                    <h5 className='text-lg font-semibold text-center mt-3'>TIME SLOTS FOR TOMORROW</h5>
                                    <div className='grid mt-5 md:grid-cols-3 sm:grid-cols-2 text-center'>
                                        { 
                                            timeSlots.map((element, i) => (
                                                <div className='w-20 h-12 ml-20 mt-5 bg_Color border-2 border-gray-600 rounded flex items-center justify-center hover:bg-slate-500 cursor-pointer'
                                                onClick={()=>handleTimeClick(element.time, counselor._id)}
                                                >
                                                    <p key={i}>{element.time}</p>
                                                </div>
                                            ))
                                        } 
                                        
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CounselorProfile