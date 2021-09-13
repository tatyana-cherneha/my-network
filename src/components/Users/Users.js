import React from "react";
import './Users.scss';
import Avatar from "../../img/avatar.jpeg";
import * as axios from "axios";


class Users extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount);
            });
    }
    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
            });
    }

    render() {
        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
        let pages = [];

        for(let i = 1; i <= pagesCount.length; i++) {
            pages.push(i)
        }

        return (
            <div className='user'>
                <div className='user__pagination'>
                    {
                        pages.map(p => {
                           return <span className={this.props.currentPage === p && 'selectedPage'}
                                        onClick={ (e) => this.onPageChanged(p)}
                           >{p}</span>
                        })
                    }
                </div>
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
