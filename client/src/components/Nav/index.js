import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import "./style.css";
// import Login from "../LoginForm";
import AuthButton from "../AuthButton";
import { UserContext } from "../../utils/UserContext";


function Nav() {

  const { user } = useContext(UserContext);

  const [open, setOpen] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);

  const updateWidth = () => {
    if (open && width > 991) {
      setOpen(false);
    }
    setWidth(window.innerWidth)
  };

  useEffect(() => {

    window.addEventListener("resize", updateWidth);

    return () => {
      window.removeEventListener("resize", updateWidth);
    }
  }, [])


  return (
 
        <nav className="navbar navbar-expand-lg  mb-2">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item ">
                <AuthButton />
              </li>

            </ul>
      </nav>


   
    
  );
}

export default Nav;
