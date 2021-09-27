import './Users.scss';
import Avatar from "../../assets/img/avatar.jpeg";
import {NavLink} from "react-router-dom";
import * as axios from "axios";


let Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];

    for(let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return (
        <div className='user'>
            <div className='user__pagination'>
                {
                    pages.map(p => {
                        return <span className={props.currentPage === p && 'selectedPage'}
                                     onClick={ (e) => { props.onPageChanged(p);} }
                        >{p}</span>
                        })
                }
            </div>
            { props.users.map( u => <div id={u.id} key={u.id} className='user__info'>
                <div className='user__info-item'>
                    <div className='user__info-avatar'>
                        <NavLink to={'./profile/' + u.id}>
                            <img src={u.photos.small != null ? u.photos.small : Avatar} alt='avatar' />
                        </NavLink>
                    </div>
                    {
                        u.followed
                            ? <button onClick={() => {
                                axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                                    withCredentials: true,
                                    headers: {
                                        "API-KEY": "9a5014b7-2caf-4bf3-8ce3-061b9f078edf"
                                    },
                                })
                                    .then(response => {
                                        if (response.data.resultCode == 0){
                                            props.unfollow(u.id)
                                        }
                                    })
                            }} className='user__info-btn unfollow'>Unfollow</button>
                            : <button onClick={() => {
                                axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
                                    withCredentials: true,
                                    headers: {
                                        "API-KEY": "9a5014b7-2caf-4bf3-8ce3-061b9f078edf"
                                    },
                                })
                                    .then(response => {
                                        if (response.data.resultCode == 0){
                                        props.follow(u.id)
                                    }
                                });
                            }} className='user__info-btn follow'>Follow</button>
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
