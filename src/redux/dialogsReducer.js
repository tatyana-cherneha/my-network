const UPDATE_NEW_MSG_TEXT = 'UPDATE_NEW_MSG_TEXT';
const SEND_MSG = 'SEND_MSG';

const dialogsReducer = (state, action) => {
    switch (action.type) {
        case SEND_MSG:
            let newMsg = {
                id: 4,
                msgOutput: state.newMsgText
            }
            state.messageOutput.push(newMsg);
            state.newMsgText = '';
            return state;
        case UPDATE_NEW_MSG_TEXT:
            state.newMsgText = action.msgText;
            return state;
        default:
            break;
    }

    return state;
}


export const addMsgActionCreator = () => ({type: SEND_MSG});

export const updateNewMsgTextActionCreator = (textMsg) => ({
    type: UPDATE_NEW_MSG_TEXT,
    msgText: textMsg
}) ;


export default dialogsReducer
