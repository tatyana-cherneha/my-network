import './Dialogs.scss'
import {NavLink} from "react-router-dom";

function Dialogs () {
    return (
        <div className='dialogs'>
            <div className="dialogs__info">
                <NavLink to='/messages/1'>Kolya</NavLink>
                <NavLink to='/messages/2'>Lola</NavLink>
                <NavLink to='/messages/3'>Nikita</NavLink>
                <NavLink to='/messages/4'>Sasha</NavLink>
                <NavLink to='/messages/5'>Julia</NavLink>
            </div>

            <div className='dialogs__txt'>
                <div className="dialogs__txt-input">
                    <p className='messages-item'>input</p>
                </div>

                <div className="dialogs__txt-output">
                    <p className='messages-item'>output</p>
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
