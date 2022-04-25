import React from "react";
import { nanoid } from 'https://cdn.jsdelivr.net/npm/nanoid/nanoid.js'


export default function Question(props) {

    const [answers, setAnswers] = React.useState(props.answersArr)


    function setColor(selected, correct) {

        if (props.check) {
            if (selected && correct) {
                return "correct"
            } else if (selected && !correct) {
                return "incorrect"
            }
        } else return selected ? "selected" : ""
    }

    function handleBtnClick(correct, id) {
        setAnswers(prevAnswers => prevAnswers.map(ans => {
            if (ans.id == id) {
                return { ...ans, isSelected: true }
            } else {
                return { ...ans, isSelected: false }
            }
        }))

    }
    //  props.handleCorrectCount(correct, id)

    const buttons = answers.map(item => {
        return <button
            key={nanoid()}
            selected={item.isSelected}
            onClick={() => handleBtnClick(item.isCorrect, item.id)}
            className={setColor(item.isSelected, item.isCorrect)}
        >
            {item.text}</button>
    })

    return (
        <div className="question-answer">
            <p className="question">{props.question}</p>
            <div className="answers">
                {buttons}
            </div>
        </div>
    )
}