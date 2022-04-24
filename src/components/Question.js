import React from "react";
import { nanoid } from 'https://cdn.jsdelivr.net/npm/nanoid/nanoid.js'


export default function Question(props) {



    function handleBtnClick() {

    }
    console.log(props)

    const buttons = props.answersArr.map(item => {
        return <button
            key={nanoid()}
            correct={props.correct}
            selected={props.isSelected}
            onClick={handleBtnClick}
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