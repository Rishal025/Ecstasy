import React, { useState } from 'react'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

function Specs() {

    const [img, setImg] = useState('https://capefearfamilylaw.com/wp-content/uploads/Mental-Health-and-Support-Groups.jpg')
    return (
        <div className='w-full h-screen mt-24'>
            <div className='w-full h-[700px] bg-gray-900/90 absolute'>
                <img className='w-full h-full object-cover mix-blend-overlay' src={img} alt="" />
            </div>

            <div className='max-w-[1240] mx-auto text-white relative '>
                <div className='px-4 py-12'>
                    <h2 className='text-3xl pt-8 text-slate-300 uppercase text-center'>Specializations</h2>
                    <h3 className='text-5xl font-bold py-6 text-center'>Finding your problems and the best counselors</h3>
                </div>

                <div className='grid grid-cols-1 lg:grid-cols-3 relative gap-x-3 gap-y-16 px-4 pt-12 sm:pt-20 text-black'>
                    <div className='bg-white rounded-xl shadow-2xl text-center transform transition hover:scale-110 cursor-pointer duration-700'>
                        <div className='p-8'>
                            <div className='w-20 h-20 mx-auto'>
                                <img src="https://cdn-icons-png.flaticon.com/512/2622/2622142.png" alt="" />
                            </div>
                            <h3 className='font-bold text-2xl my-6'>Depression</h3>
                            <p className='text-gray-600 text-xl'>persistent feeling of sadness and loss of interest</p>
                        </div>
                        <div className='bg-slate-100 pl-8 py-4'>
                            <p className='flex items-center text-blue-900'>Find counselors <ArrowForwardIcon className='w-5 ml-2' /></p>
                        </div>
                    </div>

                    <div className='bg-white rounded-xl shadow-2xl text-center transform transition duration-700 hover:scale-110 cursor-pointer'>
                        <div className='p-8'>
                            <div className='w-20 h-20 mx-auto'>
                                <img src="https://cdn-icons-png.flaticon.com/512/4897/4897918.png" alt="" />
                            </div>
                            <h3 className='font-bold text-2xl my-6'>Anxiety</h3>
                            <p className='text-gray-600 text-xl'>Feeling nervous, restless or tense</p>
                        </div>
                        <div className='bg-slate-100 pl-8 py-4'>
                            <p className='flex items-center text-blue-900'>Find counselors <ArrowForwardIcon className='w-5 ml-2' /></p>
                        </div>
                    </div>

                    <div className='bg-white rounded-xl shadow-2xl text-center transform transition duration-700 hover:scale-110 cursor-pointer'>
                        <div className='p-8'>
                            <div className='w-20 h-20 mx-auto'>
                                <img src="https://cdn-icons-png.flaticon.com/512/1473/1473881.png" alt="" />
                            </div>
                            <h3 className='font-bold text-2xl my-6'>Relationship issues</h3>
                            <p className='text-gray-600 text-xl'>issues with your partner or your beloved one's?</p>
                        </div>
                        <div className='bg-slate-100 pl-8 py-4'>
                            <p className='flex items-center text-blue-900'>Find counselors <ArrowForwardIcon className='w-5 ml-2' /></p>
                        </div>
                    </div>
                </div>
                <p className='text-end h-2 cursor-pointer mr-5'>More Specializations</p>
            </div>
        </div>
    )
}

export default Specs