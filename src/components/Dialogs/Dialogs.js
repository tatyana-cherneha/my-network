import './Dialogs.scss'

function Dialogs () {
    return (
        <div className='dialogs'>
            <div className="dialogs__info">
                <a>Kolya</a>
                <a>Lola</a>
                <a>hhhh</a>
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
