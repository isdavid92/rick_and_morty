import SearchBar from '../SearchBar/SearchBar'
import style from './Nav.module.css'
import img from './img/random.png'

const Nav = function (props) {
    const onRandom = props.onRandom;
    return (
       <nav className={style.nav}>
        <div className={style.divRandom}>
            <img src={img} alt="random" onClick={() => onRandom()} className={style.random}/>
        </div>
        <SearchBar onSearch={props.onSearch}/>
       </nav>
    )
}

export default Nav;