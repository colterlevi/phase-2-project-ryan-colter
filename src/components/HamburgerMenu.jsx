import { push as Menu } from 'react-burger-menu'

const HamburgerMenu = () => {
 
    // NOTE: You also need to provide styles, see https://github.com/negomi/react-burger-menu#styling
    return (
      <Menu>
        <p>login</p><br />
        <p>leaderboard</p>
      </Menu>
    );
  }

  export default HamburgerMenu
