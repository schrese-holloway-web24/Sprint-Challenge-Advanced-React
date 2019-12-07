import React from 'react';
import {useDark} from '../hooks/useDark'
import { useChangeView } from '../hooks/useChangeView';

const NavBar = () => {
    const[darkMode, setDarkMode] = useDark(false);
    const[listView, setListView] = useChangeView(false);
    const darkToggler = e => {
        e.preventDefault();
        setDarkMode(!darkMode);
    }

    const viewToggler = e => {
        e.preventDefault();
        setListView(!listView);
    }

    return(
        <nav className = 'navbar'>
            <div>
                <h2>Women's World Cup Searches</h2>
            </div>
            <div>
                <button onClick = {darkToggler} className='dark'>Dark Mode</button>
                <button onClick = {viewToggler} className='view'>List Mode</button>
            </div>
        </nav>
    )
}

export default NavBar;