import { useEffect, useState } from "react";
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
            <div>
                <div style={{width: '90%', padding: '10px'}}>
                    <div>
                        <h1>Список трэков</h1>
                        <button onClick={() => router.push('/tracks/create')}>
                            Загрузить
                        </button>
                    </div>
                    <input value={query} onChange={search} />
                </div>
                <TrackList tracks={tracks}/>
            </div>
        </MainLayout>
    )
}
