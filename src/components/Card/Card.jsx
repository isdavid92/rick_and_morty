import style from './Card.module.css'

export default function Card(props) {
   return (
      <div className={style.card}>
         <div className={style.close}>
            <button onClick={props.onClose}>X</button>
         </div>
         
            <h1 className={style.id}>{props.id}</h1>
         
         <img src={props.image} alt={props.name} />
         <h2>name: {props.name}</h2>
         <h2>status: {props.status}</h2>
         <h2>species: {props.species}</h2>
         <h2>gender: {props.gender}</h2>
         <h2> origin:<br /> {props.origin}</h2>
      </div>
   );
}
