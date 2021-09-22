import './Navbar.css';
import React, { useState } from 'react';
import { IconContext } from 'react-icons';
import { FaBars } from 'react-icons/fa';

function Navbar() {
    const [showNav, setShowNav] = useState(false);
    const [FaBarStyle, setFaBarStyle] = useState({ color: 'white', size: 30, className: "icon" });
    
    return (
        // https://github.com/react-icons/react-icons
        <IconContext.Provider value={FaBarStyle}>
            <div>
                <FaBars onClick={() => {
                    if (showNav) {
                        setShowNav(false);
                        setFaBarStyle({ color: 'white', size: 30, className: "icon" });
                    }
                    else {
                        setShowNav(true);
                        setFaBarStyle({ color: 'white', size: 30, style: { transform: 'rotate(90deg)' }, className: "icon" });
                    }
                }} />
            </div>
        </IconContext.Provider>
    )
}

// cool article about this:
// https://stackoverflow.com/questions/36426521/what-does-export-default-do-in-jsx/36426988
export default Navbar