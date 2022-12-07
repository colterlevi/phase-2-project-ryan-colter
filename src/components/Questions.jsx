import { useState } from 'react'
const Questions = ({ questions, setQuestions }) => {
    const [formPage, setFormPage] = useState('first')
    const [newArr, setNewArr] = useState([])


    const handleSubmit = async (e) => {
        e.preventDefault()
        // console.log("submitted")
        // let req = await fetch('url', { method: 'PATCH' })
    }

    return (
        <div>
            <form onSubmit={(e) => { handleSubmit(e) }}>
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
                <input type="submit" />
            </form>
        </div>
    )
}

export default Questions 