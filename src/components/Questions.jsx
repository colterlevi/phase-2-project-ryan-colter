import { useState } from 'react'
// you need state that tracks score or answers outside of this component
// ONLY once the trivia game complete do you use a tiny little form element
// to submit the score or whatever



const Questions = ({setScore, score,  questions, setQuestions}) => {
    const [formPage, setFormPage] = useState('first')

    const handleScoreUpdate = () => {
        
    }
    const q = [
    {
        question: questions[0],
        // answers: [
        //     {key: 'A', choice: questions[0].incorrectAnswers, correct: false},
        //     {key: 'B', choice: questions[0].incorrectAnswers, correct: false},
        //     {key: 'C', choice: questions[0].incorrectAnswers, correct: false},
        //     {key: 'D', choice: questions[0].correctAnswer, correct: true},
        // ]
    },
    // {
    //     question: questions[1],
    //     answers: [
    //         {key: 'A', choice: questions[1].incorrectAnswers, correct: false},
    //         {key: 'B', choice: questions[1].incorrectAnswers, correct: false},
    //         {key: 'C', choice: questions[1].incorrectAnswers, correct: false},
    //         {key: 'D', choice: questions[1].correctAnswer, correct: true},
    //     ]
    // },
    // {
    //     question: questions[2],
    //     answers: [
    //         {key: 'A', choice: questions[2].incorrectAnswers, correct: false},
    //         {key: 'B', choice: questions[2].incorrectAnswers, correct: false},
    //         {key: 'C', choice: questions[2].incorrectAnswers, correct: false},
    //         {key: 'D', choice: questions[2].correctAnswer, correct: true},
    //     ]
    // },
    // {
    //     question: questions[3],
    //     answers: [
    //         {key: 'A', choice: questions[3].incorrectAnswers, correct: false},
    //         {key: 'B', choice: questions[3].incorrectAnswers, correct: false},
    //         {key: 'C', choice: questions[3].incorrectAnswers, correct: false},
    //         {key: 'D', choice: questions[3].correctAnswer, correct: true},
    //     ]
    // },
    // {
    //     question: questions[4],
    //     answers: [
    //         {key: 'A', choice: questions[4].incorrectAnswers, correct: false},
    //         {key: 'B', choice: questions[4].incorrectAnswers, correct: false},
    //         {key: 'C', choice: questions[4].incorrectAnswers, correct: false},
    //         {key: 'D', choice: questions[4].correctAnswer, correct: true},
    //     ]
    // }
]
const  [questionsNew, setQuestionsNew] = useState(q)
setQuestionsNew([...questionsNew, {...questions}])
console.log(q)
    return (
        <div>
        <h2>Game</h2>
            {/* {
                questionsNew.map((question) => {
                    return(
                        <div>
                          <h2>{question.question}</h2>
                          {
                            question.answers.map((answer) => {
                                return(
                                    <div onClick={handleScoreUpdate}>
                                      {answer.key}: {answer.choice}
                                    </div>
                                )
                            })
                          }
                        </div>
                    )
                })
            } */}
        </div>
    )
}

export default Questions 