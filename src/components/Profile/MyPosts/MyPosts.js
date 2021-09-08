import React from 'react'
import './MyPosts.scss'
import Posts from "./Posts/Posts"
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profileReduser";


function MyPosts(props) {

    let postElement = props.state.postData.map( p => <Posts message={p.post} like={p.likeCount} />)

    let newPostText = props.state.newPostText;

    let newPostElement = React.createRef();

    let addPost = () => {
        props.dispatch(addPostActionCreator());
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        let action = updateNewPostTextActionCreator(text);
        props.dispatch(action);
    }

    return (
        <div className='profile__post'>
            <div className='profile__post-add'>
                <textarea placeholder='Write post...' onChange={ onPostChange } ref={ newPostElement } value={ newPostText }></textarea>
                <button onClick={ addPost }>Add post</button>
            </div>

            <div className='profile__post-list'>
                {postElement}
            </div>

        </div>
    )
}

export default MyPosts
