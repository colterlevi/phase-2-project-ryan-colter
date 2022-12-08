import { useState } from 'react'

const Questions = ({ questions, currentUser }) => {
    const [formPage, setFormPage] = useState('first')
    const [score, setScore] = useState(0)
    const [formStep, setFormStep] = useState("quiz")


    const handleSubmit = (e) => {
        e.preventDefault()
        // console.log("submitted")
        const postScore = async () => {
            let req = await fetch(`http://localhost:3000/users/${currentUser.id}`, {
                method: 'PATCH',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    score: currentUser.score + score,
                })
            })
            let res = req.json()
            console.log(res)
        }
        postScore()
    }

    return (
        <div className='quiz'>
            <form onSubmit={(e) => { handleSubmit(e) }}>
                {/* {formStep === "quiz" && <div> */}
                {
                    questions.map((obj) => {
                        let AllChoices = [...obj.incorrectAnswers, obj.correctAnswer]
                        AllChoices.sort(function () { return 0.5 - Math.random() })
                        const handleChange = (e) => {
                            e.preventDefault()
                            if (e.target.value === obj.correctAnswer) setScore(score + 1)
                        }

                        console.log(score)
                        return (
                            <div>
                                <h2>{obj.question}</h2>
                                <input onChange={handleChange} id='a' type="radio" name={obj.id} value={AllChoices[0]} />
                                <label for="a">{AllChoices[0]}</label>
                                <input onChange={handleChange} id='b' type="radio" name={obj.id} value={AllChoices[1]} />
                                <label for="b">{AllChoices[1]}</label>
                                <input onChange={handleChange} id='c' type="radio" name={obj.id} value={AllChoices[2]} />
                                <label for="c">{AllChoices[2]}</label>
                                <input onChange={handleChange} id='d' type="radio" name={obj.id} value={AllChoices[3]} />
                                <label for="d">{AllChoices[3]}</label>
                            </div>
                        )
                    })

                }
                <br />
                <input className="quiz-btn" type="submit" />
                {/* <button className="quiz-btn" onClick={() => { setFormStep("score") }}>See Your Score</button> */}
                {/* </div>} */}
                {/* {formStep === "score" &&
                <div>
                    <h2>Score!</h2>
                    <input className="quiz-input" type='text' placeholder='enter your score' value={formData.score} name='score' onChange={e => handleChange(e)} ></input>
                </div>
                */}
            </form>
        </div>
    )
}

export default Questions