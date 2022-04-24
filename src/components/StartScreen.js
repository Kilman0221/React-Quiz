import React from "react";




export default function StartScreen(props) {

    return (
        <div className="first-start">
            <h1>Quizzical</h1>
            <p>some advice</p>
            <button onClick={props.handleChange}>
                Start new game!
            </button>
        </div>
    )
}