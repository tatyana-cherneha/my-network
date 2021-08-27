import {NavLink} from "react-router-dom";

function NavItem(props) {
    let path = `/` + props.menuList;

    return (
        <li>
            <NavLink to={path}>{props.menuList}</NavLink>
        </li>
    )
}

export default NavItem
