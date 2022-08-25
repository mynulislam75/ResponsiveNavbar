import React, { useState } from 'react';
import Menuitems from './Menuitems';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faXmark,faBars} from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {

    const [toggle, setToggle] = useState(false)

    const handleToggle = () => {
        setToggle(!toggle)
    }

    console.log(toggle)

    return (
        <div className='flex justify-between items-center bg-black p-9 h-24 text-white font-semibold uppercase'>

            
            <div>
                <h3>Brand</h3>
            </div>



            <nav>

                <div className='md:hidden cursor-pointer'>
                    <h2 onClick={handleToggle}>{toggle ?  <FontAwesomeIcon className='h-7' icon={faXmark} />: <FontAwesomeIcon icon={faBars} />}</h2>
                </div>


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
            </nav>



        </div>
    );
};

export default Navbar;