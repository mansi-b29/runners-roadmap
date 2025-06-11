import {useState, useEffect, useRef} from 'react'
import { Link } from 'react-router-dom'
import "../App.css"

export function MenuBar() {

  const [isOpen, setIsOpen] = useState(false); //initial state of isOpen
  const menuRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => {setIsOpen((prev) => !prev)};

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => { document.removeEventListener("mousedown", handleClickOutside)};
  }, [])


  return (
    <div className="MenuBar" ref={menuRef}>
      <div className="MenuWrapper"> 
      <button onClick={toggleDropdown} className="MenuButton"> Menu </button>
      {isOpen && (
        <div className = "MenuDropdown">
        <Link to="/"> 
            <button> Home </button>
        </Link> 
        
        <Link to="/page1"> 
            <button > Page 1 </button>
        </Link> 
        </div>
        )}
      </div>
    </div>
  );
}

export default MenuBar;