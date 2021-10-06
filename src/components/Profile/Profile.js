import './Profile.scss'
import ProfileInfo from "./ProfileInfo/ProfileInfo"
import ProfileImg from "./ProfileImg/ProfileImg"
import MyPostsContainer from "./MyPosts/MyPostsContainer";

function Profile({profile, status, updateStatus, isOwner, savePhoto}) {
    return (
        <div className='profile'>
            <ProfileImg />
            <ProfileInfo isOwner={isOwner} savePhoto={savePhoto} profile={profile} status={status} updateStatus={updateStatus} />
            <MyPostsContainer />
        </div>
    )
}

export default Profile;
