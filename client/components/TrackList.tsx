import React from "react";
import { ITrack } from "../types/track";
import { Grid, Box } from "@material-ui/core";
import TrackItem from "./TrackItem";

interface TrackListProps{
    tracks:ITrack[];
}

const TrackList:React.FC<TrackListProps> = ({tracks}) => {
    if(tracks.length > 0){
        return(
            <Grid container direction="column">
                <Box p={2}>
                    {tracks.map(track =>
                        <TrackItem 
                            key={track.id}
                            track={track}
                        />    
                    )}
                </Box>
            </Grid>
        );
    }else{
        return <h3 style={{color: '#999', marginTop:'20px', alignSelf:'center'}}>По вашему запросу ничего не найденно!</h3>
    }    
}

export default TrackList;