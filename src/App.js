import style from './App.module.css';
import { useState, useEffect } from 'react';
import Cards from './components/Cards/Cards';
import Form from './components/Form/Form';
import Titulo from './components/titulo/Titulo';
import Nav from './components/Nav/Nav';
import Detail from "./components/Detail/Detail";
import About from "./components/About/About";
import axios from "axios";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import Error404 from './components/Error404/Error404';

function App() {
   const { pathname } = useLocation();
   const navigate = useNavigate();
   const [ characters, setCharacters ] = useState([]);
   const [ access, setAccess ] = useState(false);
   const EMAIL = 'isdavid92@hotmail.com';
   const PASSWORD = 'admin123';
   const [ nombre, setNombre ] = useState('');

   const login = ({ email, password }) => {
      if (email===EMAIL && password===PASSWORD) {
         setAccess(true);
         navigate('/home');
         setNombre('Isra');
         setCharacters([])
      }
   }

   const Invitado = () => {
      setAccess(true);
      navigate('/home');
      setNombre('Invitado');
      setCharacters([])
   }

   useEffect(() => {
      !access && navigate('/');
   }, [access]);

   const logOut = () => {
      setAccess(false);
   }

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

            { pathname !== '/' &&
            <>
               <div className={style.navTit}>
                  <Titulo/>
                  <Nav onSearch ={onSearch} onRandom={onRandom} onClearn={onClearn} onLogOut={logOut}/>
               </div>
               { pathname == '/home' && <h1 className={style.saludo}>¡ hola {nombre} !</h1> }
            </>
            }
         
         <Routes>
            <Route path='/' element={<Form login={login} Invitado={Invitado}/>}/>
            <Route path='/home' element={<Cards characters={characters} onClose={onClose}/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/detail/:id' element={<Detail/>}/>
            <Route path='*' element={<Error404/>}/>
         </Routes>
      </div>
   );
}

export default App;
