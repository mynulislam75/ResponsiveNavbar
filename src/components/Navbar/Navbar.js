import React, { useState } from 'react';
import Menuitems from './Menuitems';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark, faBars } from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {

    const [toggle, setToggle] = useState(false)

    const handleToggle = () => {
        setToggle(!toggle)
    }

    console.log(toggle)

    return (
        <nav className='grid grid-cols-3 gap-4 content-center bg-black p-9 h-24 text-white font-semibold uppercase fixed w-full inset-0'>

            <div className='col-span-2 grid grid-cols-5 gap-4 content-center'>

                <div className='md:hidden cursor-pointer'>
                    <h2 onClick={handleToggle}>{toggle ? <FontAwesomeIcon className='h-7' icon={faXmark} /> : <FontAwesomeIcon icon={faBars} />}</h2>
                </div>

                <div className='relative'>
                    <h3>Brand</h3>
                </div>

                <div className='col-span-3'>

                    <div>
                        <ul className='hidden md:flex gap-3'>
                            <li>About</li>
                            <li>Services</li>
                            <li>Contact</li>
                            <li>Gallary</li>
                            <li>Dashboard</li>
                        </ul>
                        {
                            toggle && <Menuitems></Menuitems>
                        }
                    </div>

                </div>

            </div>


            <div className='md:hidden'>

                <div className='flex items-center'>
                    <input
                        className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow 
                    appearance-none focus:outline-none focus:shadow-outline"
                        id="firstName"
                        type="text"
                        placeholder="First Name"
                    />
                    <button className='border bg-green-600 rounded uppercase px-2 py-1'>Search</button>
                </div>
            </div>


            <div className='hidden md:flex items-center justify-around gap-3'>

                <div className='flex items-center'>
                    <input
                        className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow 
                    appearance-none focus:outline-none focus:shadow-outline"
                        id="firstName"
                        type="text"
                        placeholder="First Name"
                    />
                    <button className='border bg-green-600 rounded uppercase px-2 py-1'>Search</button>
                </div>

                <div>
                    <h3>Log in/Register</h3>
                </div>

            </div>


        </nav>
    );
};

export default Navbar;