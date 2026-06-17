// src/QuizContext.js
import React, { createContext, useState } from 'react';
import { quizData } from './QuizData';

// Khởi tạo Context toàn cục
export const QuizContext = createContext();

export const QuizProvider = ({ children }) => {
  // useState khởi tạo danh sách câu hỏi ban đầu 
  const [questions, setQuestions] = useState(quizData);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  // Hàm xử lý khi nhấn nút chuyển câu và kiểm tra đáp án
  const handleNextQuestion = () => {
    // So sánh câu trả lời đã chọn với đáp án đúng
    if (selectedAnswer === questions[currentQuestionIndex].correctAnswer) {
      setScore((prevScore) => prevScore + 1);
    }

    if (currentQuestionIndex + 1 < questions.length) {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
      setSelectedAnswer(''); // Reset lựa chọn của câu tiếp theo
    } else {
      setIsFinished(true); // Đánh dấu hoàn thành bài trắc nghiệm
    }
  };

  // Hàm cập nhật state khi người dùng tự nhập thêm câu hỏi 
  const addNewQuestion = (newQuestion) => {
    setQuestions([...questions, newQuestion]);
  };

  return (
    <QuizContext.Provider value={{
      questions,
      currentQuestionIndex,
      selectedAnswer,
      setSelectedAnswer,
      score,
      isFinished,
      handleNextQuestion,
      addNewQuestion
    }}>
      {children}
    </QuizContext.Provider>
  );
};