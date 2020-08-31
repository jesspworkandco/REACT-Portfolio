import React from "react";
import "./footer.css";

function Footer() {
  return (
    <div>
      <footer className="footer text-muted fixed-bottom">
        <a
          className="github mr-3"
          href="https://github.com/JessicaPerez1"
          rel="noopener noreferrer"
          target="_blank"
        >
          <img
            src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
            alt="github logo"
          />
        </a>
        <a
          className="cv mr-3"
          href="assets/Jessica-Perez-CV.pdf"
          rel="noopener noreferrer"
          target="_blank"
        >
          <img
            src="https://www.pngkey.com/png/detail/383-3831724_file-document-cv-curriculum-vitae-svg-png-icon.png"
            alt="cv logo"
          />
        </a>
        <a
          className="email mr-3"
          href="mailto:1jessicaperez@gmail.com"
          rel="noopener noreferrer"
          target="_blank"
        >
          <img
            src="https://img.favpng.com/11/3/20/gmail-computer-icons-logo-email-png-favpng-GS8B5n0WtfiNTJzQX5Gvuyf0T.jpg"
            alt="email logo"
          />
        </a>
        <a
          className="linkedin"
          href="https://www.linkedin.com/in/jessica-p-a13a20b5"
          rel="noopener noreferrer"
          target="_blank"
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/480px-LinkedIn_logo_initials.png"
            alt="linkedin logo"
          />
        </a>
      </footer>
    </div>
  );
}

export default Footer;
