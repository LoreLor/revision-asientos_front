import axios from 'axios';
import { GET_ALL_ASIENTOS_FAILURE, GET_ALL_ASIENTOS_REQUEST, GET_ALL_ASIENTOS_SUCCESS } from './actionsType';
import { URL_API } from '../../server';

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