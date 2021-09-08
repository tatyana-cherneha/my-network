import React from 'react'
import './Dialogs.scss'
import MessagesOutput from "./MessagesOutput/MessagesOutput"
import MessagesInput from "./MessagesInput/MessagesInput"
import DialogUser from "./DialogUser/DialogUser";
import {
    addMsgActionCreator,
    updateNewMsgTextActionCreator,
} from "../../redux/state";

function Dialogs (props) {
    let state = props.store.getState().dialogsPage;

    let dialogsElement = props.state.dialogsData.map( d => <DialogUser id={d.id} name={d.name} />)

    let messageInputEl = props.state.messageInput.map( msgI => <MessagesInput id={msgI.id} messageI={msgI.msgInput} />)

    let messageOutputEl = props.state.messageOutput.map( msgO => <MessagesOutput id={msgO.id} messageO={msgO.msgOutput} />)

   // let newMsgElement = React.createRef();

    let newMessageText = props.state.newMsgText;

    // let addMsg = () => {
    //     props.dispatch(addMsgActionCreator());
    // }
    //
    // let onMsgChange = () => {
    //     let text = newMsgElement.current.value;
    //     let action = updateNewMsgTextActionCreator(text);
    //     props.dispatch(action);
    // }

    let onSendMsgClick = () => {
        props.store.dispatch(addMsgActionCreator())
    }

    let onNewMsgChange = (e) => {
        let newMsg = e.target.value;
        props.store.dispatch(updateNewMsgTextActionCreator(newMsg))
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
