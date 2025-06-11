import React from 'react'
import "./DropdownItem.css";

interface Props {
    children: string;
    onClick? : () => void;
}

const DropdownItem = ({ children, onClick } ) => {
  return (
    <div className="dropdown-item" onClick={onClick}>
        {children}
    </div>
  )
}


export default DropdownItem