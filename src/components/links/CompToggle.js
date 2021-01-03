import React, { useState } from 'react'

import Options from './CompOptions'

const Toggle = () => {
    const [toggleBenefits, setToggleBenefits] = useState(false)
    const handleToggle = () => {
        setToggleBenefits(!toggleBenefits)
    }

    return (
        <nav className='nav-small'>
            <button className='button' onClick={handleToggle}>
                Compensation Benefits
            </button>
            {toggleBenefits ? <Options handleToggle={handleToggle} /> : ""}
        </nav>
    )
}

export default Toggle