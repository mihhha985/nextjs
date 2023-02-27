import {useState} from "react";
import { useRouter } from "next/router";
import { Grid, Card, IconButton} from "@material-ui/core";
import { ITrack } from "../types/track";
import { PlayArrow, Pause, Delete } from '@material-ui/icons';
import styles from '../styles/TrackItem.module.scss';
import { useActions } from "../hooks/useActions";

interface TrackItemProps{
    track: ITrack;
    active?: boolean;
}
const TrackItem:React.FC<TrackItemProps> = ({track}) => {
    const router = useRouter();
    const {PlayTrack, PauseTrack, SetActiveTrack} = useActions();
    const [active, useActive] = useState(false);

    const play = (e:React.MouseEvent) =>{
        e.stopPropagation();
        SetActiveTrack(track);
        active ? PlayTrack() : PauseTrack();
        useActive(prev => !prev)
    }

    return(
        <Card className={styles.track} onClick={() => router.push('/tracks/' + track.id)}>
            <IconButton onClick={play}>
                {!active 
                    ? <PlayArrow />
                    : <Pause />
                }
            </IconButton>
            <img width={70} height={70} src={`http://localhost:5000/${track.picture}`} />
            <Grid container direction="column">
                <div>{track.name}</div>
                <div style={{fontSize:'12px', color:'gray'}}>{track.artist}</div>
            </Grid>
            {active && <div style={{width:'120px'}}>02:42 / 03:15</div>} 
            <IconButton onClick={e => e.stopPropagation()}>
                <Delete />    
            </IconButton>  
        </Card>
    );
}

export default TrackItem;