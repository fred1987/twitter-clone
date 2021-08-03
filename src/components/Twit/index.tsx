import './style.scss'
import {ReactComponent as ActionIcon} from '@assets/icons/action.svg'
import Popover from "@components/Popover";
import ContextMenu from "@components/ContextMenu";

const getMenuContext = (userId: string) => {
    return [
        {
            label: 'Мне неинтересен этот твит',
            icon: <span className="material-icons-outlined">mood_bad</span>,
            onClick: () => {
                console.log(1111)
            }
        },
        {
            label: `Перестать читать ${userId}`,
            icon: <span className="material-icons-outlined">person_remove</span>
        },
        {
            label: `Добавить/удалить ${userId} из Списков`,
            icon: <span className="material-icons-outlined">list_alt</span>
        },
        {
            label: `Игнорировать ${userId}`,
            icon: <span className="material-icons-outlined">volume_off</span>
        },
        {
            label: `Внести ${userId} в черный список`,
            icon: <span className="material-icons-outlined">do_not_disturb_alt</span>
        },
        {
            label: `Встроить твит`,
            icon: <span className="material-icons-outlined">code</span>
        },
        {
            label: `Пожаловаться на твит`,
            icon: <span className="material-icons-outlined">flag</span>
        },
    ]
}

const Twit = () => {
    return (
        <div className="twit">
            <span
                className="avatar"
                style={{backgroundImage: 'url(https://i.ytimg.com/vi/FVxKg1GzT1w/default.jpg)'}}
            />
            <span className="twit-data">
                <span className="top">
                    <div className="left">
                        <span className="user-id">@myLovelyEars</span>
                        <span className="dot"/>
                        <span className="time">2ч</span>
                    </div>
                     <Popover width="420px">
                         <span className="svg-btn" datatype="action"><ActionIcon/></span>
                         <ContextMenu list={getMenuContext('@myLovelyEars')}/>
                     </Popover>
                </span>
                <div>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam deleniti dolorum non quia tenetur
                veniam vero? Aliquam beatae blanditiis deleniti dolorum eum facere maiores pariatur, perspiciatis,
                quaerat sint velit voluptates. Architecto cumque ipsam iusto
            </div>
                <ul className="actions">
                    <li>
                        <span className="material-icons-outlined icon-btn small">flag</span>
                        <span className="count">11</span>
                    </li>
                    <li>
                        <span className="material-icons-outlined icon-btn small">cached</span>
                        <span className="count">4</span>
                    </li>
                    <li>
                        <span className="material-icons-outlined icon-btn small">favorite_border</span>
                         <span className="count">1 тыс.</span>
                    </li>
                    <li>
                        <span className="material-icons-outlined icon-btn small">logout</span>
                    </li>
                </ul>
            </span>
        </div>
    )
}

export default Twit