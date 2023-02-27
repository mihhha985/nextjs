export interface IComment{
    id: string;
    username: string;
    text:string;
    trackId:number;
}

export interface ITrack{
    id: number;
    name: string;
    artist: string;
    text?: string;
    listens?:number;
    picture:string;
    audio:string;
    comments?:IComment[];
}

export interface TrackState{
    tracks: ITrack[];
    error:string | null;
}

export enum TrackActionTypes{
    FETCH_TRACKS = 'fetch_tracks',
    FETCH_TRACK_SUCCESS = 'fetch_tracks_success',
    FETCH_TRACK_ERROR = 'fetch_tracks_error',
}

export type TrackAction = FetchTracksAction | FetchTracksError;

interface FetchTracksAction{
    type:TrackActionTypes.FETCH_TRACKS;
    payload:ITrack[];
}

interface FetchTracksError{
    type:TrackActionTypes.FETCH_TRACK_ERROR;
    payload:string;
}