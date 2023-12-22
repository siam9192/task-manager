import React, { useEffect, useState } from 'react';
import { FiPlus } from "react-icons/fi";
import ToDoList from '../../Pages/MyTask/ToDoList';
import Ongoing from '../../Pages/MyTask/Ongoing';
import Completed from '../../Pages/MyTask/Completed';
import AddForm from '../../Pages/MyTask/AddForm';
import UserAuth from '../UseAuth/UserAuth';
import AxiosBase from '../Axios/AxiosBase';
const ManageTask = () => {
   const {user} = UserAuth()
   const [tasks,setTasks] = useState([])
    const [isRefetch,setRefetch] = useState(false);

   useEffect(()=>{
   if(user){
    AxiosBase().get(`/all-tasks/${user?.email}`)
    .then(res => {
        console.log(res.data)
        setTasks(res.data)
    })
   }
   },[user,isRefetch])
   const refetch = ()=>{
   setRefetch(!isRefetch)
   }
    return (
        <div>
                <div className='font-pop'>
            <div className='flex items-center  gap-3 border-b-2 p-3'>
            <div className='rounded-full bg-[#000] w-10 h-10 text-white flex justify-center items-center'>
            <h3 className='text-capital'>{user?.displayName[0]}</h3>
            </div>
           <div className='flex items-center gap-2'>
           <h2 className='text-2xl text-black font-bebas'><span className='text-green-700'>{user?.displayName.split(' ')[0]}</span> 's Task</h2>
           </div>
            </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-h-[490px]'>
                <ToDoList tasks={tasks} refetch={refetch}></ToDoList>
                <Ongoing tasks = {tasks} refetch={refetch}></Ongoing>
                <Completed tasks = {tasks} refetch = {refetch}></Completed>
            </div>
        </div>
    );
}

export default ManageTask;
