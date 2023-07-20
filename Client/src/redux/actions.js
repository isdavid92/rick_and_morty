import { ADD_FAV, REMOVE_FAV, FILTER, ORDER } from "./actions_types";

 export const addFav = (payload) => {
    return {
        type: ADD_FAV,
        payload: payload
    }
}

export const removeFav = (id) => {
    return {
        type: REMOVE_FAV,
        payload: id
    }
}

export const filterCards = (gender) => {
    return {
        type: FILTER,
        payload: gender
    }
}

export const orderCards = (orden) => {
    return {
        type: ORDER,
        payload: orden
    }
}