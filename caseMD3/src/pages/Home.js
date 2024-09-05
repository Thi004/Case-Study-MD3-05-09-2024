import Menu from "../components/Menu";
import {Outlet} from "react-router-dom";
import Header from "../components/Header";
import '../style/Home.css'

function Home() {
    return (
        <>
            <Header/>
            <Outlet/>

        </>
    );
}

export default Home;