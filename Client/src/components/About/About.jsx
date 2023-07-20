import style from './About.module.css';
import perfil from './img/perfil.jpg';
import titulo from './img/rym.png';
import { useNavigate } from 'react-router-dom';

function About () {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(-1)
    }

    return (
        <div className={style.About}>
            <img className={style.perfil} src={perfil} alt="" />
            <div className={style.divInfo}>
                <div to={'/home'} className={style.close}>
                    <button className={style.boton} onClick={handleClick}><strong>X</strong></button>
                </div>
                <h1>App de personajes</h1>
                <div className={style.divTitulo}>
                    <img className={style.titulo} src={titulo} alt="" />
                </div>
            
                <div className={style.divIsra}>
                    <h1>creada por:</h1>
                    <div className={style.nomIsra}>
                        <h1 className={style.isra}>Isra</h1>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default About;