import { Dispatch } from "react";
import { TrackAction, TrackActionTypes } from "../../types/track";
import axios from 'axios';

export const fetchTrack = () => {
    return async (dispatch: Dispatch<TrackAction>) => {
        try{
            const response = await axios.get('http://localhost:5000/tracks/all');
            dispatch({type: TrackActionTypes.FETCH_TRACKS, payload: response.data});
        }catch(err){
            dispatch({type: TrackActionTypes.FETCH_TRACK_ERROR, payload:'Ошибка при зазрузке трэка!'});
            console.error(err);
        }
    }
}

export const searchTrack = (query: string) =>{
    return async (dispatch: Dispatch<TrackAction>) => {
        try{
            const response = await axios.get('http://localhost:5000/tracks/all?query=' + query);
            dispatch({type: TrackActionTypes.FETCH_TRACKS, payload: response.data});
        }catch(err){
            dispatch({type: TrackActionTypes.FETCH_TRACK_ERROR, payload:'Ошибка при зазрузке трэка!'});
            console.error(err);
        }
    }
}