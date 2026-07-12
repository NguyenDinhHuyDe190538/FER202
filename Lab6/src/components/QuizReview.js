import React from 'react';
import { useSelector } from 'react-redux';

const QuizReview = () => {
  const { questions } = useSelector(state => state.quiz);

  return (
    <div>
      <div className="review-grid">
        {questions.map((q, idx) => (
          <div key={q.id} className="review-item">
            <div style={{ textDecoration: 'underline', marginBottom: '8px' }}>Question No {q.id}</div>
            <strong>{q.userAnswer ? 'Answered' : 'Unanswered'}</strong>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuizReview;