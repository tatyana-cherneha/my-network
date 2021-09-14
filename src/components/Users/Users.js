import './Users.scss';
import Avatar from "../../img/avatar.jpeg";


let Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];

    for(let i = 1; i < pagesCount.length; i++) {
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
