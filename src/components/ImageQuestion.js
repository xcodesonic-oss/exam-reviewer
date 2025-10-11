// import React, { useState } from 'react';

// const ImageQuestion = ({ question, onSubmit, userAnswer }) => {
//   const [answer, setAnswer] = useState('');

//   const handleSubmit = () => {
//     if (!answer.trim()) return;
    
//     const isCorrect = answer.trim().toLowerCase() === question.correctAnswer.toLowerCase();
//     onSubmit(answer, isCorrect);
//   };

//   return (
//     <div className="question-container">
//       <h2 className="question-text">{question.question}</h2>
      
//       <div className="image-container">
//         <img src={question.imageUrl} alt="Question visual" />
//       </div>

//       <div className="answer-input">
//         <textarea
//           value={answer}
//           onChange={(e) => setAnswer(e.target.value)}
//           placeholder="Type your answer here..."
//           rows="3"
//           disabled={!!userAnswer}
//           className={userAnswer ? (userAnswer.isCorrect ? 'input-correct' : 'input-incorrect') : ''}
//         />
//       </div>

//       {!userAnswer && (
//         <button 
//           className="submit-btn"
//           onClick={handleSubmit}
//           disabled={!answer.trim()}
//         >
//           Submit Answer
//         </button>
//       )}

//       {userAnswer && (
//         <div className="feedback">
//           <p className={userAnswer.isCorrect ? 'feedback-correct' : 'feedback-incorrect'}>
//             {userAnswer.isCorrect ? 'Correct!' : 'Incorrect'}
//           </p>
//           <p><strong>Correct answer:</strong> {userAnswer.correctAnswer}</p>
//           <p className="explanation">{userAnswer.explanation}</p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ImageQuestion;

import React, { useState } from 'react';

const ImageQuestion = ({ question, onSubmit, userAnswer }) => {
  const [answer, setAnswer] = useState('');

  const handleSubmit = () => {
    if (!answer.trim()) return;

    const isCorrect = answer.trim().toLowerCase() === question.correctAnswer.toLowerCase();
    onSubmit({
      userAnswer: answer,
      isCorrect,
      correctAnswer: question.correctAnswer,
      explanation: question.explanation
    });
  };

  return (
    <div className="question-container">
      <h2 className="question-text">{question.question}</h2>

      {/* ✅ Local image display */}
      <div className="image-container">
        <img 
          src={question.imageUrl} 
          alt="Question visual" 
          style={{ maxWidth: '100%', borderRadius: '8px', margin: '12px 0' }} 
        />
      </div>

      <div className="answer-input">
        <textarea
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
          placeholder="Type your answer here..."
          rows="3"
          disabled={!!userAnswer}
          className={`textarea ${
            userAnswer ? (userAnswer.isCorrect ? 'input-correct' : 'input-incorrect') : ''
          }`}
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
          <p><strong>Correct answer:</strong> {userAnswer.correctAnswer}</p>
          <p className="explanation">{userAnswer.explanation}</p>
        </div>
      )}
    </div>
  );
};

export default ImageQuestion;
