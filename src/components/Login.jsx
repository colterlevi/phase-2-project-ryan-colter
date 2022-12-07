import { useState } from "react"

const Login = ({ users, setCurrentUser, setLoggedIn }) => {

    const [formData, setFormData] = useState({
        username: '',
        password: ''
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        users.some(user => {
            if (user.username === formData.username && user.password === formData.password) {
                setCurrentUser(user),
                    setLoggedIn(true)
                return true
            } else {
                alert("GO TO SIGN UP")
                return false
            }
        })
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
                <button className='login-btn' type='submit'>Login</button> <br />
            </form>
        </div>
    )
}

export default Login