import {createContext, useState} from "react";

export const MyContext = createContext();
const MyContextProvider = ({children}) => {
    const [currentUser,setCurrentUser] = useState({username:'',password:''});
    const [cart, setCart] = useState([]);
    return (
        <MyContext.Provider value={{currentUser,setCurrentUser,cart, setCart}}>
            {children}
        </MyContext.Provider>
    )
}
export default MyContextProvider