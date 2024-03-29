import React from "react";
import { ITrack } from "../types/track";
import TrackItem from "./TrackItem";

interface TrackListProps{
    tracks:ITrack[];
}

const TrackList:React.FC<TrackListProps> = ({tracks}) => {
    if(tracks.length > 0){
        return(
            <div>
                {tracks.map(track =>
                    <TrackItem 
                        key={track.id}
                        track={track}
                    />    
                )}
            </div>
        );
    }else{
        return <h3 style={{color: '#999', marginTop:'20px', alignSelf:'center'}}>По вашему запросу ничего не найденно!</h3>
    }    
}

export default TrackList;