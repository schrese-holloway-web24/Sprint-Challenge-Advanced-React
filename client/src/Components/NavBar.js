import React from 'react';
import {useDark} from '../hooks/useDark'

const NavBar = () => {
    const[darkMode, setDarkMode] = useDark(false);
    
    const toggler = e => {
        e.preventDefault();
        setDarkMode(!darkMode);
    }

    return(
        <nav className = 'navbar'>
            <div>
                <h2>Women's World Cup Searches</h2>
            </div>
            <div>
                <button onClick = {toggler} className='dark'>Dark Mode</button>
            </div>
        </nav>
    )
}

export default NavBar;