import React from "react"
import "./home.css"
import userImg from "../../assets/user_image.webp"
import { NavLink } from "react-router-dom"

export default function Home() {

    return (
        <div className="home-main-wrapper">
            <img alt="" src={userImg}></img>
            <div className="main-text">
                <h1>Who am I ?</h1>
                <h2>Who are you ?</h2>
                <p> My name is Emir Memić.
                    I don't have a price.
                    My goal is not money, my goal is knowledge and the
                    ability to create revolutionary ideas.
                    I still don't know how, that's why I need you!
                </p>
                <div className="nav-buttons-container">
                    <NavLink to="/oMeni" className="nav-buttons">O Meni</NavLink>
                    <NavLink to="/projekti" className="nav-buttons">Projekti</NavLink>
                    <NavLink to="/kontakt" className="nav-buttons">Kontakt</NavLink>
                </div>
            </div>
        </div>
    )
}