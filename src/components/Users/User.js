import './Users.scss';
import Avatar from "../../assets/img/avatar.jpeg";
import {NavLink} from "react-router-dom";


let User = ({user,followingInProgress, unfollow, follow}) => {
    return (
        <div className='user'>
            <div id={user.id} key={user.id} className='user__info'>
                <div className='user__info-item'>
                    <div className='user__info-avatar'>
                        <NavLink to={'./profile/' + user.id}>
                            <img src={user.photos.small != null ? user.photos.small : Avatar} alt='avatar' />
                        </NavLink>
                    </div>
                    {
                        user.followed
                            ? <button disabled={followingInProgress.some(id => id === user.id)}
                                      onClick={() => { unfollow(user.id) }}
                                      className='user__info-btn unfollow'>Unfollow</button>

                            : <button disabled={followingInProgress.some(id => id === user.id)}
                                      onClick={() => { follow(user.id) }}
                                      className='user__info-btn follow'>Follow</button>
                    }
                </div>
                <div className='user__info-txt'>
                    <div className='user__info-name'>
                        <h3>{user.name}</h3>
                        <p>Human</p>
                    </div>
                    <div className='user__info-location'>
                        <p>Ukraine</p>
                        <p>Kyev</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default User
