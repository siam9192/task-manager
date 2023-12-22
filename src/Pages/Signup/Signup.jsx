import React, { useState } from 'react';
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import UserAuth from '../../Components/UseAuth/UserAuth';
import { GoogleAuthProvider, signInWithPopup, updateProfile } from 'firebase/auth';
import auth from '../../Firebase/firebase.config';
import toast, { Toaster } from 'react-hot-toast';
const Signup = () => {
    const {createUser,user} = UserAuth();
    const [error,setError] = useState('')
    const {state} = useLocation()

    // const {googleLogin} = UserAuth()
    const navigate = useNavigate()
    const handleSignUp = (e)=>{
        e.preventDefault()
        setError('')
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photo = form.photo.value;
        if(password.length < 6 ){
      setError('Password must be 6 cherecters')
      return;
        }
        createUser(email,password)
        .then(res=>{
            updateProfile(auth.currentUser,{
                displayName: name,photoURL:photo
            })
           
            toast.success('Successfully sign up!')
            form.reset()
        })
        
    }

    const googleLogin = ()=>{
        const provider = new GoogleAuthProvider();
         signInWithPopup(auth,provider)
         .then(res=>{
            navigate('/dashboard/my-task')
         })
         
    }
    return (
        <div className='flex justify-center items-center py-32 font-pop text-black'>
    <form className='p-5 lg:w-1/3 border-' onSubmit={handleSignUp}>
        <h1 className='text-3xl text-black text-center font-semibold'>Welcome to TaskManager</h1>
        <p className='py-2 text-center'>To get started please Sign up</p>
    <div className='space-y-5 py-5'>
    <input type="text" name='name' placeholder='Your name'  className='w-full py-2 px-2 border-2 border-black outline-none' required/>
    <input type="text" name='photo' placeholder='Photo url'  className='w-full py-2 px-2 border-2 border-black outline-none' required/>
    <input type="email" name='email'  placeholder='Email'  className='w-full py-2 px-2 border-2 border-black outline-none' required/>
    <input type="text" name='password' placeholder='Password'  className='w-full py-2 px-2 border-2 border-black outline-none' required/>
    <button type='submit' className='w-full bg-black text-white py-2'>Create account</button>
    <p className='text-red-600'>{error&& error}</p>
    <p className='text-center'>or</p>
   <div>
   <div className='w-full border-2 py-2 flex justify-between items-center px-10 hover:cursor-pointer' onClick={googleLogin}><div className='text-2xl'><FcGoogle></FcGoogle></div><span>Continue with Google</span></div>
   <p className='text-black py-2'>Already have an account <Link  to='/login' className='font-semibold text-blue-600'>Login</Link></p>
   </div>
    </div>
    </form>
    <Toaster
  position="top-center"
  reverseOrder={false}
/>
        </div>
    );
}

export default Signup;
