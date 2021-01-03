import React from 'react'
import { withRouter } from 'react-router-dom'


const Options = (props) => {

    const options = [
        "https://www.benefits.va.gov/compensation/index.asp",
        "https://www.benefits.va.gov/pension/"
    ]

    return (
        options.map(option => 
            <div 
            nav={option}
            key={option}
            >
                <a href={option} target='_blank' rel="noreferrer">{option}</a>
            </div>
        )
    )
}

export default withRouter(Options)