import React, { useEffect, useState } from 'react';
import { IoEyeOutline } from "react-icons/io5";
import AllTasksQuery from '../../Components/Query/AllTasksQuery';
import AxiosBase from '../../Components/Axios/AxiosBase';
const ToDoList = ({tasks,refetch}) => {
  const [to_do_tasks,setTo_do_tasks] = useState([])
  useEffect(()=>{
    const to_do = tasks.filter(item => item.status === 'to do');
    setTo_do_tasks(to_do)
  },[tasks])
    const dragStart = (e,item)=>{
      
        e.dataTransfer.setData('to_do',JSON.stringify(item))
        
    }
    const handleDragOver = (e)=>{
      e.preventDefault()
       
    }
    const onDragEnd = (e,item) =>{

      const filter = to_do_tasks.filter(ele=> ele._id !== item._id)
      setTo_do_tasks([...filter])
    }
    const handleDrop = (e)=>{
      
      const todo = JSON.parse(e.dataTransfer.getData('to_do'))
      AxiosBase().patch('/task/update-status',{id:todo._id,status:'to do'})
      .then(res=>{
        if(res.data.modifiedCount > 0){
           refetch()
           setTo_do_tasks([todo,...to_do_tasks])
        }
        
      })
       setTo_do_tasks([todo,...to_do_tasks])
      
     
    }
    return (
        <div className='border- w-full border-black  font-bebas h-full '>
                <div className='bg-[#5739ff] py-2'>
                <h1 className='text-2xl text-white text-center'>To Do </h1>
                </div>
                <div className='space-y-2 py-3 px-3  h-[540px] overflow-y-auto' onDrop={(e)=> handleDrop(e)} onDragOver={(e)=> handleDragOver(e)} >
                {
                    to_do_tasks.map((item,index)=>{ 
                      return <div className='py-3 px-2 bg-[#000000] font-pop  border-2 border-[#0e0d0d] rounded-lg text-white duration-200  relative' key={index} draggable onDragStart={(e)=> dragStart(e,item)} onDragOver={(e)=> handleDragOver(e)} onDragEnd={(e)=> onDragEnd(e,item)}>
                        <h3 className='text-xl '>{item.title}</h3>
                        <p className='pt-3'>{item.description.slice(0,90)}</p>
                        {/* <button className='absolute text-xl right-1 1/3'><IoEyeOutline></IoEyeOutline></button> */}
                      </div>
                    })
                 }
                </div>
               
        </div>
    );
}

export default ToDoList;
