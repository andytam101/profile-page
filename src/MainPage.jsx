import React from 'react';
import './App.css'
import './MainPage.css'
import profilePic from './assets/profile.png'

function MainPage() {
  return (
    <section id="main" className="section">
      <div className="profile-container">
        <img src={profilePic} alt="Profile" className="profile-pic" />
        <div className="text-content">
          <h1>Andy Tam</h1>
          <p>
            Hello! I am currently an undergraduate studying Computing at Imperial College London. I have a strong passion for technology, especially Artificial Intelligence and Machine Learning.
          </p>
        </div>
      </div>
    </section>
  );
}

export default MainPage;
