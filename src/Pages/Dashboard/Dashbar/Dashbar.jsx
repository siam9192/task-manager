import React from 'react';
import { MdHomeFilled } from "react-icons/md";
import { RiCheckboxCircleLine } from "react-icons/ri";
import { FaTasks } from "react-icons/fa";
import { FiBell } from "react-icons/fi";
import { Link } from 'react-router-dom';
const Dashbar = () => {
    return (
        <div className='bg-[#302e2e] pt-4 text-white text-xl w-full px-4 font-kanit space-y-3 min-h-[90vh] lg:block hidden'>
            <Link className='flex items-center gap-2 hover:text-[#59f0f5]' to='/dashboard/my-task'>
                <RiCheckboxCircleLine></RiCheckboxCircleLine><h2>My tasks</h2>
            </Link>
            <Link className='flex items-center gap-2 hover:text-[#59f0f5]' to='/dashboard/manage-task'>
                <FaTasks></FaTasks><h2>Manage Task</h2>
            </Link>
            
        </div>
    );
}

export default Dashbar;
