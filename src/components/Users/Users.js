import './Users.scss';
import User from "./User";


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
            { props.users.map( u => <User user={u}
                                          key={u.id}
                                          followingInProgress={props.followingInProgress}
                                          follow={props.follow}
                                          unfollow={props.unfollow}

            />) }
        </div>
    )
}

export default Users
