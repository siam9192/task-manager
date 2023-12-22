import React from 'react';
import Container from '../Container/Container';

const TypeUsers = () => {
    return (
        <div className='font-pop py-10'>
            <Container>
                <h1 className='md:text-4xl text-3xl text-black text-center font-semibold pb-6 lg:px-0 px-2'>What kinds of people <br /> using TaskManager</h1>
                <div className='py-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
                <div className='lg:flex-none flex flex-col justify-center items-center'>
                <div className="radial-progress bg-black text-green-500" style={{ "--value": "40", "--size": "12rem", "--thickness": "2rem" }} role="progressbar">40%</div>
                <h1 className='text-3xl text-black font-semibold py-5'>Developers</h1>
                </div>
                <div className='lg:flex-none flex flex-col justify-center items-center'>
                <div className="radial-progress text-blue-600 bg-black" style={{ "--value": "30", "--size": "12rem", "--thickness": "2rem" }} role="progressbar">30%</div>
                <h1 className='text-3xl text-black font-semibold py-5'>Digital Marketer</h1>
                </div>
                
                <div className='lg:flex-none flex flex-col justify-center items-center'>
                <div className="radial-progress text-yellow-400 bg-black" style={{ "--value": "40", "--size": "12rem", "--thickness": "2rem" }} role="progressbar">20%</div>
                <h1 className='text-3xl text-center text-black font-semibold py-5'>Banker</h1>
                </div>
                <div className='lg:flex-none flex flex-col justify-center items-center'>
                <div className="radial-progress bg-black text-[#ff365a]" style={{ "--value": "10", "--size": "12rem", "--thickness": "2rem" }} role="progressbar">10%</div>
                <h1 className='text-3xl text-black font-semibold py-5 text-center'>Others</h1>
                </div>
                
                </div>
            </Container>
        </div>
    );
}

export default TypeUsers;
