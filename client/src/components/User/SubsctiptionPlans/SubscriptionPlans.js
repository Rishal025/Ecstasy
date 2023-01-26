import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

function SubscriptionPlans() {

    const [details, setDetails] = useState({});
    const location = useLocation();

    const data = [
        {
            id: 1,
            plan: 'Basic Plan',
            amount: 999,
            session: '1 session',
            chat: '1 Week chat',
            color: 'bg-orange-600',
            aboutPlan: 'In this plan, you will be permitted to attend one session from the consultant accordingly. Also, you will be accessible to chat with the consultant for one week.'
        },
        {
            id: 2,
            plan: 'Recommended Plan',
            amount: 1799,
            session: '3 session',
            chat: '2 Week chat',
            color: 'bg-green-600',
            aboutPlan: 'This one is the most recommended plan, you will be permitted to attend three session from the consultant accordingly. Also, you will be accessible to chat with the consultant for two week.'
        },
        {
            id: 3,
            plan: 'Advanced Plan',
            amount: 2499,
            session: '5 session',
            chat: '3 Week chat',
            color: 'sky-600',
            aboutPlan: 'If you are in a critical condition, you can choose this effective plan. You will be permitted to attend five session from the consultant accordingly. Also, you will be accessible to chat with the consultant for three week. '
        }

    ]

    const navigate = useNavigate();

    const handlePlan = (plan) => {
        let counselor = location.state;
        navigate('/order_summary', { state: { plan, counselor } })
    }

    return (

        <div class='flex min-h-screen pt-[30px] px-[40px]'>
            <div class="min-w-full">

                <div class="mt-[20px] grid grid-cols-3 gap-[20px]">


                    {
                        data.map((element) => (
                            <div key={element.id} class="w-full bg-[#fff] rounded-[10px] shadow-[0px 1px 2px #E1E3E5] border border-[#E1E3E5] divide-y">
                                <div class="pt-[15px] px-[25px] pb-[25px]">

                                    <div>
                                        <p class="text-blue-900 text-[19px] leading-[24px] font-bold">
                                            {element.plan}
                                        </p>
                                        <p class="text-[#00153B] text-[50px] leading-[63px] font-bold">
                                            INR {element.amount}
                                        </p>
                                    </div>

                                    <div>
                                        <p class="text-[#717F87] text-[18px] leading-[28px] font-medium">
                                            {element.session}
                                        </p>
                                        <p class="text-[#717F87] text-[18px] leading-[28px] font-medium">
                                            {element.chat}
                                        </p>
                                    </div>
                                </div>

                                <div class="pt-[25px] px-[25px] pb-[35px]">
                                    <div>
                                        <p class="text-[#717F87] text-lg leading-[24px] font-medium">
                                            {element.aboutPlan}
                                        </p>
                                    </div>

                                    <div class="mt-[25px]">
                                        <button class="bg-orange-600 rounded-[5px] py-[15px] px-[25px] text-[#fff] text-[14px] leading-[17px] font-semibold mt-5 hover:bg-orange-900"
                                            onClick={() => handlePlan(element)}
                                        >Buy Plan</button>
                                    </div>
                                </div>
                            </div>
                        ))
                    }


                </div>
                <div className='flex justify-center text-center mt-7'>
                    <blockquote class="text-3xl italic font-semibold text-gray-900 dark:text-white">
                        <svg aria-hidden="true" class="w-10 h-10 text-gray-400 dark:text-gray-600" viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" fill="currentColor" /></svg>
                        <p>"Positive vibes only isn't a thing. Humans have a wide range of emotions and that's okay.</p>
                        <p className='mt-5'>Buy a session, we're here for you to find your <span className='text-orange-400 font-bold'>Ecstasy."</span></p>
                    </blockquote>
                </div>
            </div>
        </div>
    )
}

export default SubscriptionPlans