import React from "react";
import './index.css';


const questions = [
  {
    questionText: 'What is the capital of France?',
    answerOptions: [
      {answerText: 'New York', isCorrect: false},
      {answerText: 'London', isCorrect: false},
      {answerText: 'Paris', isCorrect: true},
      {answerText: 'Dublin', isCorrect: false},
    ],
  },
  {
    questionText: 'Who is CEO of Tesla?',
    answerOptions: [
      {answerText: 'Jeff Bezos', isCorrect: false},
      {answerText: 'Elon Musk', isCorrect: true},
      {answerText: 'Bill Gates', isCorrect: false},
      {answerText: 'Tony Stark', isCorrect: false},
    ],
  },
  {
    questionText: 'The iPhone was created by which company?',
    answerOptions: [
      {answerText: 'Apple', isCorrect: true},
      {answerText: 'Intel', isCorrect: false},
      {answerText: 'Amazon', isCorrect: false},
      {answerText: 'Microsoft', isCorrect: false},
    ],
  },
  {
    questionText: 'How many Harry Potter books are there?',
    answerOptions: [
      {answerText: '1', isCorrect: false},
      {answerText: '4', isCorrect: false},
      {answerText: '6', isCorrect: false},
      {answerText: '7', isCorrect: true},
    ],
  },
];

function App() {
  const [currentQuestion, setCurrentQuestion] = React.useState(0);
  const [showColor, setShowColor] = React.useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = React.useState(null);
  const [showScore, setShowScore] = React.useState(false)
  const [score, setScore] = React.useState(0);

  const incrementCurrentQuestion = (index, isCorrect) => {
    setCurrentQuestionIndex(index)
    setShowColor(true)
    setTimeout(() => {
      setCurrentQuestionIndex(null)
      setShowColor(false)
      if (isCorrect) {
        setScore(prev => prev + 1)
      }
      if (currentQuestion + 1 < questions.length) {
        setCurrentQuestion(prev => prev + 1)
      } else {
        setShowScore(true)
      }
    }, 1000)
  }

  const classNameActive = (isCorrect, index) => {
    if (showColor && currentQuestionIndex === index) {
      if (isCorrect) {
        return "green"
      } else {
        return "red"
      }
    }
  }

  return (
    <div className="app">
      <div className="container">
        {showScore ?
          (<div className="app-question__score">You scored {score} out of {questions.length}</div>)
          :
          (<div className="app-question">
            <div className="app-question__left">
              <div className="app-question__title">
                Questions {currentQuestion + 1}/<span className="app-question__not">{questions.length}</span>
              </div>
              <div className="app-question__text">
                {questions[currentQuestion].questionText}
              </div>
            </div>
            <div className="app-question__right">
              <ul className="app-question__list">
                {questions[currentQuestion].answerOptions.map((option, index) =>
                  <li key={option.answerText} onClick={() => incrementCurrentQuestion(index, option.isCorrect)}
                      className={"app-question__item " + classNameActive(option.isCorrect, index)}>
                    {option.answerText}
                  </li>)
                }
              </ul>
            </div>
          </div>)}
      </div>
    </div>
  );
}

export default App;
