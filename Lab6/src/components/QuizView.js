import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectAnswer, nextQuestion, prevQuestion, firstQuestion, lastQuestion } from '../redux/quizSlice';

const QuizView = () => {
  const dispatch = useDispatch();
  const { questions, currentQuestionIndex } = useSelector(state => state.quiz);
  const currentQ = questions[currentQuestionIndex];

  return (
    <div>
      <h3>Q.{currentQ.id} {currentQ.question}</h3>
      <div className="options-grid">
        {currentQ.options.map((option, idx) => (
          <label key={idx} className="option-item">
            <input 
              type="radio" 
              name={`question-${currentQ.id}`} 
              checked={currentQ.userAnswer === option}
              onChange={() => dispatch(selectAnswer({ questionId: currentQ.id, answer: option }))}
            />
            {option}
          </label>
        ))}
      </div>

      <div className="pagination-btns">
        <button className="btn-blue" onClick={() => dispatch(firstQuestion())}>First</button>
        <button className="btn-blue" onClick={() => dispatch(prevQuestion())}>Prev</button>
        <button className="btn-blue" onClick={() => dispatch(nextQuestion())}>Next</button>
        <button className="btn-blue" onClick={() => dispatch(lastQuestion())}>Last</button>
      </div>
    </div>
  );
};

export default QuizView;