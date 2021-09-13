import React from "react";
import './Users.scss';
import Avatar from "../../img/avatar.jpeg";
import * as axios from "axios";


class Users extends React.Component {

    getUsers = () => {
        if (this.props.users.length === 0) {
            axios.get("https://social-network.samuraijs.com/api/1.0/users")
                .then(response => {
                    this.props.setUsers(response.data.items);
                });
        }
    }

    render() {
        return (
            <div className='user'>
                <button onClick={this.getUsers}>Get Users</button>
                { this.props.users.map( u => <div id={u.id} key={u.id} className='user__info'>
                    <div className='user__info-item'>
                        <div className='user__info-avatar'>
                            <img src={u.photos.small != null ? u.photos.small : Avatar} alt='avatar' />
                        </div>
                        {
                            u.followed
                                ? <button onClick={() => {this.props.unfollow(u.id)} } className='user__info-btn unfollow'>Unfollow</button>
                                : <button onClick={() => {this.props.follow(u.id)} } className='user__info-btn follow'>Follow</button>

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
}

export default Users
