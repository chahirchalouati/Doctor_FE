import React from 'react'
import Logo from '../Logo/Logo'
import DropMenu from './DropMenu';
function NavBar() {
    return (
        <nav className='navBar'>
            <Logo></Logo>
            <DropMenu></DropMenu>
        </nav>
    )
}

export default NavBar
