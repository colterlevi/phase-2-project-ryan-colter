import { useState } from 'react'

const Questions = ({ questions, currentUser }) => {
    const [score, setScore] = useState(0)


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
            let res = await req.json()
            console.log(res)
        }
        postScore()
    }

    return (
        <div className='quiz'>
            <form onSubmit={(e) => { handleSubmit(e) }}>
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
            </form>
        </div>
    )
}

export default Questions