import './Navbar.scss'
import NavItem from "./NavItem/NavItem"
import ListFriends from '../ListFriends/ListFriends'

function Navbar(props) {

    // let menuElements = props.navBar.map(m => <NavItem id={m.id} menuList={m.menuList} />)
    // console.log(menuElements);
    return (
        <nav className="nav">
            <ul className="nav__list">
                {/*{ menuElements }*/}
                <NavItem menuList="profile"/>
                <NavItem menuList="messages"/>
                <NavItem menuList="news"/>
                <NavItem menuList="music"/>
                <NavItem menuList="setting"/>
                <NavItem menuList="friends"/>
                <ListFriends />
            </ul>
        </nav>
    )
}

export default Navbar;
