import React from 'react';
import { Link } from 'react-router-dom';
import Container from '../Container/Container';
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";
const Footer = () => {
    return (
        <div className='pt-10  bg-black'>
          <Container>
          <div className='flex justify-center items-center lg:px-0 px-2'>
            <h1 className='text-4xl font-bebas text-white font-semibold '><span className='text-[#59f0f5]'>Task</span>Manager</h1>
            </div>
            {/* <p className='py-3 text-gray-300'>Free task and project management software for team collaboration </p> */}
            <div className='flex flex-col justify-center items-center py-5'>
            <div>
                <ul className='flex flex-wrap items-center gap-2 text-gray-200'>
               
                <Link to='/Solutions'>Solutions ||</Link>
                <Link to='/resources'>Resources ||</Link>
                <Link to='/pricing'>Pricing ||</Link>
                <Link to='/home'>Home ||</Link>
                <Link onClick={()=> window.scrollTo(0,0)}>Go Top </Link>
                </ul>
            </div>
            <div className='py-5 flex items-center gap-2 text-xl text-white'>
            <Link to = 'https://www.facebook.com/programmingherowebcourse'><FaFacebook></FaFacebook></Link>
            <Link to='https://www.linkedin.com/authwall?trk=bf&trkInfo=AQGaKsqfg092ogAAAYyRo3l4ojgiTVozMuia6M141DZ-0keRMkUE8AbnNxI2xf4VxsQOCVn7UhrKAtXAQs6nrTvz5Qg_CQQMFctp-l-lm9qLdXeTfADDsd12Scv6gjBZQ8ZgX6k=&original_referer=&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fcompany%2Fprogramminghero%2F'><FaLinkedin></FaLinkedin></Link>
            <Link to='https://www.instagram.com/programminghero/'><RiInstagramFill></RiInstagramFill></Link>
            </div>
            </div>
          </Container>
          <div className='bg-[#4d4747] w-full py-4'>
            <p className='text-white'>©2020-2023 TaskManger, Inc. All rights reserved. Patented. </p>
          </div>
        </div>
    );
}

export default Footer;
