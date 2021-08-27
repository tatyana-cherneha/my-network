import './Navbar.scss'
import {NavLink} from "react-router-dom";

function Navbar() {
    return (
        <nav className='nav'>
            <ul className='nav__list'>
                <li>
                    <NavLink to="/profile">Profile</NavLink>
                </li>
                <li>
                    <NavLink to="/messages">Messages</NavLink>
                </li>
                <li>
                    <NavLink to="/news">News</NavLink>
                </li>
                <li>
                    <NavLink to="/music">Music</NavLink>
                </li>
                <li>
                    <NavLink to="/setting">Setting</NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;
