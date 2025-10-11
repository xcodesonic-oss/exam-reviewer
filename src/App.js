// import React from "react";
// import Quiz from "./components/Quiz";
// import "./App.css"; // include styles

// function App() {
//   return (
//     <div className="app">
//       <div className="quiz-container">
//         <Quiz />
//       </div>
//     </div>
//   );
// }

// export default App;
import React, { useState } from 'react';
import './App.css';
import { questionSets } from './data/questions';
import Login from './components/Login';
import HomeScreen from './components/HomeScreen';
import MultipleChoice from './components/MultipleChoice';
import ImageQuestion from './components/ImageQuestion';
import ShortAnswer from './components/ShortAnswer';
import Results from './components/Results';
import CodeAnswer from './components/CodeAnswer';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentScreen, setCurrentScreen] = useState('home'); // 'home', 'quiz', 'results'
  const [selectedSubject, setSelectedSubject] = useState(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswers, setUserAnswers] = useState({});
  const [score, setScore] = useState(0);

  const handleLogin = () => {
    setIsLoggedIn(true);
    setCurrentScreen('home');
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setCurrentScreen('home');
    setSelectedSubject(null);
    setUserAnswers({});
    setScore(0);
  };

  const handleSelectSubject = (subject) => {
    setSelectedSubject(subject);
    setCurrentScreen('quiz');
    setCurrentQuestion(0);
    setUserAnswers({});
    setScore(0);
  };

  const handleAnswerSubmit = (answer, isCorrect) => {
    const newUserAnswers = {
      ...userAnswers,
      [currentQuestion]: {
        answer,
        isCorrect,
        correctAnswer: selectedSubject.questions[currentQuestion].correctAnswer,
        explanation: selectedSubject.questions[currentQuestion].explanation
      }
    };
    
    setUserAnswers(newUserAnswers);
    
    if (isCorrect) {
      setScore(prev => prev + 1);
    }

    setTimeout(() => {
      if (currentQuestion < selectedSubject.questions.length - 1) {
        setCurrentQuestion(prev => prev + 1);
      } else {
        setCurrentScreen('results');
      }
    }, 5000);
  };

  const handleRestartQuiz = () => {
    setCurrentScreen('quiz');
    setCurrentQuestion(0);
    setUserAnswers({});
    setScore(0);
  };

  const handleBackToHome = () => {
    setCurrentScreen('home');
    setSelectedSubject(null);
    setUserAnswers({});
    setScore(0);
  };

  const renderQuestion = () => {
    const question = selectedSubject.questions[currentQuestion];
    
    switch (question.type) {
      case 'multiple-choice':
        return (
          <MultipleChoice
            question={question}
            onSubmit={handleAnswerSubmit}
            userAnswer={userAnswers[currentQuestion]}
          />
        );
      case 'image-answer':
  return (
    <ImageQuestion
      question={question}
      onSubmit={handleAnswerSubmit}
      userAnswer={userAnswers[currentQuestion]}
    />
  );

      case 'short-answer':
        return (
          <ShortAnswer
            question={question}
            onSubmit={handleAnswerSubmit}
            userAnswer={userAnswers[currentQuestion]}
          />
        );
      case 'code-answer':
        return (
          <CodeAnswer
            question={question}
            onSubmit={handleAnswerSubmit}
            userAnswer={userAnswers[currentQuestion]}
          />
        );
      default:
        return null;
    }
  };

  if (!isLoggedIn) {
    return <Login onLogin={handleLogin} />;
  }

  if (currentScreen === 'home') {
    return (
      <HomeScreen 
        questionSets={questionSets}
        onSelectSubject={handleSelectSubject}
        onLogout={handleLogout}
      />
    );
  }

  if (currentScreen === 'results') {
    return (
      <Results 
        score={score} 
        total={selectedSubject.questions.length} 
        onRestart={handleRestartQuiz}
        onBackToHome={handleBackToHome}
        subjectName={selectedSubject.subject}
      />
    );
  }

  return (
    <div className="app">
      <div className="quiz-container">
        <header className="quiz-header">
          <div className="quiz-navigation">
            <button className="back-btn" onClick={handleBackToHome}>
              ← Back to Subjects
            </button>
            <h2>{selectedSubject.subject}</h2>
          </div>
          
          <div className="progress-bar">
            <div 
              className="progress-fill"
              style={{ width: `${((currentQuestion + 1) / selectedSubject.questions.length) * 100}%` }}
            ></div>
          </div>
          
          <div className="quiz-info">
            <span>Question {currentQuestion + 1} of {selectedSubject.questions.length}</span>
            <span>Score: {score}</span>
          </div>
        </header>

        <main className="quiz-content">
          {renderQuestion()}
        </main>
      </div>
    </div>
  );
}

export default App;