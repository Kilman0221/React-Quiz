import React from "react";


export default function Question(props) {
    return (
        <div className="question-answer">
            <p className="question">{props.question}</p>
        </div>
    )
}