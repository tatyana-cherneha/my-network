import React from 'react'
import './Dialogs.scss'
import MessagesOutput from "./MessagesOutput/MessagesOutput"
import MessagesInput from "./MessagesInput/MessagesInput"
import DialogUser from "./DialogUser/DialogUser";
import {Field, reduxForm} from "redux-form";


function Dialogs (props) {
    let state = props.dialogsPage;

    let dialogsElement = state.dialogsUsers.map( d => <DialogUser id={d.id} key={d.id} name={d.name} />)
    let messageInputEl = state.messageInput.map( msgI => <MessagesInput id={msgI.id} key={msgI.id} messageI={msgI.msgInput} />)
    let messageOutputEl = state.messageOutput.map( msgO => <MessagesOutput id={msgO.id} key={msgO.id} messageO={msgO.msgOutput} />)
    //let newMsgText = state.newMsgText;

    let addNewMessage = (values) => {
        props.sendMsgClick(values.newMsgText)
    }

    return (
        <div className='dialogs'>
            <div className="dialogs__user">
                {dialogsElement}
            </div>

            <div className='dialogs__txt'>
                <div className="dialogs__txt-input">
                    {messageInputEl}
                </div>

                <div className="dialogs__txt-output">
                    {messageOutputEl}
                </div>

                <ReduxAddMessageForm onSubmit={addNewMessage} />
            </div>

        </div>
    )
}

const AddMessageForm = (props) => {

    return (
        <div className='dialogs__add'>
            <form onSubmit={props.handleSubmit}>
                <Field component="textarea" name="newMsgText"  placeholder="Write messages there..." />
                <button>Send</button>
            </form>

        </div>
    )
}

let ReduxAddMessageForm = reduxForm({ form: 'dialogAddMessageForm' })(AddMessageForm)

export default Dialogs
