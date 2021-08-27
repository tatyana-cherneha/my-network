import './Navbar.scss'

function Navbar() {
    return (
        <nav className='nav'>
            <ul className='nav__list'>
                <li><a href="/profile">Profile</a></li>
                <li><a href="/messages">Messages</a></li>
                <li><a href="/news">News</a></li>
                <li><a href="/music">Music</a></li>
                <li><a href="/setting">Setting</a></li>
            </ul>
        </nav>
    )
}

export default Navbar;
