import { createSlice } from '@reduxjs/toolkit';

const initialQuestions = [
  {
    id: 1,
    question: "Inside which HTML element do we put the JavaScript?",
    options: ["javascript", "scripting", "script", "js"],
    correctAnswer: "script",
    userAnswer: null
  },
  {
    id: 2,
    question: "What are variables used for in JavaScript Programs?",
    options: [
      "Storing numbers, dates, or other values",
      "Varying randomly",
      "Causing high-school algebra flashbacks",
      "None of these"
    ],
    correctAnswer: "Storing numbers, dates, or other values",
    userAnswer: null
  },
  {
    id: 3,
    question: "Which of the following can't be done with client-side JavaScript?",
    options: ["Validating a form", "Sending a form's contents by email", "Storing files on server", "None of these"],
    correctAnswer: "Storing files on server",
    userAnswer: null
  },
  {
    id: 4,
    question: "What is the correct syntax for referring to an external script called 'xxx.js'?",
    options: ["<script href='xxx.js'>", "<script name='xxx.js'>", "<script src='xxx.js'>", "<script file='xxx.js'>"],
    correctAnswer: "<script src='xxx.js'>",
    userAnswer: null
  },
  {
    id: 5,
    question: "How do you write 'Hello World' in an alert box?",
    options: ["msgBox('Hello World');", "alertBox('Hello World');", "msg('Hello World');", "alert('Hello World');"],
    correctAnswer: "alert('Hello World');",
    userAnswer: null
  },
  {
    id: 6,
    question: "How do you create a function in JavaScript?",
    options: ["function myFunction()", "function:myFunction()", "function = myFunction()", "new function()"],
    correctAnswer: "function myFunction()",
    userAnswer: null
  },
  {
    id: 7,
    question: "How to write an IF statement in JavaScript?",
    options: ["if i = 5 then", "if (i == 5)", "if i = 5", "if i == 5 then"],
    correctAnswer: "if (i == 5)",
    userAnswer: null
  },
  {
    id: 8,
    question: "How does a FOR loop start?",
    options: ["for (i <= 5; i++)", "for (i = 0; i <= 5; i++)", "for i = 1 to 5", "for (i = 0; i <= 5)"],
    correctAnswer: "for (i = 0; i <= 5; i++)",
    userAnswer: null
  },
  {
    id: 9,
    question: "What is the correct way to write a JavaScript array?",
    options: ["var txt = new Array(1:'tim',2:'kim')", "var txt = new Array:1=('tim')2=('kim')", "var txt = new Array('tim','kim')", "var txt = ['tim','kim']"],
    correctAnswer: "var txt = ['tim','kim']",
    userAnswer: null
  },
  {
    id: 10,
    question: "How do you round the number 7.25, to the nearest integer?",
    options: ["Math.rnd(7.25)", "Math.round(7.25)", "rnd(7.25)", "round(7.25)"],
    correctAnswer: "Math.round(7.25)",
    userAnswer: null
  }
];

const quizSlice = createSlice({
  name: 'quiz',
  initialState: {
    questions: initialQuestions,
    currentQuestionIndex: 0,
    viewMode: 'quiz'
  },
  reducers: {
    selectAnswer: (state, action) => {
      const { questionId, answer } = action.payload;
      const question = state.questions.find(q => q.id === questionId);
      if (question) {
        question.userAnswer = answer;
      }
    },
    nextQuestion: (state) => {
      if (state.currentQuestionIndex < state.questions.length - 1) {
        state.currentQuestionIndex += 1;
      }
    },
    prevQuestion: (state) => {
      if (state.currentQuestionIndex > 0) {
        state.currentQuestionIndex -= 1;
      }
    },
    firstQuestion: (state) => {
      state.currentQuestionIndex = 0;
    },
    lastQuestion: (state) => {
      state.currentQuestionIndex = state.questions.length - 1;
    },
    setViewMode: (state, action) => {
      state.viewMode = action.payload;
    },
    submitQuiz: (state) => {
      state.viewMode = 'result';
    }
  }
});

// Phải có đoạn export hành động này 
export const { 
  selectAnswer, 
  nextQuestion, 
  prevQuestion, 
  firstQuestion, 
  lastQuestion, 
  setViewMode,
  submitQuiz
} = quizSlice.actions;

// Phải có đoạn export mặc định reducer này 
export default quizSlice.reducer;