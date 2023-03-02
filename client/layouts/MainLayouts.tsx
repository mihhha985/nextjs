import Navbar from "../components/Navbar";
import Head from 'next/head';
import Player from "../components/Player";

interface MainLayoutProps{
    title?: string;
    description?: string;
    keywords?: string;
    children:any;
}

const MainLayout:React.FC<MainLayoutProps> = ({children, title, description, keywords}) => {

    return (
        <>
            <Head>
                <title>{title || 'Музыкальная площадка'}</title>
                <meta name="description" content={"Бесплатная музыкальная площадка " + description} /> 
                <meta name="robots" content={"index, follow"} />
                <meta name="keywords" content={keywords || "музыкальные трэки"} />   
                <meta
                    name="viewport"
                    content="minimum-scale=1, initial-scale=1, width=device-width"
                />
            </Head>
            <Navbar />
            <div style={{marginTop:'90px'}}>
                {children}
            </div>
            <Player />
        </>
    )
}

export default MainLayout;