import './style.scss'
import Ava from "@components/User/ava";
import {useRef, useState, KeyboardEvent, MouseEvent} from "react";
import Button from "@components/UI/Button";
import {ReactComponent as ImgIcon} from "@assets/icons/img.svg";
import {ReactComponent as GifIcon} from "@assets/icons/gif.svg";
import {ReactComponent as PollIcon} from "@assets/icons/poll.svg";
import {ReactComponent as SmileIcon} from "@assets/icons/smile.svg";
import {ReactComponent as ScheduleIcon} from "@assets/icons/schedule.svg";

const TwitTop = () => {
    const textareaRef = useRef<HTMLDivElement>(null);
    const [text, setText] = useState('')

    //TODO придумать как это будет работать (npm react-contenteditable)
    const getText = (e: KeyboardEvent<HTMLDivElement>) => {
        textareaRef.current && setText(textareaRef.current.innerText)
    }

    //обработка событий клика на меню экшенов
    const action = (e: MouseEvent, data: string) => {
        e.stopPropagation()
    }

    return (
        <div className="twit-top">
            <div className="ava-wrapper">
                <Ava/>
            </div>
            <div className="content" onClick={() => textareaRef.current && textareaRef.current.focus()}>
                <div ref={textareaRef} className="textarea" onKeyUp={(e) => getText(e)}/>
                <span className="preview">Что происходит?</span>
                <div className="action-block">
                    <div className="left">
                        <span className="svg-btn" onClick={(e) => action(e, 'action')}>
                            <ImgIcon fill="#1da1f2"/>
                        </span>
                        <span className="svg-btn" onClick={(e) => action(e, 'action')}>
                            <GifIcon fill="#1da1f2"/>
                        </span>
                        <span className="svg-btn" onClick={(e) => action(e, 'action')}>
                            <PollIcon fill="#1da1f2"/>
                        </span>
                        <span className="svg-btn" onClick={(e) => action(e, 'action')}>
                            <SmileIcon fill="#1da1f2"/>
                        </span>
                        <span className="svg-btn" onClick={(e) => action(e, 'action')}>
                            <ScheduleIcon fill="#1da1f2"/>
                     </span>
                    </div>
                    <Button
                        title="Твитнуть"
                        mode="small"
                        disabled={!text}
                        action={() => ({})}
                    />
                </div>
            </div>
        </div>
    )
}

export default TwitTop