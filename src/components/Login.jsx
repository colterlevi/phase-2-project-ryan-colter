import { useEffect, useState } from 'react'

const Login = ({ user, setUser, setPassword, password }) => {
    // useEffect(() => {
    //     handleSubmit()
    // },[])
    const handleSubmit = async (e) => {
        e.preventDefault()
        let req = await fetch('http://localhost:3000/users', {
            method: 'POST',
            body: {
                    user: user,
                    password: password
                  },
        })
        let res = await req.json()
        console.log(user)
    }

    return(
        <div className='login'>
            <form onSubmit={handleSubmit}>
                <input onChange={(e) => { setUser(e.target.value) }} value={user} name="user" type="text" placeholder='username'></input>
                <input onChange={(e) => { setPassword(e.target.value) }} value={password} name="password" type="password" placeholder='password'></input>
                <button type="submit">login</button>
            </form>
        </div>
    )
}

export default Login 