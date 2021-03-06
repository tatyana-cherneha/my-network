import React from 'react'
import './MyPosts.scss'
import Posts from "./Posts/Posts"

//class MyPosts extends PureComponent {
// shouldComponentUpdate(nextProps, nextState, nextContext) {
//     return nextProps !== this.props || nextState !== this.state
// }
// === pure component

const MyPosts = React.memo(props => {

    let postElement = props.postData.map(p => <Posts id={p.id}
                                                     key={p.id}
                                                     message={p.post}
                                                     like={p.likeCount}/>)

    let newPostElement = React.createRef();

    let onAddPost = () => {
        props.addPost();
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    }

    return (
        <div className='profile__post'>
            <div className='profile__post-add'>
                    <textarea placeholder='Write post...'
                              onChange={onPostChange}
                              ref={newPostElement}
                              value={props.newPostText}></textarea>
                <button onClick={onAddPost}>Add post</button>
            </div>

            <div className='profile__post-list'>
                {postElement}
            </div>

        </div>
    )
});

export default MyPosts
