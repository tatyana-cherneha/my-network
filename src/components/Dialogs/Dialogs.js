import './Dialogs.scss'
import {NavLink} from "react-router-dom";

const DialogUser = (props) => {
    let path = '/messages/' + props.id;

    return (
        <NavLink to={path}>{props.name}</NavLink>
    )
}

const MessagesInput = (props) => {
    return (
        <p className='messages-item'>{props.messageI}</p>
    )
}

const MessagesOutput = (props) => {
    return (
         <p className='messages-item'>{props.messageO}</p>
    )
}

function Dialogs () {
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
                    <MessagesInput  messageI='input'/>
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
