import { useState } from 'react'
const Questions = ({ questions, setQuestions }) => {
    const [formPage, setFormPage] = useState('first')
    const [newArr, setNewArr] = useState([])


    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log("submitted")
        // let req = await fetch('url', { method: 'PATCH' })
    }

    return (
        <div>
            <form onSubmit={(e) => { handleSubmit(e) }}>
                {
                    questions.map((obj) => {
                        {/* let AllChoices = [...obj.incorrectAnswers, obj.correctAnswer]
                        AllChoices.sort(function () { return 0.5 - Math.random() }) */}
                        let AllChoices = [
                            {answer: obj.incorrectAnswers[0],
                            correct: false},
                            {answer: obj.incorrectAnswers[1],
                            correct: false},
                            {answer: obj.incorrectAnswers[2],
                            correct: false},
                            {answer: obj.correctAnswer,
                            correct: true},
                        ]
                        
                        let New = AllChoices.sort(function () { return 0.5 - Math.random() })
                        
                        console.log(New[0])
                        console.log(New.correct)
                        
                        {/* if(obj.correctAnswer === ) {
                            console.log('correct')
                        }else {
                            console.log('wrong')
                        } */}
                        return (
                            <>

                             <h2>{obj.question}</h2>
                                
                                    <input id='a' type="radio" name={obj.id} value={New[0].correct}/>
                                    <label for="a">{New[0].answer}</label>
                                
                                
                                    <input id='b' type="radio" name={obj.id} value={New[1].correct}/>
                                    <label for="b">{New[1].answer}</label>
                                
                                    <input id='c' type="radio" name={obj.id} value={New[2].correct}/>
                                    <label for="c">{New[2].answer}</label>
                                
                                
                                    <input id='d' type="radio" name={obj.id} value={New[3].correct}/>
                                    <label for="d">{New[3].answer}</label>
                                

                                {/* <h2>{obj.question}</h2>
                                <div>
                                    <input id='a' type="radio" name={obj.id} />
                                    <label for="a">{AllChoices[0]}</label>
                                </div>
                                <div>
                                    <input id='b' type="radio" name={obj.id} />
                                    <label for="b">{AllChoices[1]}</label>
                                </div>
                                <div>
                                    <input id='c' type="radio" name={obj.id} />
                                    <label for="c">{AllChoices[2]}</label>
                                </div>
                                <div>
                                    <input id='d' type="radio" name={obj.id} />
                                    <label for="d">{AllChoices[3]}</label>
                                </div> */}
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