import  {React, useState} from "react";
import "../Components/Header.css"
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import {FaBars,FaTimes} from "react-icons/fa";
import { useRef } from "react";
import Logo from "../Images/Namaste-Logo_Ver-12.png";
import { Link } from "react-router-dom";
function Header ()
{
    const [menuOpen, setMenuOpen] = useState(false);
    const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);
	};

//   const toggleMenu = () => {
//     setMenuOpen(!menuOpen);
//   };
    return(
        <div className="Header_Center">
        <header>
        <div className="Logo_parent">
            {/* Logo */}
            <Link to="/"><img className="Logo" src={Logo}/> </Link>
        </div>
        <div className="FreeSpace">
        </div>
        <nav ref={navRef}>
            <Link to="All_items" onClick={(e)=>{showNavbar(e)}}> 
                <div className="Nav-Elements">
                    All Items
                </div>
            </Link>
            <Link to="Flyers">
                <div className="Nav-Elements">
                    Flyer
                </div>
            </Link>
            <Link to="Vegetable">
                <div className="Nav-Elements">
                    Vegetable
                </div>
            </Link>
            <Link to = "IndianSnacks">
                <div className="Nav-Elements">
                    Indian Snacks
                </div>
            </Link>
            <Link to = "Lentils">
                <div className="Nav-Elements">
                    Lentils
                </div>
            </Link>
           
            <Link to = "Drinks">
                <div className="Nav-Elements">
                    Drinks
                </div>
            </Link>
            <Link to =  "Flowers">
                <div className="Nav-Elements">
                    Flowers
                </div>
            </Link>
            <Link to = "Lentils">
                <div className="Nav-Elements">
                    Lentils
                </div>
            </Link>
            <Link to = "Frozen">
                <div className="Nav-Elements">
                    Frozen Foods
                </div>
            </Link>
            <button
                className="nav-btn nav-close-btn"
                onClick={showNavbar}>
                <FaTimes />
            </button>
        </nav>
        <button
            className="nav-btn"
            onClick={showNavbar}>
            <FaBars />
        </button>
    </header>
</div>
    )
}
export default Header

// {/* <DropdownButton className="DrpDwn" id="dropdown-basic-button" title="Dropdown button">
//                     <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
//                     <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
//                     <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
//                 </DropdownButton>
//                 <DropdownButton className="DrpDwn" id="dropdown-basic-button" title="Dropdown button">
//                     <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
//                     <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
//                     <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
//                 </DropdownButton>
//                 <DropdownButton className="DrpDwn" id="dropdown-basic-button" title="Dropdown button">
//                     <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
//                     <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
//                     <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
//                 </DropdownButton> */}