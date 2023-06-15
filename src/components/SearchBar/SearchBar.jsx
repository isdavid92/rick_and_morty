import style from './SearchBar.module.css';
import { useState } from 'react';

export default function SearchBar({onSearch}) {
   const [id, setId] = useState('');

   function handleChange (event) {
      setId(event.target.value)
   }
   return (
      <div className={style.DivSearch}>
         <input type='search' className={style.Input} onChange={handleChange} placeholder='Ingrese un ID...'/>
         <button onClick={() => onSearch(id)} className={style.Btn}>Agregar</button>
      </div>
   );
}