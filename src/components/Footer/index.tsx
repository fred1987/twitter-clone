import './style.scss';

const Footer = () => {
    const menuList = [
        'О нас',
        'Справочный центр',
        'Условия предоставления услуг',
        'Политика конфиденциальности',
        'Политика в отношении файлов cookie',
        'Информация о рекламе',
        'Блог',
        'Статус',
        'Работа',
        'Ресурсы бренда',
        'Реклама',
        'Маркетинг',
        'Твиттер для бизнеса',
        'Разработчикам',
        'Каталог',
        'Настройки',
        '© Twitter, Inc., 2021.'
    ];

    return (
        <footer>
            <ul className="menu-list">
                {menuList.map((item, i) => <li key={i}>{item}</li>)}
            </ul>
        </footer>
    );
};

export default Footer;
