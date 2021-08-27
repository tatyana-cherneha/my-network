import './MyPosts.scss'
import Posts from "./Posts/Posts";

function MyPosts() {
    return (
        <div className='profile__post'>
            <div className='profile__post-add'>
                <textarea placeholder='write post...'></textarea>
                <button>Add post</button>
            </div>

            <Posts message='hi' like='2' />
            <Posts message='my first post' like='6' />
            <Posts message='okay' like='3' />
        </div>
    )
}

export default MyPosts
