import React from 'react'
import './MyPosts.scss'
import Posts from "./Posts/Posts"


function MyPosts(props) {
    let postElement = props.postData.map( p => <Posts message={p.post} like={p.likeCount} />)

    let newPostElement = React.createRef();

    let addPost = () => {
        props.dispatch({type: 'ADD_POST'});
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        let action = {type: 'UPDATE_NEW_POST_TEXT', newText: text};
        props.dispatch(action);
    }

    return (
        <div className='profile__post'>
            <div className='profile__post-add'>
                <textarea placeholder='Write post...' onChange={ onPostChange } ref={ newPostElement } value={ props.newPostText }></textarea>
                <button onClick={ addPost }>Add post</button>
            </div>

            <div className='profile__post-list'>
                {postElement}
            </div>

        </div>
    )
}

export default MyPosts
