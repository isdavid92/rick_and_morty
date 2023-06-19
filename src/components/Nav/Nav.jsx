import SearchBar from '../SearchBar/SearchBar';
import style from './Nav.module.css';
import imgRandom from './img/random.png';
import imgHome from './img/home.png';
import imgAbout from './img/about.png';
import { Link } from "react-router-dom";

const Nav = function (props) {
    const onRandom = props.onRandom;
    return (
       <nav className={style.nav}>
        <div className={style.divRandom}>
            <Link to={"/home"}>
                <img src={imgHome} alt="" className={style.home}/>
            </Link>
            <Link to={"/about"}>
                <img src={imgAbout} alt="" className={style.home}/>
            </Link>
            <Link to={"/home"}>
                <img src={imgRandom} alt="random" onClick={() => onRandom()} className={style.random}/>
            </Link>
        </div>
        <SearchBar onSearch={props.onSearch}/>
       </nav>
    )
}

export default Nav;