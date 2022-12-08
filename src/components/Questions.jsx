import { useState } from 'react'
const Questions = ({ questions, setQuestions }) => {
    const [formPage, setFormPage] = useState('first')
    const [score, setScore] = useState(0)
    const [formStep, setFormStep] = useState("quiz")
    const [formData, setFormData] = useState({
        score: null
    })

    // const incorrectAnswers = questions.map((a) => a.incorrectAnswers)
    // const correctAnswer = questions.map((a) => a.correctAnswer)

    // setNewArr([...incorrectAnswers, correctAnswer])

    // console.log(newArr)


    const handleSubmit = async (e) => {
        e.preventDefault()
        // console.log("submitted")
        // let req = await fetch('http://localhost:3000/users', { method: 'PATCH' })
    }

    function handleChange(e) {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    return (
        <div className='quiz'>
            <form onSubmit={(e) => { handleSubmit(e) }}>
        { formStep === "quiz" && <div>
                {
                    questions.map((obj) => {
                        let AllChoices = [...obj.incorrectAnswers, obj.correctAnswer]
                        AllChoices.sort(function () { return 0.5 - Math.random() })
                        const handleChange = (e) => {
                            e.preventDefault()
                            if (e.target.value === obj.correctAnswer) setScore(score + 1) 
                            else return;
                        }
                        
                        console.log(score)
                        return (
                            <div>
                                <h2>{obj.question}</h2>
                                <input onChange={handleChange} id='a' type="radio" name={obj.id} value={AllChoices[0]}/>
                                <label for="a">{AllChoices[0]}</label>
                                <input onChange={handleChange} id='b' type="radio" name={obj.id} value={AllChoices[1]}/>
                                <label for="b">{AllChoices[1]}</label>
                                <input onChange={handleChange} id='c' type="radio" name={obj.id} value={AllChoices[2]}/>
                                <label for="c">{AllChoices[2]}</label>
                                <input onChange={handleChange} id='d' type="radio" name={obj.id} value={AllChoices[3]}/>
                                <label for="d">{AllChoices[3]}</label>
                            </div>
                        )
                    })
                
                }
                <br />
                <button className="quiz-btn" onClick={() => { setFormStep("score") }}>See Your Score</button>
                </div>}
                {formStep === "score" && <div>
                    <h2>Score!</h2>
                    <input className="quiz-input" type='text' placeholder='enter your score' value={formData.score} name='score' onChange={e => handleChange(e)} ></input>
                    <input className="quiz-btn" type="submit" />
                </div>
                }
            </form>
        </div>
    )
}

export default Questions 