let state = {
    dialogsPage: {
        dialogsData: [
            {id: 1, name: 'Kolya'},
            {id: 2, name: 'Lola'},
            {id: 3, name: 'Nikita'},
            {id: 4, name: 'Sasha'},
            {id: 5, name: 'Julia'}
        ],
        messageInput: [
            {id: 1, msgInput: 'input'},
            {id: 2, msgInput: 'input 2'},
            {id: 3, msgInput: 'input 3'}
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
        ]
    },

    navBar: [
        {id: 1, menuList: 'Profile'},
        {id: 2, menuList: 'Messages'},
        {id: 3, menuList: 'News'},
        {id: 4, menuList: 'Music'},
        {id: 5, menuList: 'Setting'},
        {id: 6, menuList: 'Friends'},
    ]
}

export default state
