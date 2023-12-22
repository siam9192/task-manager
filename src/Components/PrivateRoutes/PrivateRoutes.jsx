import React from 'react';
import { useLocation } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import UserAuth from '../UseAuth/UserAuth';
const PrivateRoutes = ({children}) => {
    const {user,loading} = UserAuth();
    const {pathname} = useLocation()
    if(loading){
        return <div className='min-h-[80vh] flex justify-center items-center'>
<span class="loading loading-bars loading-lg text-[#48ffff] "></span>
        </div>
    }
if(user){
    return children;
}
else{
        return <Navigate to='/login' state={pathname} replace></Navigate>
    
}

}


export default PrivateRoutes;
