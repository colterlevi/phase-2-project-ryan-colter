import {useState} from 'react'
const Questions = () => {
    const [formPage , setFormPage] = useState('first')
    const handleSubmit = (e) => {
        e.preventDefault()
    }
    return(
        <div>
            <form onSubmit={ e = handleSubmit(e)}>
                {
                    formPage === 'first' && 
                    <div>
                        <p>Q1: {}</p>
                        <button onClick={() => {setFormPage('second')}}>Next</button>
                    </div>
                }
                {
                    formPage === 'second' && 
                    <div>
                        <p>Q1: {}</p>
                        <button onClick={() => {setFormPage('first')}}>Previous</button>
                        <button onClick={() => {setFormPage('third')}}>Next</button>
                    </div>
                }
                {
                    formPage === 'third' &&
                    <div>
                        <p>Q1: {}</p>
                        <button onClick={() => {setFormPage('second')}}>Previous</button>
                        <button onClick={() => {setFormPage('fourth')}}>Next</button>
                    </div>
                }
                {
                    formPage === 'fourth' && 
                    <div>
                        <p>Q1: {}</p>
                        <button onClick={() => {setFormPage('third')}}>Previous</button>
                        <button onClick={() => {setFormPage('fifth')}}>Next</button>
                    </div>
                }
                {
                    formPage === 'fifth' && 
                    <div>
                        <p>Q1: {}</p>
                        <button onClick={() => {setFormPage('fourth')}}>Previous</button>
                        <input type="submit" />
                    </div>
                }
            </form>
        </div>
    )
}

export default Questions 