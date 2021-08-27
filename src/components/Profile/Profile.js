import './Profile.scss'
import MyPosts from './MyPosts/MyPosts'
import ProfileInfo from "./ProfileInfo/ProfileInfo"
import ProfileImg from "./ProfileImg/ProfileImg"


function Profile() {
    return (
        <div className='profile'>
            <ProfileImg />
            <ProfileInfo />
            <MyPosts />
        </div>
    )
}

export default Profile;
