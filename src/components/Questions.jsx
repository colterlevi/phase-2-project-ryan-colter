import { useState } from 'react'
const Questions = ({ questions, setQuestions }) => {
    const [formPage, setFormPage] = useState('first')
    const [newArr, setNewArr] = useState([])
    const [formStep, setFormStep] = useState("quiz")
    const [formData, setFormData] = useState({
        score: null
    })


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
                        // console.log(AllChoices)
                        return (
                            <>
                                <h2>{obj.question}</h2>
                                <input id='a' type="radio" name={obj.id} />
                                <label for="a">{AllChoices[0]}</label>
                                <input id='b' type="radio" name={obj.id} />
                                <label for="b">{AllChoices[1]}</label>
                                <input id='c' type="radio" name={obj.id} />
                                <label for="c">{AllChoices[2]}</label>
                                <input id='d' type="radio" name={obj.id} />
                                <label for="d">{AllChoices[3]}</label>
                            </>
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