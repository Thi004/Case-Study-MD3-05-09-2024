import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import Users from "./pages/Users";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Admin from "./pages/Admin";
import Create from "./components/Create";
import Update from "./components/Update";
import ListProductAdmin from "./components/ListProductAdmin";
import ShoppingCart from "./components/ShoppingCart";


function App() {
    return (
        <>
            <Routes>
                <Route element={<Home/>} path={'/'}>
                    <Route element={<Users/>} path={'users'}>
                        <Route element={<ShoppingCart/>} path={'cart'}></Route>
                    </Route>
                    <Route element={<Login/>} path={'login'}></Route>
                    <Route element={<Register/>} path={'register'}></Route>
                    <Route element={<Admin/>} path={'admin'}>
                        <Route element={<ListProductAdmin/>} path={'list'}></Route>
                        <Route element={<Create/>} path={'create'}></Route>
                        <Route element={<Update/>} path={'update/:id'}></Route>
                    </Route>
                </Route>
            </Routes>
        </>
    );
}

export default App;
