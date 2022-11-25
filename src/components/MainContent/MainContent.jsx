import style from './MainContent.module.scss';
import VideoArticle from "./VideoArticle/VideoArticle";

const MainContent = (props) => {
    return (
        <main className={style.main}>
            {/*   {videos}   */}
            <VideoArticle />
            <VideoArticle />
            <VideoArticle />
            <VideoArticle />
            <VideoArticle />
        </main>
    )
}

export default MainContent;