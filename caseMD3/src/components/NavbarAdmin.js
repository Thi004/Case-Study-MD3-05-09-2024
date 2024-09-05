import {Link} from "react-router-dom";
import '../style/NavbarAdmin.css'
function NavbarAdmin() {
    return (
        <>
            <button className={'in-nav'}><Link to={'/admin/list'} className={'link'}>List Product</Link></button>
            <button className={'in-nav'}><Link to={'/admin/create'} className={'link'}>Add New</Link></button>
        </>
    );
}

export default NavbarAdmin;