import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setViewMode, submitQuiz } from './redux/quizSlice';
import QuizView from './components/QuizView';
import QuizReview from './components/QuizReview';
import ResultView from './components/ResultView';

function App() {
  const dispatch = useDispatch();
  const { viewMode } = useSelector(state => state.quiz);

  const renderContent = () => {
    switch(viewMode) {
      case 'quiz': return <QuizView />;
      case 'review': return <QuizReview />;
      case 'result': return <ResultView />;
      default: return <QuizView />;
    }
  };

  const getTitle = () => {
    return viewMode === 'result' || viewMode === 'review' ? "Quiz Review" : "JavaScript Quiz";
  };

  return (
    <div>
      {/* Header / Navbar */}
      <div className="navbar">
        <strong>Home</strong>
        <span>About</span>
        <span>News</span>
        <span>Quiz</span>
        <span>Contact</span>
      </div>

      {/* Banner */}
      <div className="banner">
        {getTitle()}
      </div>

      {/* Nội dung thay đổi động */}
      <div className="container">
        {renderContent()}

        {/* 3 Nút chức năng ở dưới cùng trang */}
        <div className="bottom-nav">
          <button className="btn-cyan" onClick={() => dispatch(setViewMode('quiz'))}>Quiz</button>
          <button className="btn-cyan" onClick={() => dispatch(setViewMode('review'))}>Quiz Review</button>
          <button className="btn-cyan" onClick={() => dispatch(submitQuiz())}>Submit</button>
        </div>
      </div>
    </div>
  );
}

export default App;