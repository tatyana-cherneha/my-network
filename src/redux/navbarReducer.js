let initialState = {
    navBar: [
        {id: 1, menuList: 'Profile'},
        {id: 2, menuList: 'Messages'},
        {id: 3, menuList: 'News'},
        {id: 4, menuList: 'Music'},
        {id: 5, menuList: 'Setting'},
        {id: 6, menuList: 'Friends'},
    ]
}

const navbarReducer = (state = initialState, action) => {
    return state;
}

export default navbarReducer
