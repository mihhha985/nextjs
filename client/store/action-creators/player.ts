import {PlayerAction, PlayerActionTypes} from '../../types/player';
import { ITrack } from '../../types/track';

export const PlayTrack = ():PlayerAction => {
    return {type:PlayerActionTypes.PLAY}
}

export const PauseTrack = ():PlayerAction => {
    return {type:PlayerActionTypes.PAUSE}
}

export const SetActiveTrack = (track:ITrack):PlayerAction => {
    return {type:PlayerActionTypes.SET_ACTIVE, payload:track}
}

export const SetDurationTrack = (duration:number):PlayerAction => {
    return {type:PlayerActionTypes.SET_DURATION, payload:duration}
}

export const SetCurrentTimeTrack = (time:number):PlayerAction => {
    return {type:PlayerActionTypes.SET_CURRENT_TIME, payload:time}
}

export const SetVolumeTrack = (volume:number):PlayerAction => {
    return {type:PlayerActionTypes.SET_VOLUME, payload:volume}
}