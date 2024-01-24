import style from './Form.module.css';
import { useState } from "react";
import Validation from "./Validation.js";
import imgRyM from './img/rick&morty.jpg';
import imgTitle from './img/rym.png';

const Form = ({ login, Invitado }) => {
    const [ userData, setUserData] = useState({
        email:'',
        password:''
    })

    const [ errors, setErrors] = useState({})

    const handleChange = (event) => {
        const nameProperty = event.target.name;
        const value = event.target.value;
        setUserData({...userData, [nameProperty]:value})
        setErrors(Validation({...userData, [nameProperty]:value}))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        login(userData);
    }

    return(
        <form className={style.Form}>
            <img src={imgRyM} className={style.imgRyM}/>
            <img src={imgTitle} className={style.titulo} />
            <br />
            <div className={style.divForm}>
                <label className={style.label}>Email:</label>
                <br/>
                <input
                    className={style.input}
                    type="text"
                    value={userData.email}
                    name="email"
                    onChange={handleChange}/>
                <br/>
                <span className={style.span}>{errors.email}</span>
                <br/>
                <label className={style.label}>Password:</label>
                <br/>
                <input
                    className={style.input}
                    type="password"
                    value={userData.password}
                    name="password"
                    onChange={handleChange}/>
                <br/>
                <span className={style.span}>{errors.password}</span>
                <br/>
                <button className={style.Btn} onClick={handleSubmit}>Submit</button>
                <h3 className={style.invitado} onClick={()=>Invitado()}>Acceder como invitado</h3>
            </div>
        </form>
    )
};

export default Form