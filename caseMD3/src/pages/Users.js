import NavbarUser from "../components/NavbarUser";
import {Outlet} from "react-router-dom";
import ListProductUser from "../components/ListProductUser";
import Carousel from "../components/Carousel";
import Footer from "../components/Footer";

function Users() {
    return (
        <>
            <NavbarUser/>
            <ListProductUser/>
            <Carousel/>
            <Footer/>
        </>
    );
}

export default Users;