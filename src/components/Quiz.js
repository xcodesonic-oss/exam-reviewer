import React, { useState } from "react";
import Question from "./Question";
import questions from "../data/questions";




function Quiz() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);

  const handleAnswer = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }
    setTimeout(() => {
      if (currentIndex + 1 < questions.length) {
        setCurrentIndex(currentIndex + 1);
      } else {
        alert(`Quiz finished! Your score: ${score + (isCorrect ? 1 : 0)}/${questions.length}`);
      }
    }, 1000);
  };

  return (
    <div className="p-4 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">ReactJs Reviewer</h1>
      <Question data={questions[currentIndex]} onAnswer={handleAnswer} />
    </div>
  );
}

export default Quiz;
