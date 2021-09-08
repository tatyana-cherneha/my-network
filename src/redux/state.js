const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';
const UPDATE_NEW_MSG_TEXT = 'UPDATE_NEW_MSG_TEXT';
const SEND_MSG = 'SEND_MSG';
let store = {
   _state: {
       dialogsPage: {
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
        },

       profilePage: {
            postData: [
                {id: 1, post: 'hi', likeCount: 6},
                {id: 2, post: 'my first post', likeCount: 4},
                {id: 3, post: 'okay', likeCount: 1}
            ],
            newPostText: 'it-kama',
        },

       navBar: [
            {id: 1, menuList: 'Profile'},
            {id: 2, menuList: 'Messages'},
            {id: 3, menuList: 'News'},
            {id: 4, menuList: 'Music'},
            {id: 5, menuList: 'Setting'},
            {id: 6, menuList: 'Friends'},
       ],
   },

    _callSubscriber() {
        console.log('state is changed!');
    },


    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },


    dispatch(action) {
       if (action.type === ADD_POST) {
           let newPost = {
               id: 5,
               post: this._state.profilePage.newPostText,
               likeCount: 0
           }
           this._state.profilePage.postData.push(newPost);
           this._state.profilePage.newPostText = '';
           this._callSubscriber(this._state);
       } else if (action.type === UPDATE_NEW_POST_TEXT) {
           this._state.profilePage.newPostText = action.newText;
           this._callSubscriber(this._state);
       } else if (action.type === SEND_MSG) {
           let newMsg = {
               id: 4,
               msgOutput: this._state.dialogsPage.newMsgText
           }
           this._state.dialogsPage.messageOutput.push(newMsg);
           this._state.dialogsPage.newMsgText = '';
           this._callSubscriber(this._state);
       } else if (action.type === UPDATE_NEW_MSG_TEXT) {
           this._state.dialogsPage.newMsgText = action.msgText;
           this._callSubscriber(this._state);
       }
    },
};


export const addPostActionCreator = () => ({type: ADD_POST});

export const updateNewPostTextActionCreator = (text) => ({
    type: UPDATE_NEW_POST_TEXT,
    newText: text
}) ;


export const addMsgActionCreator = () => ({type: SEND_MSG});

export const updateNewMsgTextActionCreator = (textMsg) => ({
    type: UPDATE_NEW_MSG_TEXT,
    msgText: textMsg
}) ;



export default store;
window.store = store;
