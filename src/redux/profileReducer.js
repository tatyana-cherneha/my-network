import {profileAPI} from "../api/api";

const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';
const SET_USERS_PROFILE = 'SET_USERS_PROFILE';
const SET_STATUS = 'SET_STATUS';
const UPDATE_STATUS = 'UPDATE_STATUS';
const SAVE_PHOTO_SUCCESS = 'SAVE_PHOTO_SUCCESS';


let initialState = {
    postData: [
        {id: 1, post: 'hi', likeCount: 6},
        {id: 2, post: 'my first post', likeCount: 4},
        {id: 3, post: 'okay', likeCount: 1}
    ],
    newPostText: 'it-kama',
    profile: null,
    status: ''
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
        case SET_STATUS: {
            return {...state, status: action.status}
        }
        case UPDATE_STATUS: {
            return {...state, status: action.status}
        }
        case SAVE_PHOTO_SUCCESS: {
            return {...state, profile: {...state.profile, photos: action.photos} }
        }
        default:
            break;
    }

    return state;
}


export const addPostActionCreator = () => ({type: ADD_POST});
export const setUsersProfile = (profile) => ({type: SET_USERS_PROFILE, profile});
export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text});
export const setStatus = (status) => ({type: SET_STATUS, status});
export const updatesStatus = (status) => ({type: SET_STATUS, status});
export const savePhotoSuccess = (photos) => ({type: SAVE_PHOTO_SUCCESS, photos});


export const getUsersProfile = (userId) => async (dispatch) => {
    let response = await profileAPI.getProfile(userId);
    dispatch(setUsersProfile(response.data));
}

export const getStatus = (userId) => async (dispatch) => {
    let response = await profileAPI.getStatus(userId);
    dispatch(setStatus(response.data));
}

export const updateStatus = (status) => async (dispatch) => {
    let response = await profileAPI.updateStatus(status);

    if (response.data.resultCode === 0) {
        dispatch(setStatus(status));
    }
}

export const savePhoto = (file) => async (dispatch) => {
    let response = await profileAPI.savePhoto(file);

    if (response.data.resultCode === 0) {
        dispatch(savePhotoSuccess(response.data.data.photos));
    }

}

export default profileReducer
