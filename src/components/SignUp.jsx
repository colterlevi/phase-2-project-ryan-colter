import { useEffect, useState } from 'react'

const SignUp = ({ user, setUser}) => {
    // useEffect(() => {
    //     handleSubmit()
    // },[])
    const [usernameInput, setUsernameInput] = useState('')
    const [passwordInput, setPasswordInput] = useState('')
    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            let req = await fetch('http://localhost:3000/users', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                user: usernameInput,
                password: passwordInput,
                score: 0,
            })

        })
        let res = await req.json()
            if (req.ok) {
                setUsernameInput("");
                setPasswordInput("");
            } else {
                setUsernameInput("Some error occured");
            }
        } catch (err) {
            console.log(err)
    }
    }

    return(
        <div className='login'>
            <form onSubmit={handleSubmit}>
                <input 
                    onChange={(e) => { setUsernameInput(e.target.value) }} 
                    value={usernameInput} 
                type="text" 
                placeholder='username'
                />
                <input 
                    onChange={(e) => { setPasswordInput(e.target.value) }}
                    value={passwordInput} 
                type="password" 
                placeholder='password'
                />
                <button type="submit">Register</button>
            </form>
        </div>
    )
}

export default SignUp 