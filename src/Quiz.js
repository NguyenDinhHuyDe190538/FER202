// src/Quiz.js
import React, { useContext, useState, useEffect } from 'react'; // 
import { QuizContext } from './QuizContext';

const Quiz = () => {
  // Dùng useContext để lấy dữ liệu từ trạng thái Context 
  const {
    questions,
    currentQuestionIndex,
    selectedAnswer,
    setSelectedAnswer,
    score,
    isFinished,
    handleNextQuestion,
    addNewQuestion
  } = useContext(QuizContext);

  // useState quản lý thông tin input nhập câu hỏi mới từ phía user 
  const [inputQuestion, setInputQuestion] = useState('');
  const [inputAnswers, setInputAnswers] = useState(['', '', '']);
  const [inputCorrect, setInputCorrect] = useState('');

  // useEffect tự động theo dõi việc hiển thị danh sách câu hỏi 
  useEffect(() => {
    if (!isFinished && questions[currentQuestionIndex]) {
      console.log(`Đang hiển thị câu hỏi số: ${currentQuestionIndex + 1}`);
    }
  }, [currentQuestionIndex, isFinished, questions]);

  // Xử lý sự kiện thêm câu hỏi tự nhập 
  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!inputQuestion || inputAnswers.some(ans => ans === '') || !inputCorrect) {
      alert("Vui lòng điền đầy đủ thông tin câu hỏi và tùy chọn!");
      return;
    }
    
    // Cập nhật câu hỏi mới vào state 
    addNewQuestion({
      question: inputQuestion,
      answers: inputAnswers,
      correctAnswer: inputCorrect
    });

    // Reset các ô nhập dữ liệu 
    setInputQuestion('');
    setInputAnswers(['', '', '']);
    setInputCorrect('');
    alert("Thêm câu hỏi mới thành công!");
  };

  // Giao diện khi hoàn thành bài Quiz 
  if (isFinished) {
    return (
      <div style={{ padding: '20px', fontFamily: 'Arial' }}>
        <h1 style={{ color: '#dc3545', fontSize: '40px' }}>Quiz Completed!</h1>
        <p style={{ fontSize: '24px' }}>Your score: {score}</p>
      </div>
    );
  }

  const currentQuiz = questions[currentQuestionIndex];

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial', maxWidth: '600px' }}>
      
      {/* KHU VỰC 1: HIỂN THỊ CÂU HỎI TRẮC NGHIỆM  */}
      <div style={{ border: '1px solid #ccc', padding: '20px', borderRadius: '8px', marginBottom: '30px' }}>
        <h1 style={{ color: '#dc3545', margin: '0 0 10px 0' }}>Question {currentQuestionIndex + 1}</h1>
        <p style={{ fontSize: '18px', marginBottom: '20px' }}>{currentQuiz?.question}</p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          {currentQuiz?.answers.map((answer, index) => (
            <label 
              key={index} 
              style={{ 
                display: 'flex', 
                alignItems: 'center', 
                padding: '12px', 
                border: '1px solid #ddd', 
                borderRadius: '4px',
                cursor: 'pointer'
              }}
            >
              <input
                type="radio"
                name="quiz-answer"
                value={answer}
                checked={selectedAnswer === answer}
                onChange={(e) => setSelectedAnswer(e.target.value)}
                style={{ marginRight: '10px' }}
              />
              {answer}
            </label>
          ))}
        </div>

        <button 
          onClick={handleNextQuestion}
          disabled={!selectedAnswer}
          style={{
            marginTop: '20px',
            backgroundColor: '#dc3545',
            color: 'white',
            border: 'none',
            padding: '10px 25px',
            fontSize: '16px',
            borderRadius: '4px',
            cursor: selectedAnswer ? 'pointer' : 'not-allowed',
            opacity: selectedAnswer ? 1 : 0.6
          }}
        >
          Next
        </button>
      </div>

      <hr />

      {/* KHU VỰC 2: USER INPUT - TỰ NHẬP THÊM CÂU HỎI  */}
      <div style={{ marginTop: '20px', padding: '20px', background: '#f9f9f9', borderRadius: '8px', border: '1px dashed #bbb' }}>
        <h3>Tự nhập câu hỏi và lựa chọn đáp án của bạn:</h3>
        <form onSubmit={handleFormSubmit}>
          <div style={{ marginBottom: '10px' }}>
            <label>Nội dung câu hỏi: </label>
            <input 
              type="text" 
              value={inputQuestion} 
              onChange={(e) => setInputQuestion(e.target.value)} 
              style={{ width: '100%', padding: '8px', marginTop: '5px' }}
              placeholder="Nhập câu hỏi tại đây..."
            />
          </div>
          
          {inputAnswers.map((ans, idx) => (
            <div style={{ marginBottom: '10px' }} key={idx}>
              <label>Lựa chọn đáp án {idx + 1}: </label>
              <input 
                type="text" 
                value={ans} 
                onChange={(e) => {
                  const newAns = [...inputAnswers];
                  newAns[idx] = e.target.value;
                  setInputAnswers(newAns);
                }} 
                style={{ width: '100%', padding: '8px', marginTop: '5px' }}
                placeholder={`Nhập tùy chọn thứ ${idx + 1}`}
              />
            </div>
          ))}

          <div style={{ marginBottom: '15px' }}>
            <label style={{ color: 'green', fontWeight: 'bold' }}>Đáp án đúng chính xác: </label>
            <input 
              type="text" 
              value={inputCorrect} 
              onChange={(e) => setInputCorrect(e.target.value)} 
              style={{ width: '100%', padding: '8px', marginTop: '5px', borderColor: 'green' }}
              placeholder="Ghi chính xác nội dung của 1 trong các đáp án trên"
            />
          </div>

          <button type="submit" style={{ padding: '10px 20px', background: '#28a745', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
            Thêm câu hỏi vào hệ thống
          </button>
        </form>
      </div>

    </div>
  );
};

export default Quiz;