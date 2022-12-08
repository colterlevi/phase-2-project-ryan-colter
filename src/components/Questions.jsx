import { useState } from 'react'
const Questions = ({ questions, setQuestions }) => {
    const [formPage, setFormPage] = useState('first')
    const [newArr, setNewArr] = useState([])
    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log("submitted")
        // let req = await fetch('url', { method: 'PATCH' })
    }

    //this creates a nested array
    let Arr = []
    questions.forEach((obj) => {
        let BigSet = [
                            {
                                question: obj.question,
                                answers: [{
                                    key: 'A', answer: obj.incorrectAnswers[0], correct: false
                                    }, 
                                    {key: 'B', answer: obj.incorrectAnswers[1], correct: false},
                                    {key: 'C', answer: obj.incorrectAnswers[2], correct: false},
                                    {key: 'D', answer: obj.correctAnswer, correct: true},
                                    ]
                            }
                        ]
        Arr.push(BigSet)
        console.log(Arr) 
    })
    

        /* Below causes an infinite loop to render after I map it*/
    // setNewArr([...newArr, questions.map((obj)=> {
    //     let BigSet = [
    //                     {
    //                         question: obj.question,
    //                         answers: [{
    //                             key: 'A', answer: obj.incorrectAnswers[0], correct: false
    //                             }, 
    //                             {key: 'B', answer: obj.incorrectAnswers[1], correct: false},
    //                             {key: 'C', answer: obj.incorrectAnswers[2], correct: false},
    //                             {key: 'D', answer: obj.correctAnswer, correct: true},
    //                             ]
    //                     }
    //                 ]
    //     return (
    //         <div>
    //             <h1>{BigSet[0].question}</h1>
    //         </div>
    //     )
    // })])
    console.log(questions)
// questions = [
//     {
//         question: 'What is higher than 4',
//         answers: [
//             {key: 'A', choice: '4', correct: false},
//             {key: 'B', choice: '5', correct: true},
//         ]
//     }
    return (
        <div>
            <form onSubmit={(e) => { handleSubmit(e) }}>
                {
                    questions.map((obj) => {
                        let Arr = []
                        let BigSet = [
                            {
                                question: obj.question,
                                answers: [{
                                    key: 'A', answer: obj.incorrectAnswers[0], correct: false
                                    }, 
                                    {key: 'B', answer: obj.incorrectAnswers[1], correct: false},
                                    {key: 'C', answer: obj.incorrectAnswers[2], correct: false},
                                    {key: 'D', answer: obj.correctAnswer, correct: true},
                                    ]
                            }
                        ]
                        Arr.push(BigSet)
                        
                        let New = BigSet.sort(function () { return 0.5 - Math.random() })
                        console.log(Arr)
                        {/* console.log(New) */}
                        
                        {/* if(obj.correctAnswer === ) {
                            console.log('correct')
                        }else {
                            console.log('wrong')
                        } */}
                        return (
                            <>
                                
                             {/* <h2>{obj.question}</h2>
                                
                                    <input id='a' type="radio" name={obj.id} value={New[0].answers.correct}/>
                                    <label for="a">{New[0].answers.answer}</label>
                                
                                
                                    <input id='b' type="radio" name={obj.id} value={New[1].answers.correct}/>
                                    <label for="b">{New[1].answers.answer}</label>
                                
                                    <input id='c' type="radio" name={obj.id} value={New[2].answers.correct}/>
                                    <label for="c">{New[2].answers.answer}</label>
                                
                                
                                    <input id='d' type="radio" name={obj.id} value={New[3].answers.correct}/>
                                    <label for="d">{New[3].answers.answer}</label>
                                

                                 */}
                            </>
                        )
                    })
                }
                <input type="submit" />
            </form>
        </div>
    )
}

export default Questions 