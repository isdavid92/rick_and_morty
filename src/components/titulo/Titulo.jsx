import style from './Titulo.module.css';
import img from './img/rym.png'

const Titulo = function () {
    return(
        <div>
            <img src={img} alt="RyM" className={style.titulo}/>
        </div>
    )
}

export default Titulo