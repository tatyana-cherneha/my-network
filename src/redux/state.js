let rerenderEnterTree = () => {
    console.log('state is changed!');
};

let store = {
   state = {

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
            ]
        },

       profilePage: {
            postData: [
                {id: 1, post: 'hi', likeCount: 6},
                {id: 2, post: 'my first post', likeCount: 4},
                {id: 3, post: 'okay', likeCount: 1}
            ],
                newPostText: 'it-kama'
        },

       navBar: [
            {id: 1, menuList: 'Profile'},
            {id: 2, menuList: 'Messages'},
            {id: 3, menuList: 'News'},
            {id: 4, menuList: 'Music'},
            {id: 5, menuList: 'Setting'},
            {id: 6, menuList: 'Friends'},
        ]
   },

    addMsg = (textMessage) => {
        let newMsg = {
            id: 4,
            msgOutput: textMessage
        }
        state.dialogsPage.messageOutput.push(newMsg);
        rerenderEnterTree(state);
    },

    addPost = () => {
        let newPost = {
            id: 5,
            post: state.profilePage.newPostText,
            likeCount: 0
        }
        state.profilePage.postData.push(newPost);
        state.profilePage.newPostText = '';
        rerenderEnterTree(state);
    },

    updateNewPostText = (newText) => {
        state.profilePage.newPostText = newText;
        rerenderEnterTree(state);
    }

};

export let subscribe = (observer) => {
    rerenderEnterTree = observer;
}

export default store
