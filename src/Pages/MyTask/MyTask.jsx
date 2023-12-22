import React, { useEffect, useState } from 'react';
import { FiPlus } from "react-icons/fi";
import ToDoList from './ToDoList';
import Ongoing from './Ongoing';
import Completed from './Completed';
import AddForm from './AddForm';
import AxiosBase from '../../Components/Axios/AxiosBase';
const MyTask = () => {
    const [taskForm,setTaskForm] = useState(false);
    
   
    const handleTaskForm = (value)=>{
        setTaskForm(!taskForm)
    }
    return (
        <div className='p-5 relative'>
            {/* My task top bar */}
            <div className=''>
            <div className='flex items-center  gap-3 border-b-2'>
            <div className='rounded-full bg-[#185175] w-10 h-10 text-white flex justify-center items-center'>
            user?.photoURL ? <img src={user.photoURL} alt="" className='w-full h-full rounded-full' /> : <h3>{user?.displayName[0].toUpperCase()}</h3>
            </div>
            <h2 className='text-2xl text-black'>My tasks</h2>
            </div>
            </div>
            <div className="flex justify-between py-5">
        <div className='flex gap-2 hover:cursor-pointer text-white items-center py-2 px-4 rounded-full bg-[#2e2bcf]' onClick={handleTaskForm}><FiPlus></FiPlus> <span>Add task</span></div>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3'>
            <ToDoList></ToDoList>
            <Ongoing></Ongoing>
            <Completed></Completed>
        </div>
       
        </div>
    );
}

export default MyTask;
