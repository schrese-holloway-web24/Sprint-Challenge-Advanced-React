import React from 'react';

const NavBar = () => {
    // const[darkMode, setDarkMode] = useState(false)

    return(
        <nav className = 'navbar'>
            <div>
                <h2>Women's World Cup Searches</h2>
            </div>
            <div>
                <button>Dark Mode</button>
            </div>
        </nav>
    )
}

export default NavBar;