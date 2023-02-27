import { useEffect, useState } from "react";
import { Grid, Card, Button, Box, TextField } from "@material-ui/core";
import { useRouter } from "next/router";
import { useTypedSelector} from '../../hooks/useTypeSelector';
import TrackList from "../../components/TrackList";
import MainLayout from "../../layouts/MainLayouts";
import { useActions } from "../../hooks/useActions";

//TODO getServerSideProps
export default function Tracks(){
    const router = useRouter();
    const {fetchTrack} = useActions();
    const {tracks, error} = useTypedSelector(store => store.track);
    const [query, setQuery] = useState<string>('');
    const [timer, setTimer] = useState(null);
    useEffect(() => {
        fetchTrack();
    }, [])
    
    const search = (e:React.ChangeEvent<HTMLInputElement>) => {
        setQuery(e.target.value);
        if(timer){
            clearTimeout(timer);
        }
    }

    if(error){
        return <h1>{error}</h1>;
    }

    return(
        <MainLayout title="Список трэков">
            <Grid container>
                <Card style={{width: '90%', padding: '10px'}}>
                    <Grid container justifyContent={"space-between"}>
                        <h1>Список трэков</h1>
                        <Button 
                            variant="contained"
                            onClick={() => router.push('/tracks/create')}
                        >
                            Загрузить
                        </Button>
                    </Grid>
                    <TextField 
                        fullWidth
                        value={query}
                        onChange={search}
                    />
                </Card>
                <TrackList tracks={tracks}/>
            </Grid>
        </MainLayout>
    )
}
