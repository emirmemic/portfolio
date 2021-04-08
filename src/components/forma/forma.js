import React from "react"
import "./forma.css"
import emailjs from 'emailjs-com';
import { init } from 'emailjs-com';
init("user_EiPpgUEfYqRj9aTxg4Kad");


export default function Forma() {

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('outlook', 'template_u4qyj5g', e.target, 'user_EiPpgUEfYqRj9aTxg4Kad')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
    e.target.reset()
  }

  return (
    <div className="forma-wrapper" onSubmit={sendEmail}>
      <form className="forma" method="GET">
        <div className="form-field">
          <label>First Name:</label>
          <input type="text" name="first_name" />
        </div>
        <div className="form-field">
          <label>Last Name:</label>
          <input type="text" name="last_name" />
        </div>

        <div className="form-field">
          <label>Email:</label>
          <input type="email" name="email" />
        </div>
        <div className="form-field">
          <label>Subject:</label>
          <input type="text" name="subject" />
        </div>
        <div className="form-field textarea">
          <label>Message:</label>
          <textarea name="message" rows="8" />
        </div>
        <input className="submit-buttom" type="submit" value="SUBMIT" />
      </form>
    </div>
  )
}