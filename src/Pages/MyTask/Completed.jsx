import React, { useEffect, useState } from 'react';
import AllTasksQuery from '../../Components/Query/AllTasksQuery';
import { IoEyeOutline } from 'react-icons/io5';
import AxiosBase from '../../Components/Axios/AxiosBase';

const Completed = ({tasks,refetch}) => {
    const [completed_tasks,setCompletedTasks] = useState([])
     useEffect(()=>{
        setCompletedTasks(tasks.filter(item => item.status === 'complete'))
     },[tasks])
    const handleDragOver = (e)=>{
    e.preventDefault()
    }
    const handleDragStart = (e,item)=>{
        e.dataTransfer.setData('to_do',JSON.stringify(item))

    }
    
    const handleDragEnd = (item)=>{
        console.log('drag ended',item)
        const filter = completed_tasks.filter(ele=> ele._id !== item._id)
   
        setCompletedTasks([...filter])
    }

    const handleDrop = (e)=>{
        const todo = JSON.parse(e.dataTransfer.getData('to_do'))
        const find = completed_tasks.find(item => item._id === todo._id);
      
            if(find){
                return
            }
            else{
        
        AxiosBase().patch('/task/update-status',{id:todo._id,status:'complete'})
        .then(res=>{
          if(res.data.modifiedCount > 0){
             refetch()
             setCompletedTasks([todo,...completed_tasks])
          }
          
        })
        setCompletedTasks([...completed_tasks,todo])
    }
    }

    return (
        <div className='border- w-full border-black  font-bebas  '>
        <div className='bg-[#36ff47] py-2'>
        <h1 className='text-2xl text-white text-center'>Complete</h1>
        </div>
        <div className='space-y-2 py-3 px-3  h-[540px] overflow-y-auto' onDragOver={handleDragOver} onDrop={(e)=> handleDrop(e)}>
        {
                    completed_tasks.map((item,index)=>{ 
                      return <div className='py-3 px-2 bg-[#000000] font-pop  border-2 border-[#0e0d0d] rounded-lg text-white relative' key={index} draggable onDragStart={(e)=> handleDragStart(e,item)} onDragEnd = {()=> handleDragEnd(item)} >
                        <h3 className='text-xl '>{item.title}</h3>
                        <p className='pt-3'>{item.description.slice(0,90)}</p>
                        {/* <button className='absolute text-xl right-1 top-5'><IoEyeOutline></IoEyeOutline></button> */}
                      </div>
                    })
                 }
            </div>
    
        </div>
    );
}

export default Completed;
