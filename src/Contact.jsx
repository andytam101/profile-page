import React from 'react';
import data from './data.json'
import ContactItem from './ContactItem.jsx'

import gmail from './assets/contacts/gmail.jpeg'
import whatsapp from './assets/contacts/whatsapp.jpeg'
import linkedin from './assets/contacts/linkedin.jpeg'
import instagram from './assets/contacts/instagram.jpeg'
import github from './assets/contacts/github.jpeg'

import './Contact.css'; // Import specific CSS for this component

const Contact = () => {
  return (
    <section id="contact" className="section contact-page">
      <h1>Contact Me</h1>
      <div className="contact-container">
        <form className="contact-form">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" placeholder="Your Name" required />

          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" placeholder="Your Email" required />

          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" rows="5" placeholder="Your Message" required></textarea>

          <button type="submit">Send</button>
        </form>

        <div className="contact-info">
          <h3>Socials</h3>
          <ContactItem key="gmail" logo={gmail} {...data.gmail}/>
          <ContactItem key="whatsapp" logo={whatsapp} {...data.whatsapp}/>
          <ContactItem key="linkedin" logo={linkedin} {...data.linkedin}/>
          <ContactItem key="instagram" logo={instagram} {...data.instagram}/>
          <ContactItem key="github" logo={github} {...data.github}/>
          
        </div>
      </div>
    </section>
  );
};

export default Contact;