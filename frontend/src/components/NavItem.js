import './NavItem.css';
import React, { useState } from 'react';
import { IconContext } from 'react-icons';

function NavItem() {
    const [showNav, setShowNav] = useState(false);
    const [FaBarStyle, setFaBarStyle] = useState({ color: 'white', size: 35, className: "icon" });

    // React components rerender on state change so that's why menu is undefined and thus menu is hidden
    // even after you open it
    let menu;
    if (showNav) {
        menu = 
            <div className="menu">
                <ul>
                    <li><a href="https://github.com/vince1444" target="_blank" rel="noopener noreferrer">about me</a></li>
                    <li>Link 2</li>
                    <li>Link 3</li>
                </ul>
            </div>
    }

    return (
        // https://github.com/react-icons/react-icons
        <IconContext.Provider value={FaBarStyle}>
            <nav>
                <FaBars onClick={() => {
                    if (showNav) {
                        setShowNav(false);
                        setFaBarStyle({ color: 'white', size: 35, className: "icon close" });
                    }
                    else {
                        setShowNav(true);
                        setFaBarStyle({ color: 'white', size: 35, className: "icon open" });
                    }
                }} />
                { menu }
            </nav>
        </IconContext.Provider>
    )
}

// cool article about this:
// https://stackoverflow.com/questions/36426521/what-does-export-default-do-in-jsx/36426988
export default NavItem