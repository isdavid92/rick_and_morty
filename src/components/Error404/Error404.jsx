import img from './img/oh_no.gif';
import style from './Error404.module.css';
function Error404() {
    return (
        <div className={style.Error404}>
            <img className={style.gif} src={img} alt="oh no" />
            <h1>ESTA DIRECCION NO EXISTE 😪</h1>
        </div>
    )
}

export default Error404;