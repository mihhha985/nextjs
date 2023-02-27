import {TrackAction, TrackActionTypes, TrackState} from '../../types/track'

const initialState: TrackState = {
    tracks: [
        {id:1, name: 'Confesa', audio: 'track.mp3', picture:'picture.jpg', artist: 'Adriano Celentano'},
        {id:2, name: 'Toxic', audio: 'track.mp3', picture:'picture.jpg', artist: 'Britney Spirce'},
        {id:3, name: 'Special', audio: 'track.mp3', picture:'picture.jpg', artist: 'Britney Spirce'},
    ],
    error:null
    
}

export const trackReducer = (state = initialState, action: TrackAction) => {
    switch(action.type){
        case TrackActionTypes.FETCH_TRACKS:
            return {error: null, tracks: action.payload};
        case TrackActionTypes.FETCH_TRACK_ERROR:
            return {...state, error: action.payload};
        default:
            return state;
    }
}