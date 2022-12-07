import { Link } from "react-router-dom"

const Header = ({ setCurrentUser, currentUser, loggedIn }) => {
    if (loggedIn === true) {
    return(
        <div>
            <div className="header">
                <h1 className='page-title'>Trivia Masters</h1>
                <h3>Hello {currentUser.username}</h3>
                <button onClick={() => { setCurrentUser([]) }}>Logout</button>
            </div>
        </div>
    )} else {
        return (
            <div>
                <div className="header">
                    <h1 className='page-title'>Trivia Masters</h1>
                </div>
            </div>
    )}
}

export default Header