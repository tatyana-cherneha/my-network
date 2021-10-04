import './Profile.scss'
import ProfileInfo from "./ProfileInfo/ProfileInfo"
import ProfileImg from "./ProfileImg/ProfileImg"
import MyPostsContainer from "./MyPosts/MyPostsContainer";

function Profile({profile, status, updateStatus}) {
    return (
        <div className='profile'>
            <ProfileImg />
            <ProfileInfo profile={profile} status={status} updateStatus={updateStatus} />
            <MyPostsContainer />
        </div>
    )
}

export default Profile;
