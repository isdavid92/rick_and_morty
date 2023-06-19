import style from './Card.module.css';
import { NavLink } from "react-router-dom";

function Card(props) {
   const onClose = props.onClose;
   return (
      <div className={style.card}>
         
         <div className={style.info}>
            <div className={style.close}>
               <button onClick={()=> onClose(props.id)} className={style.boton}> <strong>X</strong></button>
            </div>
            
             <NavLink className={style.NavLink} to={`/detail/${props.id}`}>
               <h1 className={style.id}>{props.id}</h1>
               <img src={props.image} alt={props.name} className={style.img}/>
               <h1 className={style.textInfo}>{props.name}</h1>
             </NavLink>
         </div>
         
      </div>
   );
}

export default Card;