import React from 'react';
import { useSelector } from 'react-redux';

const ResultView = () => {
  const { questions } = useSelector(state => state.quiz);

  return (
    <div>
      {questions.map((q) => {
        const isCorrect = q.userAnswer === q.correctAnswer;
        return (
          <div key={q.id} className={`card-review ${isCorrect ? 'correct-card' : 'incorrect-card'}`}>
            <h4>Q.{q.id}. {q.question}</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '5px', paddingLeft: '10px' }}>
              {q.options.map((option, idx) => (
                <label key={idx} style={{ opacity: q.userAnswer === option ? 1 : 0.6 }}>
                  <input 
                    type="radio" 
                    disabled 
                    checked={q.userAnswer === option} 
                  /> {option}
                </label>
              ))}
            </div>
            <div className="right-answer-box">
              Right answer is: <strong>{q.correctAnswer}</strong>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ResultView;