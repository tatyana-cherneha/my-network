import './ProfileStatus.scss'
import React from "react";

class ProfileStatus extends React.Component{

    state = {
        editMode: false,
        status: this.props.status
    }

    activateEditMode = () => {
        this.setState({
            editMode: true
        })
    }

    deactivateEditMode = () => {
        this.setState({
            editMode: false
        })
        this.props.updateStatus(this.state.status);
    }

    onStatusChange = (e) => {
        this.setState({
                status: e.currentTarget.value
            })
    }

    render() {
        return (
            <div className='profile__status'>
                {!this.state.editMode &&
                    <p onDoubleClick={ this.activateEditMode }>{this.props.status || 'no status'}</p>
                }
                {this.state.editMode &&
                    <div>
                        <input onChange={this.onStatusChange} autoFocus={true} value={this.state.status} onBlur={ this.deactivateEditMode }/>
                    </div>
                }
            </div>
        )
    }

}

export default ProfileStatus
