import React, { useState } from 'react';

const CodeAnswer = ({ question, onSubmit, userAnswer }) => {
  const [answer, setAnswer] = useState('');

  const handleSubmit = () => {
    if (!answer.trim()) return;
    
    const isCorrect = answer.trim().toLowerCase() === question.correctAnswer.toLowerCase();
    onSubmit(answer, isCorrect);
  };

  return (
    <div className="question-container">
      <h2 className="question-text">{question.question}</h2>

      <div className="answer-input">
        <textarea
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
          placeholder="Type your code answer here... (Supports multiple lines)"
          rows="8"
          disabled={!!userAnswer}
          className={`code-textarea ${userAnswer ? (userAnswer.isCorrect ? 'input-correct' : 'input-incorrect') : ''}`}
        />
      </div>

      {!userAnswer && (
        <button 
          className="submit-btn"
          onClick={handleSubmit}
          disabled={!answer.trim()}
        >
          Submit Answer
        </button>
      )}

      {userAnswer && (
        <div className="feedback">
          <p className={userAnswer.isCorrect ? 'feedback-correct' : 'feedback-incorrect'}>
            {userAnswer.isCorrect ? 'Correct!' : 'Incorrect'}
          </p>
          <div className="correct-answer-section">
            <p><strong>Your answer:</strong></p>
            <pre className="user-answer-code">{userAnswer.answer}</pre>
          </div>
          <div className="correct-answer-section">
            <p><strong>Correct answer:</strong></p>
            <pre className="correct-answer-code">{userAnswer.correctAnswer}</pre>
          </div>
          <p className="explanation">{userAnswer.explanation}</p>
        </div>
      )}
    </div>
  );
};

export default CodeAnswer;