import React from 'react'
import { withRouter } from 'react-router-dom'


const Options = (props) => {

    const options = [
        "https://www.benefits.va.gov/compensation/claims-special-burial.asp",
        "https://www.benefits.va.gov/BENEFITS/factsheets/burials/flag.pdf"
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