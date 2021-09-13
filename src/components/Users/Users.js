import './Users.scss';


function Users(props) {
    return (<div className='user'>
            { props.users.map( u => <div id={u.id} key={u.id} className='user__info'>
                <div className='user__info-item'>
                    <div className='user__info-avatar'>
                        <img src={u.photoUrl} alt='avatar' />
                    </div>
                    {
                        u.followed
                            ? <button onClick={() => {props.unfollow(u.id)} } className='user__info-btn unfollow'>Unfollow</button>
                            : <button onClick={() => {props.follow(u.id)} } className='user__info-btn follow'>Follow</button>

                    }
                </div>
                <div className='user__info-txt'>
                    <div className='user__info-name'>
                        <h3>{u.fullName}</h3>
                        <p>{u.status}</p>
                    </div>
                    <div className='user__info-location'>
                        <p>{u.location.country}</p>
                        <p>{u.location.city}</p>
                    </div>
                </div>
            </div> )
            }
        </div>

    )
}

export default Users
