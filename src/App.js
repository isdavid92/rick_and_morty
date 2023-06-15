import style from './App.module.css';
import { useState } from 'react';
import Cards from './components/Cards/Cards';
import Titulo from './components/titulo/Titulo';
import Nav from './components/Nav/Nav';
import axios from "axios";

function App() {
   const [ characters, setCharacters ] = useState([])

   const onSearch = (id) => {
      if(!id) alert('Ingresa un ID')
      if(characters.find(char => char.id === parseInt(id) )){
        alert(`Ya existe el personaje con el id ${id}`)
        return;
      }
     axios(`https://rickandmortyapi.com/api/character/${id}`)
     .then(({data}) => {
        if(data.name){
          setCharacters((oldChars)=> [...oldChars, data])
        }
     }).catch(
      // err => alert(err.response.data.error)
      err => alert('¡El personaje no existe!')
      )
    }

    function onRandom() {
      const idRandom = Math.floor(Math.random() * 826) + 1;

      axios(`https://rickandmortyapi.com/api/character/${idRandom}`)
     .then(({data}) => {
        if(data.name){
          setCharacters((oldChars)=> [...oldChars, data])
        }
     })
    }
  
    function onClose(id){
      setCharacters(characters.filter(char => char.id !== id))
    }
   return (
      <div className={style.App}>
         <div className={style.navTit}>
            <Titulo/>
            <Nav onSearch ={onSearch} onRandom={onRandom}/>
         </div>
         <Cards characters={characters} onClose={onClose}/>
      </div>
   );
}

export default App;
