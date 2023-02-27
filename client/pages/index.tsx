import Button from '@material-ui/core/Button';
import Navbar from '../components/Navbar';
import MainLayout from '../layouts/MainLayouts';

export default function Home(){

    return (
        <MainLayout>
            <div className="center">
                <h1>Добро пожаловать</h1>
                <h3>Здесь собраны лучшие треки</h3>
                <Button variant="contained" color="primary">
                    Hello World
                </Button>
            </div>
            <style jsx>
                {`
                    .center{
                        display:flex;
                        flex-direction:column;
                        align-items:center;
                        margin-top:120px;
                    }
                `}
            </style>
        </MainLayout>
    )
}