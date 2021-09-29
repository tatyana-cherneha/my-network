const SEND_MSG = 'SEND_MSG';


let initialState = {
    dialogsUsers: [
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
    ]
}

const dialogsReducer = (state = initialState, action) => {
     switch (action.type) {
        case SEND_MSG:
            let body = action.newMsgText
            return {
                ...state,
                messageOutput: [...state.messageOutput, {id: 4, msgOutput: body}]
            }
        default:
            break;
    }

    return state;
}


export const sendMsgActionCreator = (newMsgText) => ({type: SEND_MSG, newMsgText});

export default dialogsReducer
