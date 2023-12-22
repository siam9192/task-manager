import React from 'react';
import Dashbar from './Dashbar/Dashbar';
import DashNav from './DashNav/DashNav';
import { Outlet } from 'react-router-dom';
const Dashboard = () => {
    return (
        <div>
            <DashNav></DashNav>
            <div className='flex'>
            <div className='lg:w-[20%] lg:block hidden'><Dashbar></Dashbar></div>
            <div className='lg:w-[80%] w-full'>
                <Outlet></Outlet>
            </div>
        </div>
        </div>
    );
}

export default Dashboard;
