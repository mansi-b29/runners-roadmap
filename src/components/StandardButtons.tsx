/* Reusable buttons for clicking to go to different pages */

import React from 'react'
import { useNavigate } from 'react-router-dom';

interface Props {
    children: string;
    //color?: "primary" | "secondary" | "danger"; //default color is primary
    to: string;
    // onClick? : (event: React.MouseEvent<HTMLButtonElement>) => void;
    // event? : () => void;
    onClick ? : () => void;
}

const StandardButtons = ({children, onClick, to}: Props) => {

  // const handleClick = (event) => {
  //   if (onClick) {
  //     onClick(event);
  //   }
  // }

  const navigate = useNavigate();

  return (
    <button className="navigationButtons" onClick={() => {onClick; navigate(to)}}>{children}</button>
  )
}

export default StandardButtons


/**
 * onClick for submit entries on page 1 will both save the state variables and go to the next page
 * The rest of the buttons just have onClick = void
 */