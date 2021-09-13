const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

let initialState = {
    users: [
        {id: 1, fullName: 'Kolya Ivanov', status: 'I am boss', location: {city: 'Kyev', country: 'Ukraine'}, photoUrl: 'https://upload.wikimedia.org/wikipedia/ru/1/16/Cruella_%282021%29_logo.jpg', followed: true},
        {id: 2, fullName: 'Sacha Petrov', status: 'I am man', location: {city: 'Lviv', country: 'Ukraine'}, photoUrl: 'https://upload.wikimedia.org/wikipedia/ru/1/16/Cruella_%282021%29_logo.jpg', followed: true,},
        {id: 3, fullName: 'Sveta Nikolaeva', status: 'I am woman', location: {city: 'Odessa', country: 'Ukraine'}, photoUrl: 'https://upload.wikimedia.org/wikipedia/ru/1/16/Cruella_%282021%29_logo.jpg', followed: false},
        {id: 4, fullName: 'Alex Smith', status: 'I am hz', location: {city: 'Nikolaev', country: 'Ukraine'}, photoUrl: 'https://upload.wikimedia.org/wikipedia/ru/1/16/Cruella_%282021%29_logo.jpg', followed: false}
    ]
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map( u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map( u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u;
                })
            }
        case SET_USERS:
            return { ...state, users: [...state.users, ...action.users]}
        default:
            return state;
    }

}

export const followAC = (userId) => ({type: FOLLOW, userId}); //AC === Action Creator
export const unfollowAC = (userId) => ({type: UNFOLLOW, userId});
export const setUsersAC = (users) => ({type: SET_USERS, users});
export default usersReducer
