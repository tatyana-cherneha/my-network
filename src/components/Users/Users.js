import './Users.scss';
import Avatar from "../../img/avatar.jpeg";
import * as axios from "axios";


function Users(props) {
    let getUsers = () => {
         if (props.users.length === 0) {

            axios.get("https://social-network.samuraijs.com/api/1.0/users")
                .then(response => {
                props.setUsers(response.data.items);
            });
         }
    }


    return (<div className='user'>
            <button onClick={getUsers}>Get Users</button>
            { props.users.map( u => <div id={u.id} key={u.id} className='user__info'>
                <div className='user__info-item'>
                    <div className='user__info-avatar'>
                        <img src={u.photos.small != null ? u.photos.small : Avatar} alt='avatar' />
                    </div>
                    {
                        u.followed
                            ? <button onClick={() => {props.unfollow(u.id)} } className='user__info-btn unfollow'>Unfollow</button>
                            : <button onClick={() => {props.follow(u.id)} } className='user__info-btn follow'>Follow</button>

                    }
                </div>
                <div className='user__info-txt'>
                    <div className='user__info-name'>
                        <h3>{u.name}</h3>
                        <p>Human</p>
                    </div>
                    <div className='user__info-location'>
                        <p>Ukraine</p>
                        <p>Kyev</p>
                    </div>
                </div>
            </div> )
            }
        </div>

    )
}

export default Users
