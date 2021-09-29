import './Profile.scss'
import ProfileInfo from "./ProfileInfo/ProfileInfo"
import ProfileImg from "./ProfileImg/ProfileImg"
import MyPostsContainer from "./MyPosts/MyPostsContainer";

function Profile(props) {
    return (
        <div className='profile'>
            <ProfileImg />
            <ProfileInfo profile={props.profile} status={props.status} updateStatus={props.updateStatus} />
            <MyPostsContainer />
        </div>
    )
}

export default Profile;
