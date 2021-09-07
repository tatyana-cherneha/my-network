import './Profile.scss'
import MyPosts from './MyPosts/MyPosts'
import ProfileInfo from "./ProfileInfo/ProfileInfo"
import ProfileImg from "./ProfileImg/ProfileImg"

function Profile(props) {
    return (
        <div className='profile'>
            <ProfileImg />
            <ProfileInfo />
            <MyPosts postData={props.postData} dispatch={props.dispatch} />
        </div>
    )
}

export default Profile;
