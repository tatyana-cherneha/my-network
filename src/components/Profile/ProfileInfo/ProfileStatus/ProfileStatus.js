import './ProfileStatus.scss'
import React from "react";

class ProfileStatus extends React.Component{
    state = {
        editMode: false
    }

    activateEditMode() {
        this.setState({
            editMode: true
        })
    }

    deactivateEditMode() {
        this.setState({
            editMode: false
        })
    }

    render() {
        return (
            <div className='profile__status'>
                {!this.state.editMode &&
                    <p onDoubleClick={ this.activateEditMode.bind(this) }>{this.props.status}</p>
                }
                {this.state.editMode &&
                    <div>
                        <input autoFocus={true} value={this.props.status} onBlur={ this.deactivateEditMode.bind(this) }/>
                    </div>
                }
            </div>
        )
    }


}

export default ProfileStatus
