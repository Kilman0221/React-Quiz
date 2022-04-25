import React from "react";
import { nanoid } from 'https://cdn.jsdelivr.net/npm/nanoid/nanoid.js'
import { decode } from "he"
import Question from "./Question";

export default function Quiz() {

    //declaring states
    const [questions, setQuestions] = React.useState([]);
    const [correctCount, setCorrectCount] = React.useState(0);
    const [check, setCheck] = React.useState(false)


    //using effect to fetch data from api
    React.useEffect(() => {
        fetch("https://opentdb.com/api.php?amount=5")
            .then(res => res.json())
            .then(data => {

                //mapping data into object
                const result = data.results.map(data => {
                    const incorrectAns = data.incorrect_answers;
                    const correctAnsObj = [{ text: decode(data.correct_answer), isCorrect: true, isSelected: false, id: nanoid() }];
                    const incorrectAnsObj = incorrectAns.map(ans => ({ text: decode(ans), isCorrect: false, isSelected: false, id: nanoid() }));
                    const allAnswersArr = correctAnsObj.concat(incorrectAnsObj)

                    const shuffled = allAnswersArr.sort(() => .5 - Math.random());

                    const asd = {
                        id: nanoid(),
                        question: decode(data.question),
                        correctAnswer: data.correct_answer,
                        incorrectAnswers: data.incorrect_answers,
                        answersArr: shuffled,
                        isCorrect: false
                    }
                    return asd;

                })
                //updating state
                setQuestions(result)
            })
    }, [])


    function handleCorrectCount(correct, id) {
        //changing value of isCorrect in question object 

        setQuestions(prevQuest => prevQuest.map(q => {


            if (q.id === id) {
                return { ...q, isCorrect: correct }
            }
            else return { ...q }
        })
        )

    }


    function handleCheck() {
        setCheck(prevCheck => !prevCheck)
        //updating correct answers counter
        setCorrectCount(questions.filter(q => q.isCorrect === true).length)
    }

    //const that shows score
    const showCount = check ? <p>You scored {correctCount}/{questions.length} correct answers</p> : <p></p>


    const questionElements = questions.length > 0 ? questions.map(item => {
        return (
            <Question
                key={nanoid()}
                id={item.id}
                question={item.question}
                correctAnswer={item.correctAnswer}
                incorrectAnswers={item.incorrectAns}
                answersArr={item.answersArr}
                isCorrect={item.isCorrect}
                handleCorrectCount={handleCorrectCount}
                check={check}
            />
        )
    }) : "";

    return (
        <div className="quiz-wrapper">
            <div className="question-container">
                {questionElements}
            </div>
            <div className="score-wrapper">
                {showCount}
                <button className="check-btn" onClick={handleCheck}>{check ? "Play again" : "Check answers"}</button>
            </div>
        </div>
    )

}