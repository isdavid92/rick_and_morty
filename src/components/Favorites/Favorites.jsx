import { useSelector } from 'react-redux';
import Card from '../Card/Card';
import style from './Favorites.module.css';

const Favorites = () => {
    const myFavorites = useSelector(state => state.myFavorites );

    return <div className={style.divFav}>{
            myFavorites.map((per) => {
                return (<Card
                    key={per.id}
                    id = {per.id}
                    name={per.name}
                    status={per.status}
                    species={per.species}
                    gender={per.gender}
                    origin={per.origin?.name}
                    image={per.image}
                />)
            })
        }</div>
};

export default Favorites;