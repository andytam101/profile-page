import React from 'react'

const ContactItem = ({ logo, text, url }) => {
    return (
      <div className="contact-info-item">
        <img src={logo} alt="icon" className="contact-info-logo" />
        {url ? (
          <a href={url} target="_blank" rel="noopener noreferrer" className="contact-info-link">
            {text ? text : url}
          </a>
        ) : (
          <span className="contact-info-text">{text}</span>
        )}
      </div>
    );
  };

export default ContactItem;