import axios from 'axios';
import { FETCH_DATES } from '../constants/types';

export const fetchDates = () => dispatch =>{
    axios.get('/Evenmenten.json')
    .then( response =>
        dispatch({
            type: FETCH_DATES,
            payload: response.data
        })
    )
    .catch(error =>{
        console.log(error);
    })
}

