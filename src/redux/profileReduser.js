const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';
const SET_USERS_PROFILE = 'SET_USERS_PROFILE';

let initialState = {
    postData: [
        {id: 1, post: 'hi', likeCount: 6},
        {id: 2, post: 'my first post', likeCount: 4},
        {id: 3, post: 'okay', likeCount: 1}
    ],
    newPostText: 'it-kama',
    profile: null
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                post: state.newPostText,
                likeCount: 0
            }
            let copyState = {...state};
            copyState.postData = [...state.postData];
            copyState.postData.push(newPost)
            copyState.newPostText = '';
            return copyState;
        }
        case UPDATE_NEW_POST_TEXT: {
            let copyState = {...state};
            copyState.newPostText = action.newText;
            return copyState;
        }
        case SET_USERS_PROFILE: {
            return {...state, profile: action.profile}
        }
        default:
            break;
    }

    return state;
}


export const addPostActionCreator = () => ({type: ADD_POST});
export const setUsersProfile = (profile) => ({type: SET_USERS_PROFILE, profile});
export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text}) ;

export default profileReducer
