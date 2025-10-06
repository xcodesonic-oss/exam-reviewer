import React, { useState } from 'react';

const MultipleChoice = ({ question, onSubmit, userAnswer }) => {
  const [selectedChoice, setSelectedChoice] = useState('');

  const handleSubmit = () => {
    if (!selectedChoice) return;
    
    const isCorrect = selectedChoice === question.correctAnswer;
    onSubmit(selectedChoice, isCorrect);
  };

  const getChoiceClass = (choice) => {
    if (!userAnswer) return '';
    
    if (choice === question.correctAnswer) {
      return 'choice-correct';
    }
    if (choice === selectedChoice && choice !== question.correctAnswer) {
      return 'choice-incorrect';
    }
    return '';
  };

  return (
    <div className="question-container">
      <h2 className="question-text">{question.question}</h2>
      
      <div className="choices-container">
        {question.choices.map((choice, index) => (
          <button
            key={index}
            className={`choice ${getChoiceClass(choice)} ${
              !userAnswer && selectedChoice === choice ? 'choice-selected' : ''
            }`}
            onClick={() => !userAnswer && setSelectedChoice(choice)}
            disabled={!!userAnswer}
          >
            {choice}
          </button>
        ))}
      </div>

      {!userAnswer && (
        <button 
          className="submit-btn"
          onClick={handleSubmit}
          disabled={!selectedChoice}
        >
          Submit Answer
        </button>
      )}

      {userAnswer && (
        <div className="feedback">
          <p className={userAnswer.isCorrect ? 'feedback-correct' : 'feedback-incorrect'}>
            {userAnswer.isCorrect ? 'Correct!' : 'Incorrect'}
          </p>
          <p className="explanation">{userAnswer.explanation}</p>
        </div>
      )}
    </div>
  );
};

export default MultipleChoice;