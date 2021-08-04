import classnames from 'classnames';
import './style.scss';

const Button = ({
                    title,
                    mode = 'default',
                    type = 'primary',
                    plain = false,
                    disabled = false,
                    style,
                    action = () => undefined
                }: IButton) => {
    return (
        <span
            onClick={() => disabled && action()}
            style={style}
            className={classnames('btn', mode, {plain, type, disabled})}
        >
      {title}
    </span>
    );
};

export default Button;
