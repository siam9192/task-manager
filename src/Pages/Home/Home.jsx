import React from 'react';
import Banner from '../../Components/Banner/Banner';
import TypeUsers from '../../Components/TypeUsers/TypeUsers';
import Unleash from '../../Components/Unleash/Unleash';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <div className='space-y-6 overflow-hidden'>
                <TypeUsers></TypeUsers>
                <Unleash></Unleash>
            </div>
        </div>
    );
}

export default Home;
