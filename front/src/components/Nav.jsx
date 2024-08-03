
import React, { useState } from 'react';
import myImage1 from '/Users/adi/Desktop/aut/front/public/images/Group 1.png';
import menu from '/Users/adi/Desktop/aut/front/public/images/menu.png';
const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white  bg-opacity-50 fixed  border-gray-200 xl:rounded-3xl xl:w-3/4 sm:w-[425px] sm:rounded-xl ">
      <div className="flex flex-wrap items-center justify-between mx-auto px-2">
        <a href="#abt " className="flex items-center space-x-3 ">
        <img src={myImage1} alt="Description of image" style={{ width: '100px', height: '100px' }} className='' />
          <span class="self-center text-3xl font-semibold ">AUTUMN</span>
        </a>
        <button onClick={toggleMenu} type="button" class="inline-flex items-center p-1 justify-center   rounded-lg xl:hidden   focus:outline-none focus:ring-2 ">
        <img src={menu} alt="Description of image" style={{ width: '80px', height: '80px' }} />
          
        </button>
        <div class={`xl:block ${isOpen ? 'block' : 'hidden'} w-full xl:w-auto `}>
          <ul className="font-medium flex flex-col p-4 xl:p-0 mt-4 xl:flex-row xl:justify-end xl:space-x-3 xl:mt-0 ">
            <li>
              <a href="#how" className="block py-2 px-3 text-black hover:bg-black hover:text-white rounded-xl ">how it works</a>
            </li>
            <a href="#qual" className="px-3 py-2 text-black hover:bg-black hover:text-white rounded-xl">
              quality
            </a>
            <a href="#prod" className="px-3 py-2 text-black hover:bg-black hover:text-white rounded-xl">
              gallery
            </a>
            <a href="https://wa.me/+91 98505 40400">
            <button className=" bg-black text-white p-2 px-4 sm:my-2 xl:my-0 min-w-[160px] sm:w-16 rounded-3xl  hover:xl:shadow-lg hover:xl:shadow-black">
                  contact us
                </button>
                </a>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;