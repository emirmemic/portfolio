import React from "react"
import "./forma.css"


export default function Forma() {

  return (
    <div className="forma-wrapper">
      <form className="forma" method="GET">
        <div className="form-field">
          <label>First Name:</label>
          <input type="text" name="first name" />
        </div>
        <div className="form-field">
          <label>Last Name:</label>
          <input type="text" name="last name" />
        </div>

        <div className="form-field">
          <label>Email:</label>
          <input type="text" name="email" />
        </div>
        <div className="form-field">
          <label>Subject:</label>
          <input type="text" name="subject" />
        </div>
        <div className="form-field textarea">
          <label>Message:</label>
          <textarea type="text" name="last name" rows="8" />
        </div>
        <input className="submit-buttom" type="submit" value="SUBMIT" />
      </form>
    </div>
  )
}