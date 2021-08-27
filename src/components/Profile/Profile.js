import './Profile.scss'
import ImgContent from '../../img/nice__view.jpeg'
import Avatar from '../../img/avatar.jpeg'

function Profile() {
    return (
        <div className='profile'>
            <div className='profile__img'>
                <img src={ImgContent} alt={"Content"}/>
            </div>
            <div className='profile__data'>
                <div className="profile__data-avatar">
                    <img src={Avatar} alt={"avatar"}/>
                </div>

                <div className="profile__data-descr">
                   <p>Name + info</p>
                </div>
            </div>
            <div className='profile__post'>
                <p>My post</p>
                <p>New post</p>
                <p>post 1</p>
                <p>post 2</p>
            </div>
        </div>
    )
}

export default Profile;
