import './style.scss';
import {useState} from 'react';

const Search = () => {
    const [listVisible, setListVisible] = useState(false);

    return (
        <div className="search">
            <div className="input">
                <span className="material-icons">search</span>
                <input
                    type="text"
                    placeholder="Поиск в Твиттере"
                    onFocus={() => setListVisible(true)}
                    onBlur={() => setListVisible(false)}
                />
            </div>
            {
                listVisible &&
                <div className="search-list">
                <span className="tip">
                    Попробуйте поискать людей, темы или ключевые слова
                </span>
                </div>
            }
        </div>
    );
};

export default Search;
