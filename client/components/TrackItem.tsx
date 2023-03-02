import {useState} from "react";
import { useRouter } from "next/router";
import { ITrack } from "../types/track";
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
        <div className={styles.track} onClick={() => router.push('/tracks/' + track.id)}>
            <button onClick={play}>
                {!active 
                    ? <span>play</span>
                    : <span>pause</span>
                }
            </button>
            <img width={70} height={70} src={`http://localhost:5000/${track.picture}`} />
            <div>
                <div>{track.name}</div>
                <div style={{fontSize:'12px', color:'gray'}}>{track.artist}</div>
            </div>
            {active && <div style={{width:'120px'}}>02:42 / 03:15</div>} 
            <button onClick={e => e.stopPropagation()}>
                <span>delete</span>   
            </button>  
        </div>
    );
}

export default TrackItem;