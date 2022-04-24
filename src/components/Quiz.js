import React from "react";
import { nanoid } from 'https://cdn.jsdelivr.net/npm/nanoid/nanoid.js'
import { decode } from "he"
import Question from "./Question";

export default function Quiz() {

    const [questions, setQuestions] = React.useState([])


    React.useEffect(() => {
        fetch("https://opentdb.com/api.php?amount=5")
            .then(res => res.json())
            .then(data => {

                const result = data.results.map(data => {
                    const incorrectAns = data.incorrect_answers;
                    const correctAnsObj = [{ text: decode(data.correct_answer), correct: true, isSelected: false, id: nanoid() }];
                    const incorrectAnsObj = incorrectAns.map(ans => ({ text: decode(ans), correct: false, isSelected: false, id: nanoid() }));
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

                setQuestions(result)
            })
    }, [])

    const questionElements = questions.length > 0 ? questions.map(item => {
        return (
            <Question
                key={item.id}
                id={item.id}
                question={item.question}
                correctAnswer={item.correctAnswer}
                incorrectAnswers={item.incorrectAns}
                answersArr={item.answersArr}
                isCorrect={item.isCorrect}
            />
        )
    }) : "";

    return (
        <div className="question-container">
            {questionElements}
        </div>
    )

}