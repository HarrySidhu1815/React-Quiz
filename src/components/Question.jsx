import React, { useState } from "react";
import QuizTimer from "./QuizTimer.jsx";
import Answer from "./Answer.jsx";
import QUESTIONS from "../questions.js";

const Question = ({
  onTime,
  onSelect,
  index
}) => {
    const [answer, setAnswer] = useState({
        selectAnswer: '',
        isCorrect: null
    })
    function handleSelected(answer){
        setAnswer({
            selectAnswer: answer,
            isCorrect: null
        })
        setTimeout(()=>{
            setAnswer({
                selectAnswer: answer,
                isCorrect: answer === QUESTIONS[index].answers[0]
            })
        setTimeout(()=>{
            onSelect(answer)
        }, 2000)
        }, 1000)
    }
    let answerState = ''

    let timer = 10000
    if(answer.selectAnswer){
        timer = 1000
    }else if(answer.isCorrect !== null){
        timer = 2000
    }

    if(answer.selectAnswer && answer.isCorrect !== null){
        answerState = answer.isCorrect ? 'correct' : 'wrong'
    } else if(answer.selectAnswer){
        answerState = 'answered'
    }
  return (
    <div id="question">
      <QuizTimer mode={answerState} key={timer} timeout={timer} onTime={answer.selectAnswer === '' ? onTime : null} />
      <h2>{QUESTIONS[index].text}</h2>
      <Answer
        answers={QUESTIONS[index].answers}
        answerState={answerState}
        selectedAnswer={answer.selectAnswer}
        onSelect={handleSelected}
      />
    </div>
  );
};

export default Question;
