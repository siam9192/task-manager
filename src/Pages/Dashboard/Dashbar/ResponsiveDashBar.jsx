
import { MdHomeFilled } from "react-icons/md";
import { RiCheckboxCircleLine } from "react-icons/ri";
import { FaTasks } from "react-icons/fa";
import { FiBell } from "react-icons/fi";
import { Link } from 'react-router-dom';
import { RxCross1 } from "react-icons/rx";
const ResponsiveDashBar = ({toggle,handleToggle}) => {
    return (
        <div className={`bg-[#000000] top-0 left-0 ${toggle?'block' : 'hidden'} pt-4 fixed text-white text-xl w-full px-4 font-kanit space-y-3 min-h-[100vh] lg:hidden block z-50`}>
            <Link className='flex items-center gap-2 hover:text-[#59f0f5]' to='/dashboard/my-task'>
                <RiCheckboxCircleLine></RiCheckboxCircleLine><h2>My tasks</h2>
            </Link>
            <Link className='flex items-center gap-2 hover:text-[#59f0f5]' to='/dashboard/manage-task'>
                <FaTasks></FaTasks><h2>Manage Task</h2>
            </Link>
            <div className="absolute text-2xl text-white right-2 top-2" onClick={handleToggle}>
                <RxCross1></RxCross1>
            </div>
        </div>
    );
}

export default ResponsiveDashBar;
