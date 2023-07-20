import style from './Titulo.module.css';
import img from './img/rym.png';
import { Link } from "react-router-dom";

const Titulo = function () {
    return(
        <div className={style.titulo}>
            <Link to={"/home"}>
                <img src={img} alt="RyM" className={style.img}/>
            </Link>
        </div>
    )
}

export default Titulo