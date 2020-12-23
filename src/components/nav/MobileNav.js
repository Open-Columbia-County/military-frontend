import React, { useState } from 'react'

import Options from './Options'

const MobileNav = () => {
    const [toggleMenu, setToggleMenu] = useState(false)
    const handleToggle = () => {
        setToggleMenu(!toggleMenu)
    }

    return (
        <nav className='nav-small'>
            <button className='button' onClick={handleToggle}>
                Menu
            </button>
            {toggleMenu ? <Options handleToggle={handleToggle} /> : ""}
        </nav>
    )
}

export default MobileNav