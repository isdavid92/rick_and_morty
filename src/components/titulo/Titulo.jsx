import style from './Titulo.module.css';
import img from './img/rym.png'

const Titulo = function () {
    return(
        <div className={style.titulo}>
            <img src={img} alt="RyM" className={style.img}/>
        </div>
    )
}

export default Titulo