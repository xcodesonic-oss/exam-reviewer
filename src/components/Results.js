import React from 'react';

const Results = ({ score, total, onRestart }) => {
  const percentage = Math.round((score / total) * 100);

  const getResultMessage = () => {
    if (percentage === 100) return "Perfect! You're a quiz master! 🎉";
    if (percentage >= 80) return "Excellent job! 🏆";
    if (percentage >= 60) return "Good work! 👍";
    if (percentage >= 40) return "Not bad! Keep learning! 📚";
    return "Keep practicing! You'll get better! 💪";
  };

  return (
    <div className="results-container">
      <div className="results-card">
        <h2>Quiz Completed!</h2>
        
        <div className="score-circle">
          <span className="score-percentage">{percentage}%</span>
          <span className="score-text">
            {score} out of {total} correct
          </span>
        </div>

        <p className="result-message">{getResultMessage()}</p>

        <button className="restart-btn" onClick={onRestart}>
          Play Again
        </button>
      </div>
    </div>
  );
};

export default Results;