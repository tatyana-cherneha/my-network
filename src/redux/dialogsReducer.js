const UPDATE_NEW_MSG_TEXT = 'UPDATE_NEW_MSG_TEXT';
const SEND_MSG = 'SEND_MSG';


let initialState = {
    dialogsData: [
        {id: 1, name: 'Kolya'},
        {id: 2, name: 'Lola'},
        {id: 3, name: 'Nikita'},
        {id: 4, name: 'Sasha'},
        {id: 5, name: 'Julia'}
    ],
    messageInput: [
        {id: 1, msgInput: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'},
        {id: 2, msgInput: 'It is a long established fact that a reader will be distracted by the readable content.'},
        {id: 3, msgInput: 'The readable content of a page when looking at its layout'}
    ],
    messageOutput: [
        {id: 1, msgOutput: 'input'},
        {id: 2, msgOutput: 'input 2'},
        {id: 3, msgOutput: 'input 3'}
    ],
    newMsgText: '',
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MSG: {
            let newMsg = {
                id: 4,
                msgOutput: state.newMsgText
            }
            let copyState = {...state}
            copyState.messageOutput = [...state.messageOutput];
            copyState.messageOutput.push(newMsg);
            copyState.newMsgText = '';
            return copyState;
        }

        case UPDATE_NEW_MSG_TEXT: {
            let copyState = {...state}
            copyState.newMsgText = action.msgText;
            return copyState;
        }
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
