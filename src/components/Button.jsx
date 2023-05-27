import React from 'react'

const Button = ({children, type, onChange, className}) => {
  return (
    <button type={type} onChange={onChange} className={`px-4 py-2 rounded-md outline-none focus:outline-1 focus:outline-red-800 ${className}`}>{children}</button>
  )
}

// Set default prop values
Button.defaultProps = {
    children: "Click",
    className: '',
    type: 'button',
    onChange:''
  };

export default Button