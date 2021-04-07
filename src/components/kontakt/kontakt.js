import React from "react"
import "./kontakt.css"
import Forma from "../../components/forma/forma"

export default function Kontakt() {

    return (
        <div className="kontakt-wrapper">
            <div className="mobitel">
                <h1 className="naslov">Contact</h1>
                <p>Phone</p>
                <p>+38761571660</p>
                <p>Email</p>
                <p>memicemir@outlook.com</p>
            </div>
            <Forma></Forma>

        </div>
    )
}