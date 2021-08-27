import './MyPosts.scss'
import Posts from "./Posts/Posts";

function MyPosts() {
    let postData = [
        {id: 1, post: 'hi', likeCount: 6},
        {id: 2, post: 'my first post', likeCount: 4},
        {id: 3, post: 'okay', likeCount: 1}
    ]
    let postElement = postData.map( p => <Posts message={p.post} like={p.likeCount} />)
    return (
        <div className='profile__post'>
            <div className='profile__post-add'>
                <textarea placeholder='write post...'></textarea>
                <button>Add post</button>
            </div>

            <div className='profile__post-list'>
                {postElement}
            </div>

        </div>
    )
}

export default MyPosts
