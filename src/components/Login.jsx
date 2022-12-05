import { useEffect, useState } from 'react'

const Login = () => {
    // useEffect(() => {
    //     loginUser()
    // },[])
    const handleSubmit = async ({form}) => {
        e.preventDefault()
        const data = new FormData(form.current)
        let req = await fetch('../users.json', {
            method: 'POST',
            body: data,
        })
        let res = await req.json()
        console.log(res)
    }

    return(
        <div className='login'>
            <form ref={form} onSubmit={handleSubmit}>
                <input id="user" type="text" placeholder='username'></input>
                <input id="password" type="password" placeholder='password'></input>
                <button type="submit">login</button>
            </form>
        </div>
    )
}

export default Login 