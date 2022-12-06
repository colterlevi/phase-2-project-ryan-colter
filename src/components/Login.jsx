import { useState } from "react"

const Login = () => {

    const [formData, setFormData] = useState({
        email: '',
        password: ''
    })

    const handleSubmit = async (e) => {
        e.preventDefault()
        let req = await fetch('http://localhost:3000/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData)
        })
            let res = await fetch.json()
    }

    function handleChange(e) {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    return (
        <div className="login">
            <form className='login-form' onSubmit={e => handleSubmit(e)}>
                <h2>Login</h2>
                <input type='text' placeholder='User' value={formData.user} name='user' onChange={e => handleChange(e)} ></input>
                <input type='text' placeholder='Password' value={formData.password} name='password' onChange={e => handleChange(e)} ></input>
                <button className='login-btn' type='submit'>Login</button>
            </form>
        </div>
    )
}

export default Login