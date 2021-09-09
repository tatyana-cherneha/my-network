import React from 'react'
import './Dialogs.scss'
import MessagesOutput from "./MessagesOutput/MessagesOutput"
import MessagesInput from "./MessagesInput/MessagesInput"
import DialogUser from "./DialogUser/DialogUser";


function Dialogs (props) {
    let state = props.dialogsPage;

    let dialogsElement = state.dialogsData.map( d => <DialogUser id={d.id} name={d.name} />)

    let messageInputEl = state.messageInput.map( msgI => <MessagesInput id={msgI.id} messageI={msgI.msgInput} />)

    let messageOutputEl = state.messageOutput.map( msgO => <MessagesOutput id={msgO.id} messageO={msgO.msgOutput} />)

    let newMessageText = state.newMsgText;

    let onSendMsgClick = () => {
        props.sendMsgClick();
    }

    let onNewMsgChange = (e) => {
        let newMsg = e.target.value;
        props.updateNewMsgText(newMsg)
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

                <div className='dialogs__add'>
                    <textarea placeholder="Write messages there..." onChange={ onNewMsgChange } value={ newMessageText }></textarea>
                    <button onClick={ onSendMsgClick }>Send</button>
                </div>
            </div>

        </div>
    )
}

export default Dialogs
