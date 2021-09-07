import React from 'react'
import './MyPosts.scss'
import Posts from "./Posts/Posts"


function MyPosts(props) {
    let postElement = props.postData.map( p => <Posts message={p.post} like={p.likeCount} />)

    let newPostElement = React.createRef();

    let addPost = () => {
        let text = newPostElement.current.value;
        props.addPost(text);

        newPostElement.current.value = '';
    }

    return (
        <div className='profile__post'>
            <div className='profile__post-add'>
                <textarea placeholder='Write post...' ref={newPostElement}></textarea>
                <button onClick={ addPost }>Add post</button>
            </div>

            <div className='profile__post-list'>
                {postElement}
            </div>

        </div>
    )
}

export default MyPosts
