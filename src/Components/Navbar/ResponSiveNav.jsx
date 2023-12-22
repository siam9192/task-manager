import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import UserAuth from '../UseAuth/UserAuth';

const ResponSiveNav = () => {
    const {user} = UserAuth()
    return (
        <div className='bg-white duration-100'>
             <ul className=' flex flex-wrap w-full text-black text-xl font-kanit pt-5 px-2 space-x-5'>
            
            <NavLink to="/" className={({ isActive, isPending }) =>isPending ? "pending" : isActive ? "text-blue-600" : "" }>Home</NavLink>

            <NavLink to="/dashboard" className={({ isActive, isPending }) =>isPending ? "pending" : isActive ? "text-blue-600" : "" }>Dashboard</NavLink>
            <NavLink to="/solutions" className={({ isActive, isPending }) =>isPending ? "pending" : isActive ? "text-blue-600" : "" }>Solutions</NavLink>
            <NavLink to="/resources" className={({ isActive, isPending }) =>isPending ? "pending" : isActive ? "text-blue-600" : "" }>Resources</NavLink>
            <NavLink to="/pricing" className={({ isActive, isPending }) =>isPending ? "pending" : isActive ? "text-blue-600" : "" }>Pricing</NavLink>
           {
            user ? <></>:  <Link to='/login' className='px-6 py-2 text-black bg-[#59f0f5] rounded-full'>Login</Link>
           }
            </ul>
        </div>
    );
}

export default ResponSiveNav;
