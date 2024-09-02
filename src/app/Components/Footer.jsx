import React from 'react'
import { TiSocialLinkedin } from "react-icons/ti";
import { FaGithub } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import { IoDocumentText } from "react-icons/io5";

const Footer = () => {
  return (
    <div className='w-full py-5 gap-4 text-white px-5 md:px-20 bg-gray-800'>
        <div className='flex flex-wrap justify-center gap-5'>
            <a href="#" className='hover:text-gray-200'><BiLogoGmail className='inline mr-2'/>sonidiya126@gmail.com</a>
            <div className='w-[2px] h-7 bg-black'></div>
            <a href="#" className='hover:text-gray-200'><TiSocialLinkedin className='inline mr-2'/>Linkedin</a>
            <div className='w-[2px] h-7 bg-black'></div>
            <a href="#" className='hover:text-gray-200'><FaGithub className='inline mr-2'/>Github</a>
            <div className='w-[2px] h-7 bg-black'></div>
            <a href="#" className='hover:text-gray-200'><IoDocumentText className='inline mr-2'/>Resume</a>
        </div>
    </div>
  )
}

export default Footer