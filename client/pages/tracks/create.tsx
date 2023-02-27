import {useState} from 'react';
import MainLayout from '../../layouts/MainLayouts';
import StepWrapper from '../../components/StepWrapper';
import { Button, Grid, TextField } from '@material-ui/core';
import FileUpload from '../../components/FileUpload';
import { useInput } from '../../hooks/useInputs';
import axios from 'axios';
import { useRouter } from 'next/router';

const Create:React.FC = () => {
    const [activeStep, setActiveStep] = useState(0);
    const [picture, setPicture] = useState(null);
    const [audio, setAudio] = useState(null);
    const name = useInput('');
    const artist = useInput('');
    const text = useInput('');
    const router = useRouter();

    const prev = () => {
        setActiveStep(prev => prev - 1);
    }

    const next = () => {
        if(activeStep !== 2){
            setActiveStep(prev => prev + 1);
        }else{
            const formData = new FormData();
            formData.append('name', name.value);
            formData.append('artist', artist.value);
            formData.append('text', text.value);
            formData.append('audio', audio);
            formData.append('picture', picture);
            console.log(formData.get('audio'));
            
            fetch('http://localhost:5000/tracks/create', {
                method: 'POST',
                body: formData
            })
            .then(res => router.push('/tracks'))
            .catch(err => console.log(err));    
        }    
    }

    return (
        <MainLayout>
            <StepWrapper activeStep={activeStep}>
                {activeStep === 0 && 
                    <Grid container direction='column' style={{padding:20}}>
                        <TextField
                            {...name}
                            variant="outlined"
                            style={{marginTop:10}}
                            label={"Название трэка"}
                        />
                        <TextField
                            {...artist}
                            variant="outlined"
                            style={{marginTop:10}}
                            label={"Имя исполнителя"}
                        />
                        <TextField
                            {...text}
                            variant="outlined"
                            style={{marginTop:10}}
                            label={"Слова к трэку"}
                            rows={3}
                            multiline
                        />
                    </Grid>
                }
                {activeStep === 1 && 
                    <FileUpload setFile={setPicture} accept="image/*">
                        <Button  variant="contained" color="primary">
                            Загрузить изображение
                        </Button>
                    </FileUpload>
                }
                {activeStep === 2 && 
                    <FileUpload setFile={setAudio} accept="audio/*">
                        <Button  variant="contained" color="primary">
                            Загрузить аудио
                        </Button>
                    </FileUpload>
                }
            </StepWrapper>
            <Grid container justifyContent="space-around">
                <Button variant="contained" disabled={activeStep === 0} onClick={prev}>Далее</Button>
                <Button variant="contained" onClick={next}>Далее</Button>
            </Grid>
        </MainLayout>
    )
}

export default Create;