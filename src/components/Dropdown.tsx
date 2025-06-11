import React from 'react'
import DropdownButton from './DropdownButton'
import DropdownContent from './DropdownContent'
import "./Dropdown.css"
import { useState, useEffect, useRef } from 'react'

const Dropdown = ({buttonText, content}) => {

    const [open, setOpen] = useState(false);
    
    const toggleDropdown = () => {
        setOpen(open => !open);
    }
  



  return (
    <div className="dropdown">
        <DropdownButton toggle={toggleDropdown} open={open}> {buttonText} </DropdownButton>
        <DropdownContent open={open}> {content} </DropdownContent>
    </div>
  )
}

export default Dropdown