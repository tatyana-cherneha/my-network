import './ProfileInfo.scss'
import Avatar from "../../../img/avatar.jpeg";

function ProfileInfo() {
    return (
        <div className='profile__data'>
            <div className='profile__data-avatar'>
                <img src={Avatar} alt={'avatar'}/>
            </div>

            <div className='profile__data-descr'>
                <h3>Name Surname</h3>
                <p>Description</p>
            </div>
        </div>
    )
}

export default ProfileInfo
