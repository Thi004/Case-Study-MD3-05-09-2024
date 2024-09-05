import NavbarAdmin from "../components/NavbarAdmin";
import {Outlet} from "react-router-dom";

function Admin() {
    return (
        <>
            <NavbarAdmin/>
            <Outlet/>
        </>
    );
}

export default Admin;