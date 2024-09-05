import {Link} from "react-router-dom";
import CartIcon from "../icons/CartIcon";
import {useContext} from "react";
import {MyContext} from "./MyContext";

function Others() {
    const {cart} = useContext(MyContext)
    return (
        <>
            <div className={'other'}>
                <div className={'search'}>
                    <form>
                        <input type="text" placeholder={'Search...'}/>
                        <button type={'submit'}>Go</button>
                    </form>
                </div>
                <div className={'icon-cart'}>
                    <Link to="cart">
                        <CartIcon/>
                        <span>{cart.length}</span>
                    </Link>
                </div>
                <div className={'icon-user'}>
                    <Link to={'/login'}><img id={'user'} src="https://cdn-icons-png.flaticon.com/512/1077/1077063.png"
                                             alt=""/></Link>
                </div>
            </div>
        </>
    );
}

export default Others;