import { ITrack } from "./track"

export interface PlayerState{
    active: null|ITrack;
    volume:number;
    duration:number;
    currentTime:number;
    pause:boolean;
}

export enum PlayerActionTypes {
    PLAY = 'play',
    PAUSE = 'pause',
    SET_ACTIVE = 'set_active',
    SET_DURATION = 'set_duration',
    SET_CURRENT_TIME = 'set_current_time',
    SET_VOLUME = 'set_volume',
}

interface PlayAction{
    type:PlayerActionTypes.PLAY;
}

interface PauseAction{
    type:PlayerActionTypes.PAUSE;
}

interface SetActiveAction{
    type:PlayerActionTypes.SET_ACTIVE;
    payload:ITrack;
}

interface SetDuratinAction{
    type:PlayerActionTypes.SET_DURATION;
    payload:number;
}

interface SetVolumeAction{
    type:PlayerActionTypes.SET_VOLUME;
    payload:number;
}

interface SetCurentTimeAction{
    type:PlayerActionTypes.SET_CURRENT_TIME;
    payload:number;
}

export type PlayerAction =
    PlayAction
    | PauseAction
    | SetActiveAction
    | SetDuratinAction
    | SetVolumeAction
    | SetCurentTimeAction;