import '../style/Header.css'
import Menu from "./Menu";
import Others from "./Others";
import {Link, Outlet} from "react-router-dom";
import Banner from "./Banner";
function Header() {
    return (
        <>
            <div className='header'>
                <div className="logo">
                    <div className={'img-logo'}>
                        <Link to={'/'}><img
                            src="https://thumbs.dreamstime.com/b/print-174166634.jpg"
                            alt=""/></Link>
                    </div>
                </div>
                <Banner/>
                <Others/>
            </div>
        </>
    );
}

export default Header;