import style from './SearchBar.module.css';
import { useState } from 'react';
import { NavLink } from "react-router-dom";

export default function SearchBar({onSearch}) {
   const [id, setId] = useState('');

   function handleChange (event) {
      setId(event.target.value)
   }
   return (
      <div className={style.DivSearch}>
         <input type='search' className={style.Input} onChange={handleChange} placeholder='Ingrese un ID...'/>
         <NavLink to={'/home'}>
            <button onClick={() => onSearch(id)} className={style.Btn}>Agregar</button>
         </NavLink>
      </div>
   );
}