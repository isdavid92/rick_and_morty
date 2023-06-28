import SearchBar from '../SearchBar/SearchBar';
import style from './Nav.module.css';
import imgLogOut from './img/logOut.png'
import imgClearn from './img/clearn.png'
import imgHome from './img/home.png';
import imgAbout from './img/about.png';
import imgRandom from './img/random.png';
import imgFavoritos from './img/favoritos.png'
import { Link } from "react-router-dom";

const Nav = function (props) {
    const onRandom = props.onRandom;
    const onClearn = props.onClearn;
    const logOut = props.onLogOut;

    return (
       <nav className={style.nav}>
        <div className={style.divRandom}>
            <img title='Cerrar sesion' src={imgLogOut} onClick={() => logOut()} className={style.logOut}/>
            <Link to={"/home"}>
                <img title='Borrar todas las tarjetas' src={imgClearn} onClick={() => onClearn()} className={style.clearn}/>
            </Link>
            <Link to={"/home"}>
                <img title='Home' src={imgHome} className={style.home}/>
            </Link>
            <Link to={"/about"}>
                <img title='Informacion de esta App' src={imgAbout} className={style.about}/>
            </Link>
            <Link to={"/home"}>
                <img title='Mostrar cualquier tarjeta' src={imgRandom} onClick={() => onRandom()} className={style.random}/>
            </Link>
            <Link to={"/favorites"}>
                <img title='Mis favoritos' src={imgFavoritos} className={style.favoritos}/>
            </Link>
        </div>
        <SearchBar onSearch={props.onSearch}/>
       </nav>
    )
}

export default Nav;