import React, { useContext, useEffect, useState } from 'react'
import useAuth from '../../../hooks/useAuth'
import axios from 'axios';
import moment from 'moment'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../../../context/AuthProvider';

function UserProfile() {

  const token = useAuth();
  const { auth, setAuth } = useContext(AuthContext);
  const [user, setUser] = useState();
  const [passwordCheck, setPasswordCheck] = useState(false);
  const [userUpdate, setUserUpdated] = useState({});
  const [pass, setPass] = useState({})
  const navigate = useNavigate();
  const id = 'secret';

  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [passFormErrors, setPassFormErrors] = useState({});
  const [passSubmit, setPassSubmit] = useState(false);

  const validate = (userUpdate) => {
    console.log('validate');
    console.log(userUpdate);
    const errors = {}
    const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    const regexNum = /^[0-9 ]*$/

    if (!userUpdate.username) {
      errors.fullname = 'full name is required!';
    } else if (userUpdate.username.length < 3) {
      errors.fullname = 'full name must contains more than 3 characters'
    }

    if (!userUpdate.email) {
      errors.email = 'email is required!';
    } else if (!regex.test(userUpdate.email)) {
      errors.email = 'this is not a valid email'
    }

    if (!userUpdate.phone) {
      errors.phone = 'mobile number is required!';
    } else if (userUpdate.phone.length < 10 || userUpdate.phone.length > 10) {
      errors.phone = 'phone number must have 10 digits'
    } else if (!regexNum.test(userUpdate.phone)) {
      errors.phone = 'this is not a valid phone number'
    }

    if (!userUpdate.dob) {
      errors.dob = 'Date of birth is required'
    }
    return errors;

  }

  useEffect(() => {
    axios.get(`/user/profile/${token.auth.accessToken}`).then((response) => {
      console.log(response);
      setUserUpdated({
        _id: response.data._id,
        username: response.data.username,
        email: response.data.email,
        phone: response.data.phone,
        dob: response.data.dob
      })

      setPass({
        _id: response.data._id,
        currentPassword: '',
        newPassword: ''
      })
      setUser(response);
    })
  }, [])

  const passwordValidate = (pass) => {

    const errors = {};
    if (!pass.currentPassword) {
      errors.currentPassword = 'password is required!';
    } else if (pass.currentPassword.length < 3) {
      errors.currentPassword = 'password must contains atleast 3 characters'
  }
  if (!pass.newPassword) {
    errors.newPassword = 'password is required!';
  } else if (pass.newPassword.length < 3) {
    errors.newPassword = 'password must contains atleast 3 characters'
}
return errors;
}

console.log(passFormErrors);

  useEffect(() => {
    console.log('heyyyyy');
    console.log(formErrors);
    console.log(isSubmit);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log('inside useEffec');
      axios.post('/user/edit-profile', { ...userUpdate },
        { withCredentials: true }).then((response) => {
          console.log(response);
          if (response.data.emailExists) {
            toast.error(`Email already exists `, {
              toastId: id,
              theme: "light"
            });
          }
          if (response.data.success) {
            toast.success(`successfully updated your profile details `, {
              toastId: id,
              theme: "light"
            });
            setTimeout(() => {
              navigate('/')
            }, 3000)
          }
        })
      
    }
    console.log('hellloooo');
  }, [formErrors]);

  useEffect(() => {
    if (Object.keys(passFormErrors).length === 0 && passSubmit) {
      console.log('inside useEffec');
      axios.post('/user/change-password', { ...pass },
      { withCredentials: true }).then((response) => {
        console.log('success')
        if (response.data.passwordNotMatch) {
          toast.error(`Current password not matching, try again`, {
            toastId: id,
            theme: "light"
          });
        }
       if(response.data.success) {
        console.log('password changed successfully')
        toast.success(`Password changed successfully`, {
          toastId: id,
          theme: "light"
        });
        setTimeout(() => {
          setPasswordCheck(false)
        }, 3000)
       }
      })
    }
  },[passFormErrors])


  const deleteAccount = (id) => {
    axios.get(`/user/delete-user/${id}`).then((res) => {
      console.log(res);
      if (res.data.deleted) {
        setAuth([]);
        setTimeout(() => {
          navigate('/guesthome');
        }, 2000);
      }
    })
  }

  const handleChangePassword = async (e) => {
    e.preventDefault();
    setPassFormErrors(passwordValidate(pass));
    setPassSubmit(true);
     
  }

  const submitHandler = async (e) => {
    e.preventDefault();
    setFormErrors(validate(userUpdate));
    setIsSubmit(true);
  }

  // console.log(pass);

  return (
    <React.Fragment>
      {
        user &&
        <div>
          <div className='flex justify-center'>
            <div className='h-auto border-4 border-slate-300 rounded-lg  mt-20 grid md:grid-cols-2 m-auto justify-center items-center'>
              <div className='flex justify-center'>
                <img className='ml-11 w-fit h-32 mt-7 mb-7' src="https://icons-for-free.com/iconfiles/png/512/avatar+human+people+profile+user+icon-1320168139431219590.png" alt="" />
              </div>
              <div>
                <p className='text-black mr-10 text-4xl font-bold'>{`Hello ${user.data.username}`}</p>
              </div>
            </div>
          </div>
          <div class="mt-10 text-left flex justify-center mx-auto border-b pb-12">
            <form className="mt-6" onSubmit={(e) => { submitHandler(e) }}>
              <div className="mb-2">
                <label
                  for="fullname"
                  className="block text-sm font-medium text-gray-800"
                >
                  Full Name
                </label>
                <input
                  defaultValue={user.data.username}
                  onChange={(e) => setUserUpdated({ ...userUpdate, [e.target.name]: e.target.value })}
                  type="text"
                  className="block w-96 px-4 py-2 mt-2 text-black bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                  name='username'
                />
              </div>
              <p className='text-red-700'>{formErrors.fullname}</p>
              <div className="mb-2">
                <label
                  for="email"
                  className="block text-sm font-semibold text-gray-800"
                >
                  Email
                </label>
                <input

                  type="email"
                  onChange={(e) => setUserUpdated({ ...userUpdate, [e.target.name]: e.target.value })}
                  name='email'
                  defaultValue={user.data.email}
                  className="block w-full px-4 py-2 mt-2 text-black bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                />
              </div>
              <p className='text-red-700'>{formErrors.email}</p>
              <div className="mb-2">
                <label
                  for="phone"
                  className="block text-sm font-semibold text-gray-800"
                >
                  Phone
                </label>
                <input
                  type="tel"
                  name='phone'
                  defaultValue={user.data.phone}
                  onChange={(e) => setUserUpdated({ ...userUpdate, [e.target.name]: e.target.value })}
                  className="block w-full px-4 py-2 mt-2 text-black bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                />
              </div>
              <p className='text-red-700'>{formErrors.phone}</p>
              <div className="mb-2">
                <label
                  for="dob"
                  className="block text-sm font-semibold text-gray-800"
                >
                  Date Of Birth
                </label>
                <input
                  type="date"
                  name='dob'
                  defaultValue={moment(new Date(user.data.dob)).format('YYYY- MM-DD')}
                  onChange={(e) => setUserUpdated({ ...userUpdate, [e.target.name]: e.target.value })}
                  className="block w-full px-4 py-2 mt-2 text-black bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                />
              </div>
              <p className='text-red-700'>{formErrors.dob}</p>

              <div className="mt-3 flex justify-center mx-auto">
                <button type='submit' className="w-48 px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600">
                  Save Changes
                </button>
              </div>
            </form>
          </div>

          <div className='mt-3 flex justify-center mx-auto'>
            {
              passwordCheck ?
                <form action="" onSubmit={(e) => { handleChangePassword(e) }}>
                  <div className="mb-2">
                    <label
                      for="currentPassword"
                      className="block text-sm font-semibold text-gray-800"
                    >
                      Current Password
                    </label>
                    <input
                      onChange={(e) => setPass({ ...pass, [e.target.name]: e.target.value })}
                      type="password"
                      name='currentPassword'
                      className="block w-full px-4 py-2 mt-2 text-black bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                    />
                  </div>
                  <p className='text-red-700'>{passFormErrors.currentPassword}</p>
                  <div className="mb-2">
                    <label
                      for="newPassword"
                      className="block text-sm font-semibold text-gray-800"
                    >
                      New Password
                    </label>
                    <input
                      onChange={(e) => setPass({ ...pass, [e.target.name]: e.target.value })}
                      type="password"
                      name='newPassword'
                      className="block w-full px-4 py-2 mt-2 text-blue-900 bg-white border rounded-md focus:border-blue-900 focus:ring-blue-900 focus:outline-none focus:ring focus:ring-opacity-40"
                    />
                  </div>
                  <p className='text-red-700'>{passFormErrors.newPassword}</p>
                  <button type='submit' className="w-48 mt-2 ml-2 px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-orange-700 rounded-md hover:bg-orange-600 focus:outline-none focus:bg-orange-600">
                    Change Password
                  </button>
                </form> :

                <button className="w-48 mt-2 ml-3 px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-orange-700 rounded-md hover:bg-orange-600 focus:outline-none focus:bg-orange-600"
                  onClick={() => setPasswordCheck(true)}
                >
                  Change Password
                </button>
            }
          </div>

          <div className='flex justify-center mb-5'>
            <div className='h-auto border-4 p-10 border-slate-300 rounded-lg  mt-20 m-auto justify-center items-center'>
              <p className='text-black mr-10 text-lg font-semibold'>Deleting account will remove all your user information, this <br /> activity cannot be undone </p>
              <div className="mt-6 flex justify-center">
                <button className="w-52 px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-red-700 rounded-md hover:bg-red-600 focus:outline-none focus:bg-red-600"
                  onClick={() => { if (window.confirm('Are you sure, do you want to delete your account?')) { deleteAccount(user.data._id) } }}
                >
                  Delete Account
                </button>
              </div>
            </div>

          </div>
          <ToastContainer />
        </div>
      }

    </React.Fragment>
  )
}

export default UserProfile