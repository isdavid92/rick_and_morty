import style from './App.module.css';
import { useState } from 'react';
import Cards from './components/Cards/Cards';
import Titulo from './components/titulo/Titulo';
import Nav from './components/Nav/Nav';
import Detail from "./components/Detail/Detail";
import About from "./components/About/About";
import axios from "axios";
import { Routes, Route } from "react-router-dom";
import Error404 from './components/Error404/Error404';

function App() {
   const [ characters, setCharacters ] = useState([])

   const onSearch = (id) => {
      if(!id) alert('Ingresa un ID')
      if(characters.find(char => char.id === parseInt(id) )){
        alert(`Ya existe el personaje con el id ${id}`);
        return;
      }
     axios(`https://rickandmortyapi.com/api/character/${id}`)
     .then(({data}) => {
        if(data.name){
          setCharacters((oldChars)=> [data, ...oldChars])
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
          setCharacters((oldChars)=> [data, ...oldChars])
        }
     })
    }
  
    function onClose(id){
      setCharacters(characters.filter(char => char.id !== id))
    }

    function onClearn() {
      setCharacters([])
    }

   return (
      <div className={style.App}>
         <div className={style.navTit}>
            <Titulo/>
            <Nav onSearch ={onSearch} onRandom={onRandom} onClearn={onClearn}/>
         </div>
         <Routes>
            <Route path='/home' element={<Cards characters={characters} onClose={onClose}/>}>
            </Route>
            <Route path='/about' element={<About/>}/>
            <Route path='/detail/:id' element={<Detail/>}/>
            <Route path='*' element={<Error404/>}/>
         </Routes>
      </div>
   );
}

export default App;
