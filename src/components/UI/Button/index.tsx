import classnames from 'classnames';
import './style.scss';

const Button = ({
                    title,
                    type = 'primary',
                    plain = false,
                    style,
                    action = () => undefined
                }: IButton) => {
    return (
        <span
            onClick={action}
            style={style}
            className={classnames('btn', { plain, type })}
        >
      {title}
    </span>
    );
};

export default Button;
