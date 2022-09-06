import React, { useState } from 'react';

// Stylesheets
import './Navbar.css';

// Third Party Imports
import { Navbar, Button } from 'flowbite-react';

  // Icons
  import { BsTelephone } from 'react-icons/bs';

// Images
import logo from '../../assets/logo/Logo.png';


function Navbars() {

  // Navbar Toggle
  const [active, setActive] = useState('nav-list');
  // state is `toggleIcon`
  const [toggleIcon, setToggleIcon] = useState('nav-toggle');

  const navToggle = () => {
    active === 'nav-list'
      ? setActive('nav-list nav-active')
      : setActive('nav-list');

    // Toggle Icon

    toggleIcon === 'nav-toggle'
      ? setToggleIcon('nav-toggle toggle')
      : setToggleIcon('nav-toggle');
  };

  return (
    // Navbar
    <nav className="bg-white fixed px-2 sm:px-4  dark:bg-gray-900 sticky w-full z-20 top-0 left-0 ">
      <div class=" bg-white flex flex-wrap justify-between items-center mx-auto z-20 py-2.5">

        {/* Navbar Logo */}
        <a href="/" class="flex items-center z-20">
          <img src={logo} class="mr-3 h-9" alt="805 Mattress Pro logo"></img>
        </a>
    
        {/* Navbar Inner Container */}
        <div className={`${toggleIcon} flex md:order-2 z-20 `}>

          {/* Navbar Phone # */}
          <div className='navbar__phone'>
            <BsTelephone className='h-11'/>
            <p class=" px-5 py-2.5 text-center mr-3 md:mr-0">805-522-1344</p>
          </div>

          {/* Navbar Toggle */}
          <button onClick={navToggle} data-collapse-toggle="navbar-sticky" type="button" class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
            <span class="sr-only">Open main menu</span>
            <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
          </button>
        </div>

        
          <ul className={`${active} flex flex-col p-4 mt-4 bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700`}>
            <li>
              <a href="/" class="block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white" aria-current="page">Home</a>
            </li>
            <li>
              <a href="/mattresses" class="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Mattresses</a>
            </li>
            <li>
              <a href="/meet-steve" class="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Meet Steve</a>
            </li>
            <li>
              <a href="/contact" class="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Contact</a>
            </li>
          </ul>
       
      
    </div>
  </nav>
  )
}

export default Navbars;