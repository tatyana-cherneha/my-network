import './MyPosts.scss'
import Posts from "./Posts/Posts";

function MyPosts() {
    return (
        <div className='profile__post'>
            <div className='profile__post-add'>
                <textarea placeholder='write post...'></textarea>
                <button>Add post</button>
            </div>

            <Posts />
            <Posts />
            <Posts />
        </div>
    )
}

export default MyPosts
