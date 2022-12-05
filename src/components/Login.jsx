import { useEffect, useState } from 'react'

const Login = () => {
    useEffect(() => {
        loginUser()
    },[])
    const loginUser = async (e) => {
        let req = await fetch('../users.json', {
            method: "POST", 
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                user: e.user.value,
                password: e.password.value
            })
})
        let res = await req.json()
        if (req.ok) {
            console.log(res)
        } else {
            alert('nope')
        }
    }

    return(
        <div>
            <form>
                <input id="user" type="text" placeholder='username'></input>
                <input id="password" type="password" placeholder='password'></input>
                <button onClick={() => { loginUser() }} type="submit">login</button>
            </form>
        </div>
    )
}

export default Login 