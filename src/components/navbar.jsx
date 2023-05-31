import React from 'react';
import '../index'
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='navbar_length flex'>
            <NavLink className='navbar_username' to='https://t.me/usu_17'>Usmonov Sanjar</NavLink>
        </div>
    );
}

export default Navbar;
