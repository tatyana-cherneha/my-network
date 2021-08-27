import './MyPosts.scss'
import Posts from "./Posts/Posts";

function MyPosts() {
    let postData = [
        {id: 1, post: 'hi', likeCount: 6},
        {id: 2, post: 'my first post', likeCount: 4},
        {id: 3, post: 'okay', likeCount: 1}
    ]

    return (
        <div className='profile__post'>
            <div className='profile__post-add'>
                <textarea placeholder='write post...'></textarea>
                <button>Add post</button>
            </div>

            <Posts message={postData[0].post} like={postData[0].likeCount} />
            <Posts message='my first post' like='6' />
            <Posts message='okay' like='3' />
        </div>
    )
}

export default MyPosts
