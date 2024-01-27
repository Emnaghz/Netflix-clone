import React, { useEffect, useState } from "react";
import "../styles/Nav.css";

function Nav() {

    const [show, handleShow] = useState(false);
    
    //hide the navbar when scrolling
    const transitionNavBar = () => {
        if(window.scrollY > 100){
            handleShow(true);
        }else{
            handleShow(false);
        }
    }

    useEffect(()=> {
        window.addEventListener("scroll", transitionNavBar)
        //clean up
        return () => window.removeEventListener("scroll", transitionNavBar)
    }, [])

  return (
    <div className={`nav ${show && "nav_black"}`}>
      <div className="nav_content">
        <img
        className="nav_logo"
          src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
          alt=""
        />
        <img
        className="nav_avatar"
          src="https://pro2-bar-s3-cdn-cf.myportfolio.com/dddb0c1b4ab622854dd81280840458d3/877ad1ce3a479ef9498e1efc_rw_600.png?h=794db6a6ae01c539fdfb7ad5e5a89589"
          alt=""
        />
      </div>
    </div>
  );
}

export default Nav;
