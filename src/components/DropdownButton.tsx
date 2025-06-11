import React from "react";
import { FaChevronDown } from "react-icons/fa";
import { FaChevronUp } from "react-icons/fa";
import "./DropdownButton.css";

const DropdownButton = ({ children, open, toggle }) => {

  return (
    <div className={`dropdown-btn ${open ? "button-open" : null}`} onClick={toggle}>
      {children}
      <span className="toggle-icon">
        {open ?  <FaChevronUp /> : <FaChevronDown/>}{" "}
      </span>
    </div>
  );
};

export default DropdownButton;
