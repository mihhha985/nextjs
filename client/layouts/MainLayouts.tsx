import { Container } from "@material-ui/core";
import Navbar from "../components/Navbar";
import Head from 'next/head';
import Player from "../components/Player";

interface MainLayoutProps{
    title?: string;
    description?: string;
    keywords?: string;
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
                <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
                <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
            </Head>
            <Navbar />
            <Container style={{marginTop:'90px'}}>
                {children}
            </Container>
            <Player />
        </>
    )
}

export default MainLayout;