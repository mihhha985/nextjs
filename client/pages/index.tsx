
import MainLayout from '../layouts/MainLayouts';

export default function Home(){

    return (
        <MainLayout>
            <div className="center">
                <h1>Добро пожаловать</h1>
                <h3>Здесь собраны лучшие треки</h3>
                <button>
                    Hello World
                </button>
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