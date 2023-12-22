import React from 'react';
import { useForm } from 'react-hook-form';
import { RxCross1 } from "react-icons/rx";
import AxiosBase from '../../Components/Axios/AxiosBase';
import UserAuth from '../../Components/UseAuth/UserAuth';
import toast, { Toaster } from 'react-hot-toast';
import AllTasksQuery from '../../Components/Query/AllTasksQuery';
const UpdateForm = ({handleUpdateForm,updateForm,task}) => {
   
    const {user} = UserAuth()
    const {refetch} = AllTasksQuery() 
    const {register,handleSubmit,reset} = useForm();
    const onSubmit = data => {
    data.status = 'to do'
    data.id = task._id
    data.email  = user.email;
    AxiosBase().put('/task-update',data)
    .then(res =>{
        if(res.data.modifiedCount > 0){
            toast.success('Successfully updated!')
            refetch()
            handleUpdateForm()
            reset()


        }
        else{
            toast.error('Something went wrong')
            reset()
        }
        
    })
    }
    
    return (
        <div className={`absolute top-0 right-0 ${updateForm?'block': 'hidden'} duration-300  md:w-[400px] w-full min-h-[80vh] bg-black p-5 font-pop`}>
            <h1 className='text-white text-3xl py-2 text-center'>Update Your task</h1>
            <form className='space-y-3 px-2 text-white' onSubmit={handleSubmit(onSubmit)}>
        <input {...register('title')} type="text" defaultValue={task.title} placeholder='Title' className='w-full rounded-lg p-2 border-2 border-white bg-transparent outline-none'/>
        <textarea {...register('description')} defaultValue={task.description} type="text" placeholder='Description' className='rounded-lg w-full h-[250px] p-2 border-2 border-white bg-transparent outline-none'></textarea>
       <div className='space-y-2'>
       <p className='py-2'>Deadline</p>
        <input {...register('deadline')} defaultValue={task.deadline} type="date" placeholder='Title' className='rounded-lg w-full p-2 border-2 border-white bg-transparent outline-none'/>
       </div>
        <div>
            <p className='py-2'>Priority</p>
        <select name="" {...register('priority')} value={task.priority}  id=""  className='rounded-lg w-full p-2 border-2 border-white bg-transparent outline-none text-white' >
            <option value="low" className=' text-black' selected>Low</option>
            <option value="moderate" className=' text-black'>Moderate</option>
            <option value="high" className=' text-black'>High</option>
        </select>

        </div>
     <div className=''> <button type='submit' className='w-full py-2 bg-[#3d4aff] mt-4'>Update Task</button></div>
        <div>
            <div className='absolute text-2xl text-white p-4 top-0 left-0' onClick={handleUpdateForm}>
                <RxCross1></RxCross1>
            </div>
        </div>
            </form>
            <Toaster
  position="top-center"
  reverseOrder={false}
/>
        </div>
    );
}

export default UpdateForm;
