import { useQuery } from '@tanstack/react-query';
import React from 'react';
import AxiosBase from '../Axios/AxiosBase';
import UserAuth from '../UseAuth/UserAuth';

const AllTasksQuery = () => {
    const {user} = UserAuth();
    const {data:tasks=[],isLoading,refetch} = useQuery({
        queryKey:['All-tasks'],
        queryFn:async()=>{
            const res = await AxiosBase().get(`/all-tasks/${user?.email}`)
            return res.data;

        }
    })
    return {tasks,isLoading,refetch}
}

export default AllTasksQuery;
