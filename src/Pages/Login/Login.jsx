import React, { useState } from 'react';
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import UserAuth from '../../Components/UseAuth/UserAuth';
const Login = () => {
    const {login,googleLogin} = UserAuth();
    const {state} = useLocation();
    const navigate = useNavigate ();
    const [error,setError] = useState('')
    const handleLogin = (e)=>{
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        login(email,password)
        .then(res=>{
            if(state){
            navigate(state)
            }
            else{
                navigate('/')
            }
        })
        
        
    }

    return (
        <div className='flex justify-center items-center py-32 font-pop'>
    <form className='p-5 lg:w-1/3 border-' onSubmit={handleLogin}>
        <h1 className='text-3xl text-black text-center font-semibold'>Welcome to TaskManager</h1>
        <p className='py-2 text-center'>Login your account</p>
    <div className='space-y-5 py-5'>
    <input type="text" name='email' placeholder='Email'  className='w-full py-2 px-2 border-2 border-black outline-none'/>
    <input type="text" name='password' placeholder='Password'  className='w-full py-2 px-2 border-2 border-black outline-none'/>
    <button className='w-full bg-black text-white py-2'>Login</button>
    <p className='text-center'>or</p>
   <div>
   <div className='w-full border-2 py-2 flex justify-between items-center px-10 hover:cursor-pointer'onClick={googleLogin}><div className='text-2xl' ><FcGoogle></FcGoogle></div><span>Continue with Google</span></div>
   <p className='text-black py-2'>Don't have an account <Link  to='/signup' className='font-semibold text-blue-600'>Sign up</Link></p>
   </div>
    </div>
    </form>
        </div>
    );
}

export default Login;
