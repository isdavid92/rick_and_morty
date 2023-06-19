import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect} from "react";
import { Link } from "react-router-dom";
import style from "./Detail.module.css";

function Detail () {
    const {id} = useParams();
    const [ charDetail, setCharDetail ] = useState({});
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
                <Link className={style.close} to={"/home"}>
                    <button className={style.boton}>X</button>
                </Link>
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