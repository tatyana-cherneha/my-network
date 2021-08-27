import './MyPosts.scss'
import Posts from "./Posts/Posts";

function MyPosts(props) {
    let postElement = props.postData.map( p => <Posts message={p.post} like={p.likeCount} />)

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
