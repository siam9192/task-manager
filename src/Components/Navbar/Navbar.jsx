import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import UserAuth from '../UseAuth/UserAuth';
import { LuMenu } from "react-icons/lu";
import ResponSiveNav from './ResponSiveNav';
import { RxCross1 } from "react-icons/rx";
const Navbar = () => {
    const {user} = UserAuth();
    const [toggle,setToggle]  = useState(false);

    const handleToggle = () =>{
        setToggle(!toggle)
    }
    return (
        <div className='py-8 bg-white border-b-2'>
        <div className='flex justify-between items-center px-2'>
            <h1 className='text-4xl font-kanit text-black font-semibold'><span className='text-[#59f0f5]'>Task</span>Manager</h1>
            <ul className='lg:flex items-center gap-4 text-black text-xl font-pop lg:block hidden'>
            <NavLink to="/" className={({ isActive, isPending }) =>isPending ? "pending" : isActive ? "text-blue-600" : "" }>Home</NavLink>
            <NavLink to="/dashboard" className={({ isActive, isPending }) =>isPending ? "pending" : isActive ? "text-blue-600" : "" }>Dashboard</NavLink>
            <NavLink to="/solutions" className={({ isActive, isPending }) =>isPending ? "pending" : isActive ? "text-blue-600" : "" }>Solutions</NavLink>
            <NavLink to="/resources" className={({ isActive, isPending }) =>isPending ? "pending" : isActive ? "text-blue-600" : "" }>Resources</NavLink>
            <NavLink to="/pricing" className={({ isActive, isPending }) =>isPending ? "pending" : isActive ? "text-blue-600" : "" }>Pricing</NavLink>
           {
            user ? <></>:  <Link to='/login' className='px-6 py-2 text-black bg-[#59f0f5] rounded-full'>Login</Link>
           }
            </ul>
            <div className='text-black text-3xl lg:hidden block' onClick={handleToggle}>{toggle ? <RxCross1></RxCross1> : <LuMenu></LuMenu> }</div>
        </div>
        <div className={`lg:hidden ${toggle ? 'block': 'hidden'}`}>
            <ResponSiveNav></ResponSiveNav>
        </div>
        </div>
    );
}

export default Navbar;
