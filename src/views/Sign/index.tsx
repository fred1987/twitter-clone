import './style.scss';
import Registry from '@components/Auth/Registry';
import Login from '@components/Auth/Login';
import Button from '@components/UI/Button';
import Modal from '@components/Modal';
import {ReactComponent as TwitterIcon} from '@assets/icons/twitter.svg';
import {useState} from 'react';

const Sign = () => {
    const [modalVisibility, setModalVisibility] = useState('');
    return (
        <div className="sign">
            <div className="img">
                <TwitterIcon height={380} fill="#fff"/>
            </div>
            <div className="content">
                <div className="content-wrapper">
                    <TwitterIcon
                        height={50}
                        fill="#1da1f2"
                        className="logo"
                    />
                    <span className="title">В курсе происходящего</span>
                    <span className="call-to-action">Присоединяйтесь к Твиттеру прямо сейчас!</span>
                    <Button
                        title="Зарегистрироваться"
                        action={() => setModalVisibility('registry')}
                        style={{width: '380px', marginBottom: '20px'}}
                    />
                    <Button
                        title="Войти"
                        style={{width: '380px'}}
                        action={() => setModalVisibility('login')}
                        plain
                    />
                </div>
            </div>
            <Modal
                visibility={!!modalVisibility}
                onClose={() => setModalVisibility('')}
                logo
            >
                {modalVisibility === 'registry' ? <Registry/> : <Login/>}
            </Modal>
        </div>
    );
};

export default Sign;
