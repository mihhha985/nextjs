import {useState} from 'react';
import MainLayout from '../../layouts/MainLayouts';
import StepWrapper from '../../components/StepWrapper';
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
                    <div style={{padding:20}}>
                        <input {...name} style={{marginTop:10}} />
                        <input {...artist} style={{marginTop:10}} />
                        <input {...text} style={{marginTop:10}} />
                    </div>
                }
                {activeStep === 1 && 
                    <FileUpload setFile={setPicture} accept="image/*">
                        <button>Загрузить изображение</button>
                    </FileUpload>
                }
                {activeStep === 2 && 
                    <FileUpload setFile={setAudio} accept="audio/*">
                        <button>Загрузить аудио</button>
                    </FileUpload>
                }
            </StepWrapper>
            <div>
                <button disabled={activeStep === 0} onClick={prev}>Далее</button>
                <button onClick={next}>Далее</button>
            </div>
        </MainLayout>
    )
}

export default Create;