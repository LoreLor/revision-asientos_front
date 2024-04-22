import { FILTROS_FAILURE, 
    FILTROS_REQUEST, 
    FILTROS_SUCCESS, 
    GET_ALL_ASIENTOS_FAILURE, 
    GET_ALL_ASIENTOS_REQUEST, 
    GET_ALL_ASIENTOS_SUCCESS } from "../actions/actionsType";

const initialState = {
    asientos: [],
    asiento: {},
    filtro: null,
    loading: true,
    error: {}
};

export const asientoReducer = (state= initialState, action) =>{
    switch(action.type){
    case GET_ALL_ASIENTOS_REQUEST:
    case FILTROS_REQUEST:
        return {
            ...state,
            loading: true,
        };

    case GET_ALL_ASIENTOS_SUCCESS:
        return {
            ...state,
            asientos: action.payload,
            loading: false
        };

    case FILTROS_SUCCESS:
        return {
            ...state,
            filtro: action.payload,
            loading: false
        };


    case GET_ALL_ASIENTOS_FAILURE:
    case FILTROS_FAILURE:
        return {
            ...state,
            loading: false,
            error: action.payload
        };
    default:
        return state;
    }
};