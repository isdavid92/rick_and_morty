import style from './Card.module.css';
import { NavLink, useLocation } from "react-router-dom";
import { addFav, removeFav } from '../../redux/actions';
import { connect } from 'react-redux';
import { useState, useEffect } from 'react';
import imgFavDest from "./img/favoritos_dest.png";
import imgFavGris from './img/favoritos_gris.png';

function Card(props) {
   const onClose = props.onClose;
   const [ isFav, setIsFav ] = useState(false);
   const { pathname } = useLocation();

   useEffect(() => {
      props.allCharacters.forEach(per => {
         if (per.id===props.id) setIsFav(true)
      })
   },[])

   const handleFavorite = () => {
      if (isFav) {
         setIsFav(false);
         props.removeFav(props.id)
      } else {
         setIsFav(true)
         props.addFav(props)
      }
   };

   return (
      <div className={style.card}>
         
         <div className={style.info}>
            <div className={style.close}>
               {
                  isFav? <img src={imgFavDest} className={style.favDest} onClick={handleFavorite}/> : <img src={imgFavGris} className={style.favGris} onClick={handleFavorite}/>
                  }
               {
                  pathname === '/home' && <button onClick={()=> onClose(props.id)} className={style.boton}> <strong>X</strong></button>
               }
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

const mapStateToProps = (state) => {
   return {
      allCharacters: state.allCharacters
   }
}


const mapDispatchToProps = (dispatch) => {
   return{
      addFav: (pers) => {
         dispatch(addFav(pers))
      },
      removeFav: (id) => {
         dispatch(removeFav(id))
      }
   }
}

export default connect (mapStateToProps, mapDispatchToProps)(Card)