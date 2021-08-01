import './style.scss';
import { useEffect, useRef } from 'react';
import classnames from 'classnames';
import Inputmask from 'inputmask';

const Input = ({ name, value = '', placeholder, mask, error, onChange, onBlur }: IInput) => {
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        const el = inputRef.current;
        Inputmask({ mask, showMaskOnHover: false, placeholder: ' ' }).mask(el);
        return () => Inputmask.remove(el);
    }, [mask]);

    return (
        <div className={classnames('input', { error })}>
            <label className="wrapper">
                <input
                    ref={inputRef}
                    name={name}
                    type="text"
                    value={value}
                    onChange={onChange}
                    onBlur={onBlur}
                />
                <div className="placeholder">
                    {placeholder}
                </div>
            </label>
            {error && <span className="error-text">{error}</span>}
        </div>
    );
};

export default Input;
