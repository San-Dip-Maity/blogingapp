import React from 'react'
import { FaInstagram, FaTwitter, FaLinkedin} from "react-icons/fa";

const Navbar = () => {
    return (
        <>
            <ul className='flex gap-10 mx-6 items-center pr-8'>
                <li className='cursor-pointer'>Home</li>
                <li className='cursor-pointer'>Posts</li>
                <li className='cursor-pointer'><FaInstagram /></li>
                <li className='cursor-pointer'><FaTwitter /></li>
                <li className='cursor-pointer'><FaLinkedin /></li>
                
            </ul>
        </>
    )
}

export default Navbar;