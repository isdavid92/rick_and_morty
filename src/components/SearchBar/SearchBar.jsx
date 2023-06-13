import style from './SearchBar.module.css'

export default function SearchBar({onSearch}) {
   return (
      <div className={style.nav}>
         <input type='search'/>
         <button onClick={onSearch}>Agregar</button>
      </div>
   );
}
