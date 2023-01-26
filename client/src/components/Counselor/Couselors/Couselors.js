import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Couselors() {

  const [counselors, setCounselors] = useState([]);
  const [boolean, setBoolean] = useState(false);
  const navigate = useNavigate()

  useEffect(()=>{
    axios.get('/counselor/counselors').then((response)=>{
      console.log(response)
      setCounselors(response.data)
    })
  },[boolean])
  console.log(counselors)

  const counselorProfile = (id) => {
     console.log(id);
     navigate(`/counselor_profile/${id}`)
  }
  return (
    <div className='text-center py-10'>
       <h1 className='text text-4xl w-96 mx-auto leading-normal font-bold mb-12'>Our Counselors</h1>
       <div className='flex max-w-5xl mx-auto gap-8 group'>
           {  counselors &&
            counselors.map((element,i)=>(
              <div className='bg-black/10 md:w-96 duration-500 cursor-pointer group-hover:blur-sm hover:!blur-none group-hover:scale-[0.85] hover:!scale-100 p-8 rounded-xl'>
            <img src="https://media.istockphoto.com/id/1207514066/photo/mature-counselor-listens-compassionately-to-unrecognizable-female-client.jpg?s=612x612&w=0&k=20&c=WKAXSwDdoK06BdZUeVbdXsWTlQU2s4MJSHj6R0vgJc4=" className='h-40 ml-2' alt="loading..." />
            <h4 className='uppercase text-xl font-bold'>{element.fullname}</h4>
            <p className='text-sm leading-7 my-3 opacity-50 text-black'>{element.qualification}</p>
            <button className='bg-blue-900 py-2.5 px-8 rounded-full text-white'
            onClick={()=>counselorProfile(element._id)}
            >Get in touch</button>
          </div>
            ))
          }
       </div>
       <p className='ml-auto mt-5 text-blue-900'>View all counselors</p>

    </div>
  )
}

export default Couselors 