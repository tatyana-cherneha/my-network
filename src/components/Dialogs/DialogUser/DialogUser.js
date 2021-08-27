import {NavLink} from "react-router-dom";

function DialogUser(props) {
    let path = '/messages/' + props.id;

    return (
        <NavLink to={path}>{props.name}</NavLink>
    )
}
export default DialogUser
