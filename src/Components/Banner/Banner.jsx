
import { Link } from "react-router-dom";
import Container from "../Container/Container"; 
const Banner = () => {
    return (
        <div className='bg-white font-pop min-h-[85vh]'>
        <Container>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:px-0 px-2'>
                <div className="md:pt-20 pt-10">
                    <h1 className="md:text-7xl text-5xl text-black font-semibold">Do task management smarter, together</h1>
                    <p className="py-5">Conquer tasks effortlessly! Organize, prioritize, succeed. Elevate your productivity with our intuitive task management tools</p>
                    <Link to = '/dashboard/my-task' className="px-6 py-3 rounded-full bg-[#59f0f5] text-black text-xl hover:bg-black hover:text-white duration-200">Let's Explore</Link>
                </div>
                <div className="flex justify-center items-center">
                    <img src="/images/task.png" alt="" className="w-full"/>
                </div>
            </div>
        </Container>
        </div>
    );
}

export default Banner;
