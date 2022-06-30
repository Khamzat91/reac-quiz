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
  const [currentIndexQuestion, setCurrentIndexQuestion] = React.useState(null);

  const classNameActive = (isCorrect, index) => {
    if (showColor && currentIndexQuestion === index) {
      if (isCorrect) {
        return "green"
      } else {
        return "red"
      }
    }
  }

  const incrementCurrentQuestion = (index) => {
    setCurrentIndexQuestion(index)
    setShowColor(true)
    setTimeout(() => {
      setCurrentIndexQuestion(null)
      setShowColor(false)
      setCurrentQuestion(prev => prev + 1)
    }, 1000)
  }

  return (
    <div className="app">
      <div className="container">
        {currentQuestion + 1 <= questions.length ? <div className="app-question">
          <div className="app-question__left">
            <div className="app-question__title">
              Question {currentQuestion + 1}/<span className="app-question__not">{questions.length}</span>
            </div>
            <div className="app-question__text">
              {questions[currentQuestion].questionText}
            </div>
          </div>
          <div className="app-question__right">
            <ul className="app-question__list">
              {questions[currentQuestion].answerOptions.map((option, index) =>
                <li onClick={() => incrementCurrentQuestion(index)}
                    className={"app-question__item " + classNameActive(option.isCorrect, index)}
                    key={option.answerText}>
                  {option.answerText}
                </li>
              )}
            </ul>
          </div>
        </div> : <h1>Test end</h1>}
      </div>
    </div>
  );
}

export default App;
