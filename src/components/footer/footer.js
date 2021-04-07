import React from "react"
import "./footer.css"
import linkedin from "../../assets/linkedin.png"

export default function Footer() {
    return (
        <div className="footer-wrapper">
            <div>
                <p>Phone</p>
                <p>+38761571660</p>
            </div>
            <div>
                <p>Email</p>
                <p>memicemir@outlook.com</p>
            </div>
            <div className="linkedin">
                <p>Follow me</p>
                <a href="https://www.linkedin.com/in/emir-memić-455896174"><img src={linkedin}></img></a>
            </div>
            <div>
                <p className="quote">"If your dreams don't scare you, they are too small"</p>
            </div>
        </div>
    )
}