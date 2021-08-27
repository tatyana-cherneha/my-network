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

    let messageInput = [
        {id: 1, msgInput: 'input'},
        {id: 2, msgInput: 'input 2'},
        {id: 3, msgInput: 'input 3'}
    ]
    let messageOutput = [
        {id: 1, msgOutput: 'input'},
        {id: 2, msgOutput: 'input 2'},
        {id: 3, msgOutput: 'input 3'}
    ]

    return (
        <div className='dialogs'>
            <div className="dialogs__user">
                <DialogUser name='Kolya' id='1' />
                <DialogUser name='Lola' id='2' />
                <DialogUser name='Nikita' id='3' />
                <DialogUser name='Sasha' id='4' />
                <DialogUser name='Julia' id='5' />
            </div>


            <div className='dialogs__txt'>
                <div className="dialogs__txt-input">
                    <MessagesInput  messageI={messageInput[0].msgInput} />
                    <MessagesInput  messageI='input 2'/>
                    <MessagesInput  messageI='input 3'/>
                </div>

                <div className="dialogs__txt-output">
                    <MessagesOutput messageO='output' />
                    <MessagesOutput messageO='output 2' />
                    <MessagesOutput messageO='output 3' />
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
