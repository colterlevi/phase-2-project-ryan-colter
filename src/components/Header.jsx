import { Link } from "react-router-dom"

const Header = ({ setCurrentUser }) => {
    return(
        <div>
            <div className="header">
                <h1 className='page-title'>Trivia Masters</h1>
                <button onClick={() => { setCurrentUser([]) }}>Logout</button>
            </div>
        </div>
    )
}

export default Header