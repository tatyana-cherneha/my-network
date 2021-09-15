import React from "react";
import Profile from "./Profile";
import * as axios from "axios";
import {connect} from "react-redux";
import {withRouter} from "react-router";
import {setAuthUserData} from "../../redux/authReducer";

class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 2;
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
            .then(response => {
                if (response.data.resultCode === 0) {
                    let {userId, login, email } = response.data.data;
                    this.props.setAuthUserData(userId, login, email);
                }
            });
    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile} />
        )
    }

}
let mapStateToProps = (state) => ({
    profile: state.profilePage.profile
})
let WithUrlDataContainerComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps, {setAuthUserData}) (WithUrlDataContainerComponent);
