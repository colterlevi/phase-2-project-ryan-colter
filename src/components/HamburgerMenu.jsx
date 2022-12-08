import { Link } from "react-router-dom";
import { slide as Menu } from 'react-burger-menu'

const HamburgerMenu = () => {
    return (
        <Menu>
            <Link to="/">
                <h3>Home</h3>
            </Link>
            <Link to="/login">
                <h3>Login</h3>
            </Link>
            <Link to="/register">
                <h3>Register</h3>
            </Link>
            <Link to="/leaderboard">
                <h3>Leaderboard</h3>
            </Link>
        </Menu>
    );
}

export default HamburgerMenu