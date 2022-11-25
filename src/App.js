import style from './App.module.scss';
import Header from "./components/Header/Header";
import SideContent from "./components/SideContent/SideContent";
import MainContent from "./components/MainContent/MainContent";

function App() {
  return (
    <div className={style.wrapper}>
      <Header/>
      <SideContent/>
      <MainContent/>
    </div>
  );
}

export default App;
