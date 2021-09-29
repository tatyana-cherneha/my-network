import './ProfileInfo.scss'
import Avatar from "../../../assets/img/avatar.jpeg";
import Preloader from "../../common/Preloader/Preloader";
import React from "react";
import ProfileStatus from "./ProfileStatus/ProfileStatus";

function ProfileInfo(props) {
    if (!props.profile) {
        return <Preloader />
    }

    return (
        <div className='profile__data'>
            <div className='profile__data-avatar'>
                <img src={props.profile.photos.large != null ? props.profile.photos.large : Avatar} alt={'avatar'}/>
            </div>

            <ProfileStatus status={props.status} updateStatus={props.updateStatus} />

            <div className='profile__data-descr'>
                <h3>{props.profile.fullName}</h3>
                <p>{props.profile.aboutMe}</p>
            </div>

            <div className='profile__data-contacts'>
                <h3>Contacts:</h3>
                <p>{props.profile.contacts.facebook}</p>
                <p>{props.profile.contacts.website}</p>
                <p>{props.profile.contacts.vk}</p>
                <p>{props.profile.contacts.twitter}</p>
                <p>{props.profile.contacts.instagram}</p>
                <p>{props.profile.contacts.youtube}</p>
                <p>{props.profile.contacts.github}</p>
                <p>{props.profile.contacts.mainlink}</p>
            </div>

        </div>
    )
}

export default ProfileInfo
