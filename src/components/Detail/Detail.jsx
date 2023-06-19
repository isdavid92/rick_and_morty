import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect} from "react";
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
        <div>
            <h3 className={style.textInfo}>status: {charDetail.status}</h3>
            <h3 className={style.textInfo}>species: <span >{charDetail.species}</span></h3>
            <h3 className={style.textInfo}>gender: {charDetail.gender}</h3>
            <h3 className={style.textInfo}> origin:<br /> {charDetail.origin?.name}</h3>
        </div>
    )
}

export default Detail;