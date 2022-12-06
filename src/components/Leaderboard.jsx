import { useState, useEffect } from "react";

const Leaderboard = () => {
    const [leaders, setLeaders] = useState([])

    useEffect(() => {
        const requestLeaders = async () => {
            let req = await fetch('http://localhost:3000/users')
            let res = await req.json()
            setLeaders(res)
            console.log(res)
        }
        requestLeaders()
}, [])

    return(
        <ol className="leaderboard">
            {
                leaders.map((user) => {
                   return( 
                   <li>
                     <h2>{user.username}</h2>
                     <p>{user.score}</p>
                   </li>
                   )
                })
            }
        </ol>
    )
}

export default Leaderboard