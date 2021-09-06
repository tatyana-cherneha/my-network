import React from 'react'
import './Dialogs.scss'
import MessagesOutput from "./MessagesOutput/MessagesOutput"
import MessagesInput from "./MessagesInput/MessagesInput"
import DialogUser from "./DialogUser/DialogUser";

function Dialogs (props) {

    let dialogsElement = props.state.dialogsData.map( d => <DialogUser id={d.id} name={d.name} />)

    let messageInputEl = props.state.messageInput.map( msgI => <MessagesInput id={msgI.id} messageI={msgI.msgInput} />)

    let messageOutputEl = props.state.messageOutput.map( msgO => <MessagesOutput id={msgO.id} messageO={msgO.msgOutput} />)

    let newMsgElement = React.createRef();

    let addMsg = () => {
        let textMsg = newMsgElement.current.value;
        alert(textMsg);
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
                    <textarea placeholder="Write messages there..." ref={newMsgElement}></textarea>
                    <button onClick={addMsg}>Send</button>
                </div>
            </div>

        </div>
    )
}

export default Dialogs
