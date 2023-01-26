import axios from 'axios';
import React, { useEffect, useState } from 'react'

function UserDetails() {

    const [userData, setUserData] = useState([]);

    useEffect(() => {
        const getUser = async () => {
            const users = await axios.get('/admin/getAllUsers')
            setUserData(users.data);
        }
        getUser();
    }, [userData]);

    const blockUser = async(userId) => {
       console.log(userId);
       await axios.put(`/admin/block-user/${userId}`);
    }

    const unBlockUser = async (userId) => {
        console.log(userId);
        await axios.put(`/admin/unblock-user/${userId}`);
    }

    return (
        <div className="flex flex-col">
            <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                    <div className="overflow-hidden">
                        <table className="min-w-full">
                            <thead className="border-b">
                                <tr>
                                    <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                        SI.No
                                    </th>
                                    <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                        User Name
                                    </th>
                                    <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                        Email
                                    </th>
                                    <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                        Phone
                                    </th>
                                    <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                        Status
                                    </th>
                                    <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                        Handle
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {userData &&
                                    userData.map((element, index) => (
                                        <tr className="border-b" key={element._id}>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{index + 1}</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{element.username}</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{element.email}</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{element.phone}</td>
                                            <td className={`px-6 py-4 whitespace-nowrap text-sm font-medium ${ element.status === 'Active' ? 'text-green-600' : 'text-red-900'}`}>{element.status}</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                               {
                                                element.status === 'Active' ?  <button class="bg-red-700 hover:bg-red-900 text-white font-bold py-2 px-4 rounded inline-flex items-center" 
                                                onClick={() => {if(window.confirm('Are you sure, do you want to block this user?')){blockUser(element._id)}}}>
                                                    <p>Block</p>
                                                </button>
                                                
                                                : <button class="bg-gray-700 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded inline-flex items-center" 
                                                onClick={() => {if(window.confirm('Are you sure, do you want to unblock this user?')){unBlockUser(element._id)}}}>
                                                    <p>Unblock</p>
                                                </button>

                                               }
                                            </td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default UserDetails