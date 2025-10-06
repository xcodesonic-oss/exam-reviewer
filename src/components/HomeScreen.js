import React from 'react';
import './HomeScreen.css';

const HomeScreen = ({ questionSets, onSelectSubject, onLogout }) => {
  return (
    <div className="home-container">
      <header className="home-header">
        <div className="header-content">
          <h1>Exam Reviewer</h1>
          <p>Choose a subject to start testing your knowledge</p>
        </div>
        <button className="logout-btn" onClick={onLogout}>
          Logout
        </button>
      </header>

      <div className="subjects-grid">
        {questionSets.map((subject) => (
          <div 
            key={subject.id}
            className="subject-card"
            onClick={() => onSelectSubject(subject)}
          >
            <div className="subject-icon">{subject.icon}</div>
            <div className="subject-info">
              <h3>{subject.subject}</h3>
              <p>{subject.description}</p>
              <div className="question-count">
                {subject.questions.length} question{subject.questions.length !== 1 ? 's' : ''}
              </div>
            </div>
            <div className="play-button">
              <span>Start Quiz</span>
              <span>→</span>
            </div>
          </div>
        ))}
      </div>

      <footer className="home-footer">
        {/* <p>You can play each quiz multiple times to improve your score!</p> */}
        <p>Created by Loyd Truita</p>
      </footer>
    </div>
  );
};

export default HomeScreen;