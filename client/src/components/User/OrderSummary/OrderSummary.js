import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import useAuth from '../../../hooks/useAuth'
import jwtDecode from 'jwt-decode';

function OrderSummary() {

    const [data, setData] = useState();
    const [amount, setAmount] = useState();
    const {state} = useLocation();
    const User = useAuth();
    const [userDetails, setUserDetails] = useState();
    const token = User.auth.accessToken;
    const navigate = useNavigate();
   
    useEffect(()=>{
        setData(state);

        try {
            const userInfo = jwtDecode(token);
            // console.log(userInfo);
            setUserDetails(userInfo)
            } catch (error) {
            console.error(error);
            }
    },[])
    console.log(userDetails)
    console.log('user details');
    console.log(User);
    console.log('data');
    console.log(data);


    const handlePayment = async (e) => {
        e.preventDefault();
        try {
            const result = await axios.post('/payment/orders',{ amount: data.plan.amount })
            console.log(result);
            initPayment(result.data.data)
        } catch (err) {
            console.log(err)
        }
    }

    const initPayment = (data) => {
        const options = {
            key: "rzp_test_JK2eMcWr8sfXEU",
            amount: data.amount,
            currency: data.currency,
            name:'Ecstasy.com',
            description: 'Booking session',
            order_id: data.id,
            image: 'https://media.istockphoto.com/id/1355944902/vector/letter-e-sign-design-template-modern-colorful-vector-emblem.jpg?s=612x612&w=0&k=20&c=3K1uqqLfUDmeTVSPkZw078_j7TSk5AZ7uF0Ko_PiDtk=',
            
            handler: async(response) => {
                console.log(response)
                try{
                    const result = await axios.post('/payment/verify', response)
                    console.log(result);
                    bookSession();

                } catch (err) {
                    console.log(err)
                }
            },
            theme: {
                color: "#3399cc",

            }

        };
        const rzp1 = new window.Razorpay(options);
        rzp1.open();
    }

    const bookSession = () => {
        console.log(data.counselor.counselor._id);
        axios.post('/user/book_session', {counselor: data.counselor.counselor, time: data.counselor.time, 
             plan: data.plan, user: User.auth.accessToken})
        .then((res) => {
            console.log(res);
            navigate('/order_success')
        })
    }
    

    return (
        
        data && 
        
        <div class="py-14 px-4 md:px-6 2xl:px-20 2xl:container 2xl:mx-auto">

        <div class="flex justify-start item-start space-y-2 flex-col">
            <h1 class="text-3xl dark:text-white lg:text-4xl font-semibold leading-7 lg:leading-9 text-gray-800">Order Summary</h1>
        </div>
        <div class="mt-10 flex flex-col xl:flex-row jusitfy-center items-stretch w-full xl:space-x-8 space-y-4 md:space-y-6 xl:space-y-0">
            <div class="flex flex-col justify-start items-start w-full space-y-4 md:space-y-6 xl:space-y-8">


                <div class="flex justify-center flex-col md:flex-row items-stretch w-full space-y-4 md:space-y-0 md:space-x-6 xl:space-x-8">
                    <div class="flex flex-col px-4 py-6 md:p-6 xl:p-8 w-full bg-gray-50 dark:bg-gray-800 space-y-6">
                        <h3 class="text-xl dark:text-white font-semibold leading-5 text-gray-800">Counselor Details</h3>
                        <div class="flex justify-center items-center w-full space-y-4 flex-col border-gray-200 border-b pb-4">
                            <div class="flex justify-between w-full">
                                <p class="text-2xl font-bold text-blue-900">{data.counselor.counselor.fullname}</p>
                            </div>
                            <div class="flex justify-between items-center w-full">
                                <p class="text-base dark:text-white leading-4 text-gray-800">{data.counselor.counselor.qualification}</p>
                            </div>
                            <div class="flex justify-between items-center w-full">
                                <p class="text-base dark:text-white leading-4 text-gray-800">{data.counselor.counselor.experience} years experience</p>
                            </div>
                        </div>
                       <p> time slot - {data.counselor.time} tomorrow</p>

                    </div>
                    <div class="flex flex-col justify-center px-4 py-6 md:p-6 xl:p-8 w-full bg-gray-50 dark:bg-gray-800 space-y-6">
                        <h3 class="text-xl dark:text-white font-semibold leading-5 text-gray-800">{data.plan.plan}</h3>
                        <h1 className='text-2xl font-bold text-blue-900'>INR {data.plan.amount}</h1>
                        <div class="flex justify-between items-start w-full">

                        </div>
                        <p>{data.plan.aboutPlan}</p>
                    </div>
                </div>
            </div>
            <div class="bg-gray-50 dark:bg-gray-800 w-full xl:w-96 flex justify-between items-center md:items-start px-4 py-6 md:p-6 xl:p-8 flex-col">
                <h3 class="text-xl dark:text-white font-semibold leading-5 text-gray-800">User Details</h3>
                <div class="flex flex-col md:flex-row xl:flex-col justify-start items-stretch h-full w-full md:space-x-6 lg:space-x-8 xl:space-x-0">

                    <div class="flex justify-between xl:h-full items-stretch w-full flex-col mt-6 md:mt-0">
                        <form action="" onSubmit={handlePayment}>
                            <div class="flex justify-between items-center w-full mt-5">
                                <p class="text-base dark:text-white leading-4 text-gray-800">{userDetails.userInfo.others.email}</p>
                            </div>
                            <div class="flex justify-between items-center w-full mt-5">
                                <p class="text-base dark:text-white leading-4 text-gray-800">{userDetails.userInfo.others.phone}</p>
                            </div>
                            <div class="flex w-full mt-5 justify-center items-center md:justify-start md:items-start">
                                <button type='submit' class="mt-6 md:mt-0 dark:border-white dark:hover:bg-gray-900 dark:bg-transparent dark:text-white py-5 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 border border-gray-800 font-medium w-96 2xl:w-full text-base leading-4 text-gray-800">Make Payment</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        <h1 className='text-2xl font-bold mt-5'>Key Features</h1>
        <ul className='marker:text-orange-600 list-outside list-disc'>
            <li className='text-xl mt-7 ml-10'>
                Choosing the medium to talk is completely up to you. Chat sessions, Video sessions and Audio sessions <br /> are available, it’s completely depends on your convenience.
            </li>
            <li className='text-xl mt-7 ml-10'>
                Whatever the medium, the counsellers will be there for you with complete dedication according
                to your time slot.
            </li>
            <li className='text-xl mt-7 ml-10'>
                You can cancel the session absolutely 24 hours before your actual session and you can postpone the session. After the deadline, you will not be able to cancel the session.
            </li>
        </ul>
    </div>
    )
}

export default OrderSummary