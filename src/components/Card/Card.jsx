import style from './Card.module.css'

export default function Card(props) {
   const onClose = props.onClose;
   return (
      <div className={style.card}>

         
         <div className={style.info}>
            <div className={style.close}>
               <button onClick={()=> onClose(props.id)} className={style.boton}> <strong>X</strong></button>
            </div>
            <h1 className={style.id}>{props.id}</h1>
         
            <img src={props.image} alt={props.name} className={style.img}/>
         
            <h2 className={style.textInfo}>{props.name}</h2>
            <h3 className={style.textInfo}>status: {props.status}</h3>
            <h3 className={style.textInfo}>species: <span >{props.species}</span></h3>
            <h3 className={style.textInfo}>gender: {props.gender}</h3>
            <h3 className={style.textInfo}> origin:<br /> {props.origin}</h3>
         </div>
         
      </div>
   );
}
