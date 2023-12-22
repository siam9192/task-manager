import React, { useEffect, useState } from 'react';
import AllTasksQuery from '../../Components/Query/AllTasksQuery';
import { IoEyeOutline } from 'react-icons/io5';
import AxiosBase from '../../Components/Axios/AxiosBase';

const Ongoing = ({tasks,refetch}) => {
    const [ongoing_tasks,setOnGoingTasks] = useState([])
    useEffect(()=>{
       const ongoing = tasks.filter(item => item.status === 'on going')
       setOnGoingTasks([...ongoing])
    },[tasks])

    const handleDragStart = (e,item)=>{
      e.dataTransfer.setData('to_do',JSON.stringify(item))


  }
  
  const handleDragEnd = (item)=>{
      const filter = ongoing_tasks.filter(ele=> ele._id !== item._id)
     
      setOnGoingTasks([...filter])
  }

  const handleDrop = (e)=>{
      const todo = JSON.parse(e.dataTransfer.getData('to_do'))
      AxiosBase().patch('/task/update-status',{id:todo._id,status:'on going'})
      .then(res=>{
        if(res.data.modifiedCount > 0){
           refetch()
           setOnGoingTasks([todo,...ongoing_tasks])
        }
        
      })
     
  }

    const handleDragOver = (e)=>{
        e.preventDefault()
        const todo = e.dataTransfer.getData('to_do');
      
    }
    return (
        <div className='border-2   w-full   overflow-y-auto'>
              <div className='bg-[#ff3284] py-2'>
                <h1 className='text-2xl text-white text-center font-bebas'>On going </h1>
                </div>
                <div className='space-y-2 py-3 px-3  h-[540px] overflow-y-auto' onDragOver={(e)=> handleDragOver(e)} onDrop={(e)=> handleDrop(e)}>
                {
                    ongoing_tasks.map((item,index)=>{ 
                      return <div className='py-3 px-2 bg-[#000000] font-pop  border-2 border-[#0e0d0d] rounded-lg text-white relative' key={index} draggable onDragStart={(e)=> handleDragStart(e,item)} onDragEnd={()=> handleDragEnd(item)}>
                        <h3 className='text-xl '>{item.title}</h3>
                        <p className='pt-3'>{item.description.slice(0,90)}</p>
                        {/* <button className='absolute text-xl right-1 top-1/3'><IoEyeOutline></IoEyeOutline></button> */}
                      </div>
                    })
                 }
                </div>
        </div>
    );
}

export default Ongoing;
