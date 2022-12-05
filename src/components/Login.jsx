import { useEffect, useState } from 'react'

const Login = () => {
    useEffect(() => {
        request()
    },[])
    const request = async () => {
        let req = await fetch('../users.json', { method: "POST"})
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
                <input type="text" placeholder='username'></input>
                <input type="password" placeholder='password'></input>
                <button type="submit">login</button>
            </form>
        </div>
    )
}

export default Login