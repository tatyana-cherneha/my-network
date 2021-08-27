import './Navbar.scss'

function Navbar() {
    return (
        <nav className='nav'>
            <ul className='nav__list'>
                <li><a href="#p">Profile</a></li>
                <li><a href="#d">Messages</a></li>
                <li><a href="#n">News</a></li>
                <li><a href="#m">Music</a></li>
                <li><a href="#s">Setting</a></li>
            </ul>
        </nav>
    )
}

export default Navbar;
