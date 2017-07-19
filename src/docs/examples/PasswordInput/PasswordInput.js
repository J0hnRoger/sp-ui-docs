import React from 'react'
import PasswordInput from 'ps-react/PasswordInput'

/**
 * 10% progress
 */
export default function Example () {
    let value = ""
    return <PasswordInput 
        htmlId="test"
        name="password"
        value={value}
        onChange={(target) => {value = target}}
        showVisibilityToggle/>
}
