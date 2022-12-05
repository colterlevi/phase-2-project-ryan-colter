// import HamburgerMenu from './components/HamburgerMenu'
import { slide as Menu } from 'react-burger-menu'

const HamburgerMenu = () => {
    return (
        <Menu>
            <p>login</p><br />
            <p>leaderboard</p>
        </Menu>
    );
}

const Header = () => {
    return(
        <div className="header">
            <HamburgerMenu />
            <h1>Trivia Masters</h1>
            <nav>login</nav>
            <nav>Search</nav>
        </div>
    )
}

export default Header