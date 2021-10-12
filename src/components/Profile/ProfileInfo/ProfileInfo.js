import './ProfileInfo.scss'
import Avatar from "../../../assets/img/avatar.jpeg";
import Preloader from "../../common/Preloader/Preloader";
import React, {useState} from "react";
import ProfileStatusWithHooks from "./ProfileStatus/ProfileStatusWithHooks";
import ProfileDataForm from "./ProfileDataForm/ProfileDataForm";

const ProfileInfo = ({status, profile, updateStatus, isOwner, savePhoto}) => {

    let [ editMode, setEditMode ] = useState(false);

    if (!profile) {
        return <Preloader />
    }

    const onMainPhotoSelected = (e) => {
       if ( e.target.files.length) {
           savePhoto(e.target.files[0])
       }
    }

    return (
        <div className='profile__data'>
            <div className='profile__data-avatar'>
                <img src={profile.photos.large != null ? profile.photos.large : Avatar} alt={'avatar'}/>
                {isOwner && <input type="file" onChange={onMainPhotoSelected}/>}
            </div>

            <ProfileStatusWithHooks status={status} updateStatus={updateStatus} />

            { editMode
                ? <ProfileDataForm profile={profile} />
                : <ProfileData profile={profile} isOwner={isOwner} goToEditMode={() => {setEditMode(true)}} /> }

            <div className='profile__data-contacts'>
                <h3>Contacts:
                    {Object.keys(profile.contacts).map(key => {
                       return <Contact contactTitle={key} contactValue={profile.contacts[key]} />
                    })}
                </h3>
            </div>

        </div>
    )
}

const ProfileData = ({profile, isOwner, goToEditMode}) => {
    return (
        <div>
            { isOwner && <div><button onClick={goToEditMode}>Edit</button></div>}
            <div className='profile__data-descr'>
                <h3>{profile.fullName}</h3>
                <p>{profile.aboutMe}</p>
            </div>
            <div className='profile__data-jobs'>
                <p><b>Loking for a job: </b> {profile.lookingForAJob ? "Yes" : "No"}</p>
                <p>{profile.lookingForAJobDescription}</p>
            </div>
        </div>
    )
}


const Contact = ({contactTitle, contactValue}) => {
    return <p><b>{contactTitle}: </b> {contactValue}</p>
}

export default ProfileInfo
