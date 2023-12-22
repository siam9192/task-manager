import React, { useEffect, useState } from 'react';
import { CgMenu } from "react-icons/cg";
import { FiPlus } from "react-icons/fi";
import { CiSearch } from "react-icons/ci";
import { IoIosArrowDown } from "react-icons/io";
import UserAuth from '../../../Components/UseAuth/UserAuth';
import ResponsiveDashBar from '../Dashbar/ResponsiveDashBar';
const DashNav = () => {
    const {user,logout} = UserAuth();
    const [toggle,setToggle] = useState(false);
    const handleToggle = ()=>{
        setToggle(!toggle)
    }
    return (
        <div className='p-4 bg-[#302e2e] flex justify-between items-center text-white font-bebas border-b-2'>
            <div className='flex items-center gap-3'>
                <CgMenu className='text-2xl' onClick={handleToggle}></CgMenu>
                {/* <div className='lg:flex items-center gap-2 bg-transparent p-2 border-2 rounded-full hidden'>
                  <div className='bg-[#ef3582] p-1 rounded-full '><FiPlus></FiPlus></div> <span>Create task</span>
                </div> */}
            </div>
            <div className='flex gap-2 items-center border-2  rounded-full p-2 min-w-[400px] hidden'>
             <CiSearch className='text-2xl'></CiSearch>   <input type="text" placeholder='Search..' className='w-ful bg-transparent border-none outline-none ' />
            </div>
           <div className='flex items-center gap-2 text-white'>
           <h3>{user?.displayName}</h3>
           <div className='rounded-full bg-[#185175] w-10 h-10 text-white flex justify-center items-center text-capital'>
            {
                user?.photoURL ? <img src={user.photoURL} alt="" className='w-full h-full rounded-full' /> : <h3>{user?.displayName[0].toUpperCase()}</h3>
            }
            </div>
            <div><button className='btn btn-primary font-pop' onClick={logout}>Logout</button></div>
           </div>
           <ResponsiveDashBar toggle={toggle} handleToggle={handleToggle} ></ResponsiveDashBar>
        </div>
    );
}

export default DashNav;
