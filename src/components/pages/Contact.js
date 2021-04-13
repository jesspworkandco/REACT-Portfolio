import React from "react";
import Pdf from "../../assets/Jessica-Perez-CV.pdf";
import "./contact.css";

function Contact() {
  return (
    <div className="contact mx-sm-4 text-center">
      <div>
        <h1 className="title">Let's Stay in Touch</h1>
        <h3>Actively looking for a Full Time Frontend Developer position!</h3>
        <ul className="connect text-center">
            <li>
              <a
                href="mailto:1jessicaperez@gmail.com"
                rel="noopener noreferrer"
                target="_blank"
              >
                > Email me
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/jessica-p-a13a20b5/"
                rel="noopener noreferrer"
                target="_blank"
              >
                > Connect on LinkedIn
              </a>
            </li>
            <li>
              <a href={Pdf} rel="noopener noreferrer" target="_blank">
                > Checkout my Resume
              </a>
            </li>
        </ul>
      </div>
    </div>
  );
}
export default Contact;
