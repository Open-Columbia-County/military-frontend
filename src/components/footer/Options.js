import React, { useState } from 'react'
import { withRouter } from 'react-router-dom'


const Options = (props) => {
    const {handleToggle, history} = props
    const [activeItem, setActiveItem] = useState('Home')

    const options = [
        "Resources",
        "Links",
        "Benefits",
        "About"
    ]

    const handleClick = (e) => {
        handleToggle && handleToggle()

        let clickedNav = e.target.getAttribute("nav")
        setActiveItem(clickedNav)
        clickedNav === 'Home' ? history.push('/') : history.push(`${clickedNav}`)
    }

    return (
        options.map(option => 
            <div className={"nav-option" + (activeItem === option ? " clicked" : '')}
            onClick={handleClick}
            nav={option}
            key={option}
            >
                {option}
            </div>
        )
    )
}

export default withRouter(Options)