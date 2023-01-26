import React, { useState } from 'react'
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import axios from 'axios';
import useAuthCounselor from '../../../hooks/useAuthCounselor';
import { useNavigate } from 'react-router-dom';
import {ToastContainer,toast} from 'react-toastify'
import jwtDecode from 'jwt-decode';

function MoreDetails() {

    const {auth} = useAuthCounselor()
    const userDetails = jwtDecode(auth.accessToken);
    const [counselorDetails, setCounselorDetails] = useState( userDetails.userInfo.others._id)
    const [timeSlot, SetTimeSlot] = useState([])
    const navigate = useNavigate()

    const handleSubmit = (e) => {
      e.preventDefault();
      console.log('hello'); 
      console.log(timeSlot);
      const id = 'secret'
      const id2 = 'secret'

      axios.post('/counselor/timeSlot', [timeSlot,{id:counselorDetails}],{withCredentials:true}
      ).then(()=>{
        console.log('success');
        toast.success(`Time slot updated successfully!`, {
            toastId:id2,
            theme:"light"           
          });
        setTimeout(()=>{
            navigate('/counselor')
        },3000)
      })
      
    }

    return (

        <div>
            <div className=" p-6 bg-white border border-gray-200 rounded-lg shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center">Time Slot</h5>

                <form action="" onSubmit={handleSubmit}>

                    <ul class="items-center w-full text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 sm:flex dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                        <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                            <div class="flex items-center pl-3">
                                <input id="vue-checkbox-list" type="checkbox" value="07-08 am" name='slot' class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                                 onChange={(e) => e.target.checked ? SetTimeSlot([...timeSlot,{time:e.target.value,status:true}]) : 
                                 SetTimeSlot(timeSlot.filter((element)=>{
                                     if(element.time == e.target.value) {
                                        return
                                     }
                                     return element

                                 }))}
                                />
                                    <label for="vue-checkbox-list" class="py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300">07.00 - 08.00 am</label>
                            </div>
                        </li>
                        <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                            <div class="flex items-center pl-3">
                                <input id="vue-checkbox-list" type="checkbox" name= "slot" value="10-11 am" class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                               onChange={(e) => e.target.checked ? SetTimeSlot([...timeSlot,{time:e.target.value,status:true}]) : 
                               SetTimeSlot(timeSlot.filter((element)=>{
                                   if(element.time == e.target.value) {
                                      return
                                   }
                                   return element

                               }))}
                                />
                                    <label for="vue-checkbox-list" class="py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300">10.00 - 11.00 am</label>
                            </div>
                        </li>
                        <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                            <div class="flex items-center pl-3">
                                <input id="vue-checkbox-list" type="checkbox" value="01-02 pm" name='slot' class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                                 onChange={(e) => e.target.checked ? SetTimeSlot([...timeSlot,{time:e.target.value,status:true}]) : 
                                 SetTimeSlot(timeSlot.filter((element)=>{
                                     if(element.time == e.target.value) {
                                        return
                                     }
                                     return element

                                 }))}
                                />
                                    <label for="vue-checkbox-list" class="py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300">01.00 - 02.00 pm</label>
                            </div>
                        </li>
                        <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                            <div class="flex items-center pl-3">
                                <input id="react-checkbox-list" type="checkbox" value="04-05 pm" name='slot' class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                                 onChange={(e) => e.target.checked ? SetTimeSlot([...timeSlot,{time:e.target.value,status:true}]) : 
                                 SetTimeSlot(timeSlot.filter((element)=>{
                                     if(element.time == e.target.value) {
                                        return
                                     }
                                     return element

                                 }))}
                                />
                                    <label for="react-checkbox-list" class="py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300">04.00 - 05.00 pm</label>
                            </div>
                        </li>
                        <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                            <div class="flex items-center pl-3">
                                <input id="angular-checkbox-list" type="checkbox" value="07-08 pm" name='slot' class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                                onChange={(e) => e.target.checked ? SetTimeSlot([...timeSlot,{time:e.target.value,status:true}]) : 
                                SetTimeSlot(timeSlot.filter((element)=>{
                                    if(element.time == e.target.value) {
                                       return
                                    }
                                    return element

                                }))}
                                />
                                    <label for="angular-checkbox-list" class="py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300">07.00 - 08.00 pm</label>
                            </div>
                        </li>
                        <li class="w-full dark:border-gray-600">
                            <div class="flex items-center pl-3">
                                <input id="laravel-checkbox-list" type="checkbox" value="10-11 pm" name='slot' class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                                onChange={(e) => e.target.checked ? SetTimeSlot([...timeSlot,{time:e.target.value,status:true}]) : 
                                                        SetTimeSlot(timeSlot.filter((element)=>{
                                                            if(element.time == e.target.value) {
                                                               return
                                                            }
                                                            return element

                                                        }))}
                                />
                                    <label for="laravel-checkbox-list" class="py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300">10.00 - 11.00 pm</label>
                            </div>
                        </li>
                    </ul>
                    {/* <input type="text" value={counselor.auth.data._id} hidden 
                    onChange={(e)=>
                    /> */}

                    <div className="mt-6 flex mx-auto justify-center">
                    <button type='submit' className="max-w-md px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600">
                        Save Changes
                    </button>
                   </div>

                </form>
                <ToastContainer/>
                
            </div>
        </div>
    )
}

export default MoreDetails