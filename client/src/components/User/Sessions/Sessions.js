import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
// import jwtDecode from 'jwt-decode';
import useAuth from '../../../hooks/useAuth';
import UpcomingSessions from '../UpcomingSessions/UpcomingSessions';

function Sessions() {

    const [openTab, setOpenTab] = React.useState(1);
    const [userDetails,setUserDetails] = useState();
    const color = "blue";
    const User = useAuth();
    const navigate = useNavigate();
    const token = User.auth.accessToken;

    useEffect(()=>{
        axios.get(`/user/sessions/${token}`).then((response)=>{
            setUserDetails(response.data)
        })
    },[]);

    console.log(userDetails);

    return (
        <React.Fragment>
            <div className='flex justify-center'>
                <div className='h-auto border-4 border-slate-300 rounded-lg  mt-20 grid md:grid-cols-2 m-auto justify-center items-center'>
                    <div>
                       { userDetails && <p className='text-black ml-10 text-4xl font-bold'>{`You have ${userDetails.length} upcoming Session`}</p>} 
                    </div>
                    <div className='flex justify-center'>
                        <img className='ml-11 w-fit h-60' src="https://images.squarespace-cdn.com/content/v1/569398c29cadb61a0a1c632c/1584747064154-B5VCCII5OW7OMSXLVF8L/TWC_Online-Therapy-01.png" alt="" />
                    </div>
                </div>
            </div>

            <div className='mt-7 flex justify-center'>
                <div>
                    <div className="w-[1200px] min-w-full pr-2">
                        <ul
                            className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row "
                            role="tablist"
                        >
                            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                                <a
                                    className={
                                        "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                                        (openTab === 1
                                            ? "text-white bg-blue-900"
                                            : "text-black")
                                    }
                                    onClick={e => {
                                        e.preventDefault();
                                        setOpenTab(1);
                                    }}
                                    data-toggle="tab"
                                    href="#link1"
                                    role="tablist"
                                >
                                    Upcoming Sessions
                                </a>
                            </li>

                            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                                <a
                                    className={
                                        "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                                        (openTab === 2
                                            ? "text-white bg-blue-900"
                                            : "text-black")
                                    }
                                    onClick={e => {
                                        e.preventDefault();
                                        setOpenTab(2);
                                    }}
                                    data-toggle="tab"
                                    href="#link3"
                                    role="tablist"
                                >
                                    Completed Sessions
                                </a>
                            </li>
                        </ul>

                    </div>
                    <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
                        <div className="px-4 py-5 flex-auto">
                            <div className="tab-content tab-space">
                                <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                                    <UpcomingSessions/>
                                </div>
                                <div className={openTab === 2 ? "block" : "hidden"} id="link3">
                                    {/* <MoreDetails/> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Sessions