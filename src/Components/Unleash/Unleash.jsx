import React from 'react';
import Container from '../Container/Container';

const Unleash = () => {
    return (
        <div className='font-pop py-10'>
            <Container>
                <h1 className='text-center text-4xl text-black font-semibold'>Unleash the power of <br /> task management</h1>
                <div className='py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:px-0 px-2'>
                    <div className='p-5 space-y-3'>
                     <img src="https://web-static.wrike.com/tp/storage/uploads/rebrand-icon-structure.svg" 
                     alt="" />
                     <h1 className='text-2xl text-black font-semibold'>Simplify complex projects</h1>
                     <p>Prevent burnout by breaking up workloads into manageable chunks, and offering customized views and processes.</p>
                     {/* https://web-static.wrike.com/tp/storage/uploads/rebrand-icon-communication.svg */}
                     {/* https://web-static.wrike.com/tp/storage/uploads/rebrand-icon-whiteboard.svg */}
                    </div>
                    <div className='p-5 space-y-3'>
                     <img src="https://web-static.wrike.com/tp/storage/uploads/rebrand-icon-communication.svg" 
                     alt="" />
                     <h1 className='text-2xl text-black font-semibold'>Improve communication</h1>
                     <p>All project details, decisions, and updates are organized in one shared space, and teams can collaborate in real-time..</p>
                   
                    
                    </div>
                    <div className='p-5 space-y-3'>
                     <img src="https://web-static.wrike.com/tp/storage/uploads/rebrand-icon-whiteboard.svg" 
                     alt="" />
                     <h1 className='text-2xl text-black font-semibold'>Instantly update stakeholders</h1>
                     <p>Eliminate status meetings and give everyone, both internal and external, full project visibility, and comprehensive reports.</p>
                     {/* https://web-static.wrike.com/tp/storage/uploads/rebrand-icon-communication.svg */}
                     {/* https://web-static.wrike.com/tp/storage/uploads/rebrand-icon-whiteboard.svg */}
                    </div>
                </div>
            </Container>
        </div>
    );
}

export default Unleash;
