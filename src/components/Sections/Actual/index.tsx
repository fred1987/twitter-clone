import './style.scss'
import {ReactComponent as ActionIcon} from '@assets/icons/action.svg'
import Popover from "@components/Popover";
import ContextMenu from "@components/ContextMenu";

const contextMenuList = [
    {
        label: 'Мне это неинтересно',
        icon: <span className="material-icons-outlined">mood_bad</span>
    },
    {
        label: 'Эта актуальная тема имеет вредоносный характер или содержит спам',
        icon: <span className="material-icons-outlined">mood_bad</span>
    },
]

const ActualThemes = () => {
    return (
        <div className="actual-themes card">
            <div className="top">
                <span className="title">Актуальные темы для вас</span>
                <span className="material-icons-outlined icon-btn">settings</span>
            </div>
            <ul className="content">
                <li>
                    <div className="text">
                        <span className="theme">Theme</span>
                        <span className="tag">TagName</span>
                        <span className="twits">Твитов: 3 450</span>
                    </div>
                    <div className="action">
                        <Popover width="380px">
                            <span
                                className="svg-btn"
                                datatype="action"
                            >
                                <ActionIcon/>
                            </span>
                            <ContextMenu list={contextMenuList}/>
                        </Popover>
                    </div>
                </li>
                <li>
                    <div className="text">
                        <span className="theme">Theme</span>
                        <span className="tag">TagName</span>
                        <span className="twits">Твитов: 3 450</span>
                    </div>
                    <div className="action">
                        <Popover width="380px">
                            <span
                                className="svg-btn"
                                datatype="action"
                            >
                                <ActionIcon/>
                            </span>
                            <ContextMenu list={contextMenuList}/>
                        </Popover>
                    </div>
                </li>
            </ul>
        </div>
    )
}

export default ActualThemes