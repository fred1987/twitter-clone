import './style.scss';

const Select = ({
                    name,
                    placeholder,
                    value,
                    onChange,
                    list = []
                }: ISelect) => {

    return (
        <div className="select">
            <span className="placeholder">
                {placeholder}
            </span>
            <select
                name={name}
                value={value}
                onChange={onChange}
            >
                <option value="" disabled/>
                {
                    list.length > 0 && list.map(item => <option value={item.id} key={item.id}>{item.label}</option>)
                }
            </select>
            <span className="material-icons md-24 arrow">keyboard_arrow_down</span>
        </div>
    );
};

export default Select;
