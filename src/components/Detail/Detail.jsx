import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect} from "react";
import style from "./Detail.module.css";

function Detail () {
    const {id} = useParams();
    const [ charDetail, setCharDetail ] = useState({});
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(-1)
    }

    useEffect(() => {
        axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
           if (data.name) {
              setCharDetail(data);
           } else {
              window.alert('No hay personajes con ese ID');
           }
        });
        return setCharDetail({});
     }, [id]);

    return (
        <div className={style.detail}>
            <div>
                <img className={style.img} src={charDetail.image} alt="" />
            </div>
            <div className={style.info}>
                <div className={style.close} to={"/home"}>
                    <button className={style.boton} onClick={handleClick}>X</button>
                </div>
                <h1 className={style.id}>{charDetail.id}</h1>
                <h1>{charDetail.name}</h1>
                <h2>status: {charDetail.status}</h2>
                <h2>species: <span >{charDetail.species}</span></h2>
                <h2>gender: {charDetail.gender}</h2>
                <h2> origin:<br /> {charDetail.origin?.name}</h2>
            </div>
        </div>
    )
}

export default Detail;