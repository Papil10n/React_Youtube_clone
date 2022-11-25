import style from './VideoArticle.module.scss';

const VideoArticle = (props) => {
    return (
        <article className={style.article}>
            <button className={style.video}>
                <div className={style.imgWrap}>
                    <div></div>
                    {/*<img src="#" alt="#"/>*/}
                </div>
                <div className={style.infoWrap}>
                    <button className={style.author}>
                        <img src="#" alt=""/>
                    </button>
                    <div className={style.info}>
                        <div className={style.videoName}>Top 10 css transition</div>
                        <div className={style.time}>1 час назад</div>
                    </div>
                </div>
            </button>
        </article>
    )
}

export default VideoArticle;