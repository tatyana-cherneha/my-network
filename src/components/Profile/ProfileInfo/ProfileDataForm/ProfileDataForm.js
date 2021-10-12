import React from "react";
import {createField, Input} from '../../../common/FormControls/FormControls'
import {reduxForm} from "redux-form";

const ProfileDataForm = ({profile}) => {
    return (
        <form>
            <div>
                {/*<button onClick={saveChangesProfileData}>Save</button>*/}
            </div>
            <div>
                <p><b>Full name: </b> {createField('Full name', 'fullName', [], Input)}</p>
            </div>
            <div>
                <p><b>Looking for a job?</b> {profile.lookingForAJob ? 'yes' : 'no'}</p>
            </div>
            <div>
                <p><b>My professional skills: </b> {profile.lookingForAJobDescription}</p>
            </div>
            <div>
                <p><b>About me: </b> {profile.aboutMe}</p>
            </div>
        </form>
    )
}

const ProfileDataFormReduxForm = reduxForm({form: 'editProfile'})(ProfileDataForm)

export default ProfileDataFormReduxForm
