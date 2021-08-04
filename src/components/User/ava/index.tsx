import './style.scss'
import DefaultProfileAvatar from '@assets/img/default_profile_normal.png'

type Props = {
    imgUrl?: string
}

const Ava = ({imgUrl = `url(${DefaultProfileAvatar})`}: Props) => {
    return (
        <div
            style={{backgroundImage: imgUrl}}
            className="user-avatar"
        />
    )
}

export default Ava