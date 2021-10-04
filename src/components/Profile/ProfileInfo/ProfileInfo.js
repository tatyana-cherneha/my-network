import './ProfileInfo.scss'
import Avatar from "../../../assets/img/avatar.jpeg";
import Preloader from "../../common/Preloader/Preloader";
import React from "react";
import ProfileStatusWithHooks from "./ProfileStatus/ProfileStatusWithHooks";

function ProfileInfo({status, profile, updateStatus}) {
    if (!profile) {
        return <Preloader />
    }

    return (
        <div className='profile__data'>
            <div className='profile__data-avatar'>
                <img src={profile.photos.large != null ? profile.photos.large : Avatar} alt={'avatar'}/>
            </div>

            <ProfileStatusWithHooks status={status} updateStatus={updateStatus} />

            <div className='profile__data-descr'>
                <h3>{profile.fullName}</h3>
                <p>{profile.aboutMe}</p>
            </div>

            <div className='profile__data-contacts'>
                <h3>Contacts:</h3>
                <p>{profile.contacts.facebook}</p>
                <p>{profile.contacts.website}</p>
                <p>{profile.contacts.vk}</p>
                <p>{profile.contacts.twitter}</p>
                <p>{profile.contacts.instagram}</p>
                <p>{profile.contacts.youtube}</p>
                <p>{profile.contacts.github}</p>
                <p>{profile.contacts.mainlink}</p>
            </div>

        </div>
    )
}

export default ProfileInfo
