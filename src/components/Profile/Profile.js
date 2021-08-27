import './Profile.scss'
import ImgContent from '../../img/nice__view.jpeg'
import Avatar from '../../img/avatar.jpeg'
import MyPosts from './MyPosts/MyPosts'

function Profile() {
    return (
        <div className='profile'>
            <div className='profile__img'>
                <img src={ImgContent} alt={'Content'}/>
            </div>
            <div className='profile__data'>
                <div className='profile__data-avatar'>
                    <img src={Avatar} alt={'avatar'}/>
                </div>

                <div className='profile__data-descr'>
                   <p>Name + info</p>
                </div>
            </div>
            <MyPosts />
        </div>
    )
}

export default Profile;
