import './style.scss';
import {
    NavLink
} from 'react-router-dom';

import {ReactComponent as HomeIcon} from '@assets/icons/home.svg';
import {ReactComponent as BookmarkIcon} from '@assets/icons/bookmark.svg';
import {ReactComponent as ElseIcon} from '@assets/icons/else.svg';
import {ReactComponent as ListIcon} from '@assets/icons/list.svg';
import {ReactComponent as MessageIcon} from '@assets/icons/message.svg';
import {ReactComponent as ProfileIcon} from '@assets/icons/profile.svg';
import {ReactComponent as ReviewIcon} from '@assets/icons/review.svg';
import {ReactComponent as TwitterIcon} from '@assets/icons/twitter.svg';
import {ReactComponent as NoticeIcon} from '@assets/icons/notice1.svg';

const Menu = () => {
    return (
        <nav className="menu">
            <ul>
                <li>
                    <NavLink to="/">
                        <TwitterIcon
                            height={30}
                            fill="#1da1f2"
                        />
                    </NavLink>
                </li>
                <li>
                    <NavLink exact to="/" activeClassName="selected">
                        <HomeIcon height={30} className="icon"/>
                        <span>Главная</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/explore" activeClassName="selected">
                        <ReviewIcon height={30} className="icon"/>
                        <span>Обзор</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/notifications" activeClassName="selected">
                        <NoticeIcon height={30} className="icon"/>
                        <span>Уведомления</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/messages" activeClassName="selected">
                        <MessageIcon height={30} className="icon"/>
                        <span>Сообщения</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/bookmarks" activeClassName="selected">
                        <BookmarkIcon height={30} className="icon"/>
                        <span>Закладки</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/">
                        <ListIcon height={30} className="icon"/>
                        <span>Списки</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/">
                        <ProfileIcon height={30} className="icon"/>
                        <span>Профиль</span>
                    </NavLink>
                </li>
                {/*<li>*/}
                {/*    <ElseIcon height={30} className="icon"/>*/}
                {/*    <span>Еще</span>*/}
                {/*</li>*/}
            </ul>
        </nav>
    );
};

export default Menu;
