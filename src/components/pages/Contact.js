import React from "react";
import CV from "../../assets/Jess-Perez-CV.pdf";
import "./contact.css";

const Contact = () => {
  return (
    <div className="main-container text-center">
      <div className="contact">
        <h1 className="touch">Let's Stay in Touch</h1>
        <h3>
          Freelancing - feel free to reach out, happy to help with your project!
        </h3>
        <ul className="connect text-center">
          <li>
            <a
              title="send jessica perez an email"
              href="mailto:1jessicaperez@gmail.com"
              rel="noopener noreferrer"
              target="_blank"
            >
              {">"} Email me
            </a>
          </li>
          <li>
            <a
              title="go to jessica perez linkedin page"
              href="https://www.linkedin.com/in/jessica-p-a13a20b5/"
              rel="noopener noreferrer"
              target="_blank"
            >
              {">"} Connect on LinkedIn
            </a>
          </li>
          <li>
            <a
              href={CV}
              title="open jessica perez pdf resume"
              rel="noopener noreferrer"
              target="_blank"
            >
              {">"} Checkout my Resume
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Contact;
