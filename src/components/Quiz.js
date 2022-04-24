import React from "react";
import { nanoid } from 'https://cdn.jsdelivr.net/npm/nanoid/nanoid.js'
import { decode } from "he"

export default function StartScreen() {

    const [questions, setQuestions] = React.useState([])


    React.useEffect(() => {
        fetch("https://opentdb.com/api.php?amount=5")
            .then(res => res.json())
            .then(data => (createQuiz(data.results)))
    }, [])


    function createQuiz(data) {

        data.map(data => {
            const incorrectAns = data.incorrect_answers;
            const correctAnsObj = [{ text: data.correct_answer, correct: true, isSelected: false, id: nanoid() }];
            const incorrectAnsObj = incorrectAns.map(ans => ({ text: ans, correct: false, isSelected: false, id: nanoid() }));
            const allAnswersArr = correctAnsObj.concat(incorrectAnsObj)

            const shuffled = allAnswersArr.sort(() => .5 - Math.random());
            return setQuestions(prevQuest => [...prevQuest, {
                id: nanoid(),
                question: data.question,
                correctAnswer: data.correct_answer,
                incorrectAnswers: data.incorrect_answers,
                answersArr: shuffled,
                isCorrect: false
            }]
            )
        })
    }

    console.log(questions)

    return (
        <div>asd</div>
    )
}