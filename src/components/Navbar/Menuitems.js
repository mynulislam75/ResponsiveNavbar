import React from 'react';

const Menuitems = () => {
    return (
        <ul className='md:hidden bg-slate-500  fixed top-24 left-0 h-full w-1/2 p-3 flex flex-col items-center gap-2 uppercase transition-all ease-in-out duration-700'>
            <li>About</li>
            <li>Services</li>
            <li>Contact</li>
            <li>Gallary</li>
            <li>Dashboard</li>
        </ul>
    );
};

export default Menuitems;