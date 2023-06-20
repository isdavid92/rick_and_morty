import SearchBar from '../SearchBar/SearchBar';
import style from './Nav.module.css';
import imgRandom from './img/random.png';
import imgHome from './img/home.png';
import imgAbout from './img/about.png';
import imgClearn from './img/clearn.png'
import { Link } from "react-router-dom";

const Nav = function (props) {
    const onRandom = props.onRandom;
    const onClearn = props.onClearn;
    return (
       <nav className={style.nav}>
        <div className={style.divRandom}>
            <Link to={"/home"}>
                <img title='Borrar todas las tarjetas' src={imgClearn} alt="" onClick={() => onClearn()} className={style.clearn}/>
            </Link>
            <Link to={"/home"}>
                <img title='Home' src={imgHome} alt="" className={style.home}/>
            </Link>
            <Link to={"/about"}>
                <img title='Informacion de esta App' src={imgAbout} alt="" className={style.about}/>
            </Link>
            <Link to={"/home"}>
                <img title='Mostrar cualquier tarjeta' src={imgRandom} alt="random" onClick={() => onRandom()} className={style.random}/>
            </Link>
        </div>
        <SearchBar onSearch={props.onSearch}/>
       </nav>
    )
}

export default Nav;