import React, { useEffect, useState } from 'react'

const QuizTimer = ({timeout, onTime, mode}) => {
    const [timeRemaining, setTimeRemaining] = useState(timeout)

    useEffect(()=>{
        const interval = setInterval(()=>{
            setTimeRemaining(prevTime => prevTime-100)
        }, 100)
        return ()=>{
            clearTimeout(interval)
        }
    }, [])

    useEffect(()=>{
        const timer = setTimeout(onTime, timeout)
        return ()=>{
            clearTimeout(timer)
        }
    }, [onTime, timeout])
  return (
    <progress id='question-time' value={timeRemaining} max={timeout} className={mode}/>
  )
}

export default QuizTimer
