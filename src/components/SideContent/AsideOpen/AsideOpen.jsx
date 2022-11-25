import style from "./AsideOpen.module.scss";

const AsideOpen = (props) => {
    return (
        <div className={style.wrapper}>
            <div className={style.tools}>
                <button className={style.btn}>
                    <img className={style.img} src="#" alt='#'/>
                    Главная
                </button>
                <button className={style.btn}>
                    <img className={style.img} src="#" alt='#'/>
                    История
                </button>
                <button className={style.btn}>
                    <img className={style.img} src="#" alt='#'/>
                    Ваши Видео
                </button>
                <button className={style.btn}>
                    <img className={style.img} src="#" alt='#'/>
                    Смотреть позже
                </button>
                <button className={style.btn}>
                    <img className={style.img} src="#" alt='#'/>
                    Понравившиеся
                </button>
            </div>
            <div className={style.subscribe}>
                <div className={style.label}>Подписки</div>
                <div className={style.items}>
                    {/*  channel  */}
                    <button className={style.item}>
                            <img className={style.img} src="#" alt="#"/>
                            BlackDrakosha
                    </button>
                    {/*  channel  */}
                    {/*  channel  */}
                    <button className={style.item}>
                        <img className={style.img} src="#" alt="#"/>
                        Papillon
                    </button>
                    {/*  channel  */}
                </div>
            </div>
        </div>
    )
}

export default AsideOpen;