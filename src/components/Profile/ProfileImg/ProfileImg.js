import './ProfileImg.scss'
import ImgContent from "../../../assets/img/nice__view.jpeg"

function ProfileImg() {
    return (
        <div className='profile__img'>
            <img src={ImgContent} alt={'Content'}/>
        </div>
    )
}

export default ProfileImg
