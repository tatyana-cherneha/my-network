import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import navbarReducer from "./navbarReducer";

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
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._state.navBar = navbarReducer(this._state.navBar, action)

        this._callSubscriber(this._state)
    }
};


export default store;
window.store = store;
