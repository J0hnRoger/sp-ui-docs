import React from 'react'
import PropTypes from 'prop-types'

/**
 * Display a label with the standard markup of the company 
 */
function Label ({htmlFor, label, required})  {
    return (
        <label>
            {label} {required && <span style={{color: 'red'}}>*</span> }
        </label>
        )
}
    
Label.propTypes = {

    /**
     * Label Text
     */
    label: PropTypes.string.required,
    
    /**
     * Display asterisk after the label if true
     */
    required: PropTypes.bool,

    /**
     * HTML ID for associated input
     */
    htmlFor: PropTypes.string.isRequired
}            

export default Label
    