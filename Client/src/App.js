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
import Favorites from './components/Favorites/Favorites';
import { filterCards, orderCards } from './redux/actions';
import { useDispatch } from 'react-redux';

function App() {
   const { pathname } = useLocation();
   const navigate = useNavigate();
   const [ characters, setCharacters ] = useState([]);
   const [ access, setAccess ] = useState(false);
   const [ nombre, setNombre ] = useState('');
   const dispatch = useDispatch();
   const [ aux , setAux ] = useState(false);
   const URL = 'http://localhost:3001/rickandmorty/';

   const handleOrder = (event) => {
      dispatch(orderCards(event.target.value));
      setAux(!aux);
   }

   const handleFilter = (event) => {
      dispatch(filterCards(event.target.value))
   }

   const login = ({ email, password }) => {
      axios(`${URL}login?email=${email}&password=${password}`)
      .then(({data}) => {
         const { access } = data;
         setAccess(access);
         access && navigate('/home');
         setNombre('Isra');
         setCharacters([])
      })
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
     axios(`http://localhost:3001/rickandmorty/character/${id}`)
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

      axios(`http://localhost:3001/rickandmorty/character/${idRandom}`)
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
               { pathname == '/favorites' && 
                  <>
                     <div className={style.divFavFil}>
                        <h1 className={style.favoritos}>¡Mis favoritos!</h1>
                        <div className={style.divFil}>
                           <h2 className={style.filtrar}>Filtrar:</h2>
                           <div className={style.divSelect}>
                              <select className={style.selectGen} onChange={handleFilter}>
                                 <option value='todos'>Todos</option>
                                 <option value='Male'>Male</option>
                                 <option value='Female'>Female</option>
                                 <option value='Genderless'>Genderless</option>
                                 <option value='unknown'>Unknown</option>
                              </select>
                              <select className={style.selectPosi} onChange={handleOrder}>
                                 <option value='A'>Ascendente</option>
                                 <option value='B'>Descendente</option>
                              </select>
                           </div>
                        </div>
                     </div>
                  </>
               }
            </>
            }
         
         <Routes>
            <Route path='/' element={<Form login={login} Invitado={Invitado}/>}/>
            <Route path='/home' element={<Cards characters={characters} onClose={onClose}/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/detail/:id' element={<Detail/>}/>
            <Route path='/favorites' element={<Favorites/>}/>
            <Route path='*' element={<Error404/>}/>
         </Routes>
      </div>
   );
}

export default App;
