import style from './SideContent.module.scss';
import AsideOpen from "./AsideOpen/AsideOpen";
import AsideClosed from "./AsideClosed/AsideClosed";

const SideContent = (props) => {
    return (
        <aside className={style.aSide}>
            <AsideOpen />
            {/*<AsideClosed />*/}
        </aside>
    )
}

export default SideContent;