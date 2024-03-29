import axios from "axios";
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import { useState } from "react";
import { useInput } from "../../hooks/useInputs";
import MainLayout from "../../layouts/MainLayouts";
import { ITrack } from "../../types/track";

const TrackPage = ({serverTrack}) => {
    const [track, setTrack] = useState<ITrack>(serverTrack);
    const router = useRouter();
    const username = useInput('');
    const text = useInput('');

    const addComment = async () => {
        try{
            const response = await axios.post('http://localhost:5000/tracks/comment', {
                username: username.value,
                text: text.value,
                trackId: track.id
            });

            setTrack({...track, comments:[...track.comments, response.data]})
            
            //console.log('username: ', username.value);
            //console.log('text: ', text.value);
        }catch(err){
            console.log(err);
        }    
    }

    return(
        <MainLayout title={track.name + ' - ' + track.artist}>
            <button
                style={{fontSize: '32px'}}
                onClick={() => router.push('/tracks')}
            >
                К списку
            </button>
            <button>
                <img width={200} height={200} src={'http://localhost:5000/' + track.picture} />
                <div>
                    <h1>Название трэка - {track.name}</h1>
                    <h1>Исполнитель трэка - {track.artist}</h1>
                    <h1>Прослушивание трэка - {track.listens}</h1>
                </div>
            </button>
            <h1>Слова в трэке</h1>
            <p>{track.text}</p>
            <h1>Коментарии</h1>
            <button>
                <input {...username} />
                <input {...text} />
                <button onClick={addComment}>Отправить</button>
            </button>
            <div>
                {track.comments.length > 0 && 
                    track.comments.map(comment => 
                        <div key={comment.id}>
                            <h3>Автор: {comment.username}</h3>
                            <h4>Коментарии: {comment.text}</h4>
                            <hr />
                        </div>        
                    )
                }
            </div>
        </MainLayout>
    );
}

export default TrackPage;

export const getServerSideProps: GetServerSideProps = async ({params})  => {

    const response = await axios.get('http://localhost:5000/tracks/' + params.id );

    return { 
        props: {
            serverTrack:response.data,
        } 
    }
}