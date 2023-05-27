"use client"
import React, { useState } from 'react'

const Button = ({children, type, handleClick, className}) => {

  const clickHandler = (e)=> {
    console.log("clicked!");
  }

  return (
    <button type={type}
    onClick={handleClick ? handleClick : clickHandler}
    className={`px-4 py-2 rounded-md outline-none focus:outline-1 focus:outline-red-800 ${className}`}>{children}</button>
  )
}

// Set default prop values
Button.defaultProps = {
    children: "Click",
    className: '',
    type: 'button',
    handleClick: null
  };

export default Button