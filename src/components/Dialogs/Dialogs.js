import './Dialogs.scss'
import {NavLink} from "react-router-dom";

function DialogUser(props) {
    let path = '/messages/' + props.id;

    return (
        <NavLink to={path}>{props.name}</NavLink>
    )
}

function MessagesInput(props) {
    return (
        <p className='messages-item'>{props.messageI}</p>
    )
}

function MessagesOutput(props) {
    return (
         <p className='messages-item'>{props.messageO}</p>
    )
}

function Dialogs () {

    let dialogsData = [
        {id: 1, name: 'Kolya'},
        {id: 2, name: 'Lola'},
        {id: 3, name: 'Nikita'},
        {id: 4, name: 'Sasha'},
        {id: 5, name: 'Julia'}
    ]

    let dialogsElement = dialogsData.map( d => <DialogUser id={d.id} name={d.name} />)

    let messageInput = [
        {id: 1, msgInput: 'input'},
        {id: 2, msgInput: 'input 2'},
        {id: 3, msgInput: 'input 3'}
    ]

    let messageInputEl = messageInput.map( msgI => <MessagesInput id={msgI.id} messageI={msgI.msgInput} />)


    let messageOutput = [
        {id: 1, msgOutput: 'input'},
        {id: 2, msgOutput: 'input 2'},
        {id: 3, msgOutput: 'input 3'}
    ]

    let messageOutputEl = messageOutput.map( msgO => <MessagesOutput id={msgO.id} messageO={msgO.msgOutput} />)

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
                    <textarea placeholder="Write messages there..."></textarea>
                    <button>Send</button>
                </div>
            </div>

        </div>
    )
}

export default Dialogs
