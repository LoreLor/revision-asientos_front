import axios from "axios";
import { FILTROS_FAILURE, FILTROS_REQUEST, FILTROS_SUCCESS, GET_ALL_ASIENTOS_FAILURE, GET_ALL_ASIENTOS_REQUEST, GET_ALL_ASIENTOS_SUCCESS, GET_ASIENTO_BY_ID_FAILURE, GET_ASIENTO_BY_ID_REQUEST, GET_ASIENTO_BY_ID_SUCCESS } from "./actionsType";
import { URL_API } from "../../server";

export const getAllAsientos = () => async (dispatch) =>{
    dispatch({
        type: GET_ALL_ASIENTOS_REQUEST
    });
    try {
        const response = await axios.get(URL_API);
        dispatch({
            type: GET_ALL_ASIENTOS_SUCCESS,
            payload: response.data
        });
    } catch (error) {
        dispatch({
            type: GET_ALL_ASIENTOS_FAILURE,
            payload: error
        });
    }
};

export const getAsientoById = (id) => async (dispatch) => {
    dispatch({
        type: GET_ASIENTO_BY_ID_REQUEST,
        payload: id,
    });
    try {
        const response = await axios.get(`${URL_API}/${id}`);
        dispatch({
            type: GET_ASIENTO_BY_ID_SUCCESS,
            payload: response.data
        });
    } catch (error) {
        dispatch({
            type: GET_ASIENTO_BY_ID_FAILURE,
            payload: error
        });
    }
};

export const filtrarAsientos = (filtro) => async (dispatch) => {
    dispatch({
        type: FILTROS_REQUEST,
        payload: filtro
    });
    try {
        const response = await axios.post(`${URL_API}/filtros`, filtro);
        dispatch({
            type: FILTROS_SUCCESS,
            payload: response.data
        });
    } catch (error) {
        dispatch({
            type: FILTROS_FAILURE,
            payload: error
        });
    }

};