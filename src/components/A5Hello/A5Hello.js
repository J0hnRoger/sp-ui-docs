import React, {PropTypes} from 'react'

/**
 * Display an Hello - Very usefull!
 */
const A5Hello = ({ message }) => { 

  return (
    <div className='a5-hello'>
         <h3>Hello {message}</h3>
    </div>
  )
}


A5Hello.propTypes = {
  /**
   * Message to display
   */
    message: PropTypes.string.isRequired
}

A5Hello.defaultProps = { 
  message: 'A5Sys'
}
export default A5Hello
