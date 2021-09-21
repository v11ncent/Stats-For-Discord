import './Navbar.css';
import React, { useState } from 'react';
import { IconContext } from 'react-icons';
import { FaBars } from 'react-icons/fa';

function Navbar() {
    const [showNav, setShowNav] = useState(false);


    return (
        // https://github.com/react-icons/react-icons
        <IconContext.Provider value={{ color: 'white', size: 30, className: "icon" }}>
            <div>
                <FaBars />
            </div>
        </IconContext.Provider>
        
    )
}

// cool article about this:
// https://stackoverflow.com/questions/36426521/what-does-export-default-do-in-jsx/36426988
export default Navbar