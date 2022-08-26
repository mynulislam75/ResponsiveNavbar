import React from 'react';

const Menuitems = () => {
    return (
        <ul className='md:hidden bg-slate-500  absolute top-24 left-0 w-1/2 p-3 h h-screen
        grid grid-rows-3  gap-4'>

            <div className='row-span-2 gap-3 uppercase'>
                <li>About</li>
                <li>Services</li>
                <li>Contact</li>
                <li>Gallary</li>
                <li>Dashboard</li>
            </div>

            <div className='mt-32'>
              
                <li>Log in</li>
            </div>

        </ul>
    );
};

export default Menuitems;