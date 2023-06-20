import style from './SearchBar.module.css';
import { useState } from 'react';
import { NavLink } from "react-router-dom";

export default function SearchBar({onSearch}) {
   const [id, setId] = useState('');

   function handleChange (event) {
      setId(event.target.value)
   }

   function handleKeyPress(event) {
      if (event.key === 'Enter') {
        onSearch(id);
      }
   }

   return (
      <div className={style.DivSearch}>
         <input type='search' onKeyPress={handleKeyPress} className={style.Input} onChange={handleChange} placeholder='Ingrese un ID...'/>
         <NavLink to={'/home'}>
            <button onClick={() => onSearch(id)} className={style.Btn}>Agregar</button>
         </NavLink>
      </div>
   );
}