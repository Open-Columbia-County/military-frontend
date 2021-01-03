import React from 'react'

import Comp from './links/CompToggle'
import Death from './links/DeathToggle'

const Links = () => {
    return (
        <div className='links'>
        <p>Links Page</p>
        <div className='toggle-buttons'>
            <Comp />
            <Death />
        </div>
        </div>
    )
}

export default Links