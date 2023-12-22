import React, { useContext } from 'react';
import { fireBaseContext } from '../../Firebase/AuthProvider';

const UserAuth = () => {
   const {user,loading,login,createUser,googleLogin,logout} = useContext(fireBaseContext)
   return {user,loading,login,createUser,googleLogin,logout}
}

export default UserAuth;
