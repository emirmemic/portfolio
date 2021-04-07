import React, { useState } from "react"
import "./header.css"
import { NavLink } from "react-router-dom"
import userImg from "../../assets/coding.png"


export default function Header() {
    const [displayNavbar, setDisplayNavbar] = useState(false)
    const showHideNavbar = () => {
        if (displayNavbar == false) {
            setDisplayNavbar(true)
        } else setDisplayNavbar(false)
        console.log(displayNavbar)
    }

    return (
        <div className="header-wrapper">

            <div>
                <div>
                    <img src={userImg}></img>
                    <p>EMIR MEMIĆ</p>
                    <p className="position">Frontend Developer</p>
                </div>
                <div onClick={showHideNavbar} className="hamburger">
                    <div className="crtica"></div>
                    <div className="crtica"></div>
                    <div className="crtica"></div>
                </div>
            </div>
            <ul className="desktop-nav">
                <NavLink className="header-nav-links" to="/">Home</NavLink>
                <NavLink className="header-nav-links" to="/oMeni">O meni</NavLink>
                <NavLink className="header-nav-links" to="/projekti">Projekti</NavLink>
                <NavLink className="header-nav-links" to="/kontakt">Kontakt</NavLink>
            </ul>
            {displayNavbar ?
                <ul className="mobile-nav">
                    <NavLink className="header-nav-links" to="/">Home</NavLink>
                    <NavLink className="header-nav-links" to="/oMeni">O meni</NavLink>
                    <NavLink className="header-nav-links" to="/projekti">Projekti</NavLink>
                    <NavLink className="header-nav-links" to="/kontakt">Kontakt</NavLink>
                </ul> : null
            }


        </div>
    )
}