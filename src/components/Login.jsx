import { useState } from "react"

const Login = ({ user, setUser }) => {

    const [formData, setFormData] = useState({
        username: '',
        password: ''
    })

    const handleSubmit = async (e) => {
        e.preventDefault()
        let req = await fetch('http://localhost:3000/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData)
        })
            let res = await req.json()
            setUser(formData)
            console.log(user)
    }

    function handleChange(e) {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    return (
        <div className="login">
            <form className='login-form' onSubmit={e => handleSubmit(e)}>
                <h2>Login</h2>
                <input type='text' placeholder='Username' value={formData.username} name='username' onChange={e => handleChange(e)} ></input>
                <input type='password' placeholder='Password' value={formData.password} name='password' onChange={e => handleChange(e)} ></input>
                <button className='login-btn' type='submit'>Login</button>
            </form>
        </div>
    )
}

export default Login