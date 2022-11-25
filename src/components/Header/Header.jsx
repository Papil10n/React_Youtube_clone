import style from './Header.module.scss';
import searchIcon from './../../assets/images/searchIcon.png';
import microphoneIcon from './../../assets/images/microphoneIcon.png';

const Header = (props) => {
    return (
        <header className={style.header}>
            <div className={style.left}>
                <button className={style.burgerWrap}>
                    <img className={style.burger} src="#" alt="#Burger"/>
                </button>
                <button className={style.logoWrap}>
                    <img className={style.logo} src="#" alt="#YouTube"/>
                </button>
            </div>
            <div className={style.center}>
                <input className={style.searchInput} type="text" placeholder="Введите запрос"/>
                <button className={style.searchButton}>
                    <img src={searchIcon} alt="search"/>
                </button>
                <button className={style.voiceSearch}>
                    <img src={microphoneIcon} alt="Голосовой поиск"/>
                </button>
            </div>
            <div className={style.right}>
                <div className={style.addVideoWrap}>
                    <button className={style.rightButton}>
                        <img src="#" alt="#Add"/>
                    </button>
                </div>
                <div className={style.notificationsWrap}>
                    <button className={style.rightButton}>
                        <img src="#" alt="#Wrap"/>
                    </button>
                </div>
                <div className={style.profileWrap}>
                    <button className={style.rightButton}>
                        <img src="#" alt="#Profile"/>
                    </button>
                </div>
            </div>

        </header>
    )
}

export default Header;