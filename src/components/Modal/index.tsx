import './style.scss';
import ReactDom from 'react-dom';
import { ReactComponent as TwitterIcon } from '../../assets/icons/twitter.svg';
import Button from '../UI/Button';
import classnames from 'classnames';

type Action = {
    key: string,
    type?: string,
    title: string,
    action: () => any,
}

type Props = {
    visibility: boolean
    title?: string
    width?: string,
    logo?: boolean
    onClose: () => void
    children?: JSX.Element | JSX.Element[] | string;
    actionTop?: Action
};

const Modal = ({
                   children,
                   visibility,
                   onClose,
                   title,
                   width = '600px',
                   logo = false,
                   actionTop
               }: Props) => {
    const portalDOMElement = document.getElementById('portal');
    if (!visibility || !portalDOMElement) return null;
    return ReactDom.createPortal(
        <>
            <div className="modal" style={{ width }}>
                <div className={classnames('top', { 'border-bottom': !logo })}>
                    {logo && <div className="logo"><TwitterIcon height={35} fill="#1da1f2"/></div>}
                    {
                        title ?
                            <span className="title">{title}</span> :
                            null
                    }
                    <span
                        onClick={onClose}
                        className="close-modal"
                    >
                    <span className="material-icons md-18">close</span>
                        {actionTop && <Button title={actionTop.title} action={actionTop.action} type={actionTop?.type}/>}
                </span>
                </div>
                <div className="content">
                    {children}
                </div>
            </div>
            <div onClick={onClose} className="overlay"/>
        </>,
        portalDOMElement
    );
};

export default Modal;
