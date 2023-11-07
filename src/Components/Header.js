import  {React, useEffect, useState} from "react";
import "../Components/Header.css"
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import {FaBars,FaTimes} from "react-icons/fa";
import { useRef } from "react";
import Logo from "../Images/Namaste-Logo_Ver-12.png";
import CartLogo from "../Images/shoppingCart.png"
import { Link,useNavigate } from "react-router-dom";
import axios from "axios";
import {useUser} from '../Components/Auth/UserContext';

function Header ()
{
    const navigate = useNavigate();
    const { user, logout } = useUser();
    const [menuOpen, setMenuOpen] = useState(false);
    const navRef = useRef();
    const handleLogout = () => {
        logout();
        navigate('/login');
    };
	const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);
	};
    const openCart =() =>{
        navigate('/UserCart')
    }
   
   useEffect(()=>
   {
    console.log(user);
   },[user])
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
            <div className="CartIconCover">
                <img src={CartLogo} alt="UserCart" className="Cart" onClick={()=>openCart()}></img>
            </div>
            <button
                className="nav-btn nav-close-btn"
                onClick={showNavbar}>
                <FaTimes />
            </button>
            <Dropdown>
                <Dropdown.Toggle variant = "" id="dropdown-basic">
                    
                        {user.loggedIn ? (
                            <div className="user-info">
                                Welcome, {user.firstName}
                            </div>
                        ) : <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none">
                                <path d="M5 21C5 17.134 8.13401 14 12 14C15.866 14 19 17.134 19 21M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>}
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    
                {user.loggedIn ? 
                (
                    <>
                        <Dropdown.Item href="#">Profile</Dropdown.Item>
                        <Dropdown.Item onClick={handleLogout}>Logout</Dropdown.Item>
                    </>
                ) : (
                    <>
                        <Link to="/login"><Dropdown.Item >Login</Dropdown.Item></Link>
                        <Link to = "/Signup"><Dropdown.Item >Signup</Dropdown.Item></Link>
                    </>
                )}
                </Dropdown.Menu>
            </Dropdown>
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