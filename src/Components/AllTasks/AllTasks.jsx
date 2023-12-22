import React, { useState } from 'react';
import { FiPlus } from "react-icons/fi";
import { CiEdit } from "react-icons/ci";
import { MdDelete } from "react-icons/md";
import UserAuth from '../UseAuth/UserAuth';
import AddForm from '../../Pages/MyTask/AddForm';
import AllTasksQuery from '../Query/AllTasksQuery';
import UpdateForm from '../UpdateForm/UpdateForm';
import AxiosBase from '../Axios/AxiosBase';
import Swal from 'sweetalert2';
const AllTasks = () => {
    const {user} = UserAuth()
    const [taskForm,setTaskForm] = useState(false);
    const [updateForm,setUpdateForm] = useState(false);
    const [updateTask,setUpdateTask] = useState({})
    const handleTaskForm = (value)=>{
        setTaskForm(!taskForm)
    }
    const {tasks,isLoading,refetch} = AllTasksQuery()
    
  const handleUpdateForm = ()=>{
    setTaskForm(false);
    setUpdateForm(!updateForm)
  }
  
//   const handleDelete = (id)=>{
   
//       AxiosBase().delete(`/task-delete/${id}`)
//       .then(res=>{
//         if(res.data.deletedCount > 0){
//           refetch()
//         }
//       })
   
// }
 
    return (
        <div className='relative'>
              <div className='font-pop'>
            <div className='flex items-center  gap-3 border-b-2 p-3 w-full'>
            <div className='rounded-full bg-[#000] w-10 h-10 text-white flex justify-center items-center'>
            {
                user?.photoURL ? <img src={user.photoURL} alt="" className='w-full h-full rounded-full' /> : <h3>{user?.displayName[0].toUpperCase()}</h3>
            }
          
            </div>
           <div className='flex items-center gap-2'>
           <h2 className='text-2xl text-black font-bebas'><span className='text-green-700'>{user?.displayName.split(' ')[0]}</span> 's Task</h2>
           </div>
            {/* <h2 className='text-2xl text-black'>My tasks</h2> */}
            </div>
            </div>
            <div className="flex justify-end py-5 px-4">
        <div className='flex gap-2 hover:cursor-pointer text-white items-center py-2 px-4 rounded-full bg-[#2e2bcf]' onClick={handleTaskForm}><FiPlus></FiPlus> <span>Add task</span></div>
        </div>
            <div className="overflow-x-auto text-xl">
  <table className="table">
    {/* head */}
    <thead>
      <tr className='text-xl'>
        <th>No.</th>
        <th>Title</th>
        <th>Deadline</th>
        <th>Priority</th>
        <th>Status</th>
        <td>Edit</td>
        <th>Delete</th>
      </tr>
    </thead>
    <tbody>
      {
        tasks.map((task,index)=>{
            return <tr key={index}>
            <th>{index + 1}</th>
            <td>{task.title}</td>
            <td>{task.deadline}</td>
            <td>{task.priority}</td>
            <td>{task.status}</td>
            <td className='hover:text-blue-600 text-xl text-black'><button onClick={()=>{
              setUpdateTask(task)
              handleUpdateForm()
            }}><CiEdit></CiEdit></button></td>
            <td className='hover:text-blue-600 text-black'><button className='text-center text-xl' ><MdDelete></MdDelete></button></td>
          </tr>
         
        })
      }
      
    </tbody>
  </table>
</div>
<AddForm taskForm = {taskForm} handleTaskForm = {handleTaskForm}></AddForm>
<UpdateForm  handleUpdateForm={handleUpdateForm} updateForm = {updateForm} task= {updateTask}></UpdateForm>
        </div>
    );
}

export default AllTasks;
