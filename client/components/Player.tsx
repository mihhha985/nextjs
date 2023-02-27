import { useEffect } from "react";
import { PlayArrow, Pause, VolumeUp } from '@material-ui/icons';
import { Grid, IconButton} from "@material-ui/core";
import styles from "../styles/Player.module.scss";
import TrackProgres from "./TrackProgres";
import { useTypedSelector } from "../hooks/useTypeSelector";
import { useActions } from "../hooks/useActions";

interface AudioFile{
    play:Function;
    pause:Function;
    src:string;
    volume:number;
    onloadedmetadata:Function;
    ontimeupdate:Function;
    duration:number;
    currentTime:number;
}
let audio:any = null;

const Player:React.FC = () => {
    const { active, volume, duration, currentTime, pause } = useTypedSelector(store => store.player);
    const {PlayTrack, PauseTrack, SetVolumeTrack, SetDurationTrack, SetCurrentTimeTrack} = useActions();
    useEffect(() => {
        if(audio === null) {
            audio = new Audio();
        }else{
            setAudio();
            play();
        }

    }, [active]);

    const setAudio = () => {
        if(active){
            audio.src = 'http://localhost:5000/' + active.audio;
            audio.volume = volume / 100;
            
            audio.onloadedmetadata = () => {
                SetDurationTrack(Math.ceil(audio.duration));
            }

            audio.ontimeupdate = () => {
                SetCurrentTimeTrack(Math.ceil(audio.currentTime));
            }
           
        }
    }

    const play = () => {
        if(pause){
            PlayTrack();
            audio.play();
        }else{
            PauseTrack();
            audio.pause();
        }
    }

    const changeVolyme = (e:React.ChangeEvent<HTMLInputElement>) => {
        audio.volume = Number(e.target.value) / 100;
        SetVolumeTrack(Number(e.target.value));
    }

    const changeCurrentTime = (e:React.ChangeEvent<HTMLInputElement>) => {
        audio.currentTime = Number(e.target.value);
        SetCurrentTimeTrack(Number(e.target.value));
    }

    if(!active){
        return null;
    }

    return (
        <div className={styles.palyer}>
            <IconButton onClick={play}>
                {pause
                    ? <PlayArrow />
                    : <Pause />
                }
            </IconButton>
            <Grid container direction="column"style={{width:200, margin:'0 20px'}}>
                <div>{active?.name}</div>
                <div>{active?.artist}</div>        
            </Grid>
            <TrackProgres left={currentTime} right={duration} onChange={changeCurrentTime} />
            <VolumeUp style={{marginLeft:'auto'}}/>
            <TrackProgres left={volume} right={100} onChange={changeVolyme} />
        </div>
    )
}

export default Player;