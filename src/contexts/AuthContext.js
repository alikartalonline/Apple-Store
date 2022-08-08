import { useState, createContext, useContext} from "react";

const AuthContext = createContext();

const AuthProvider = ({children}) => {


const [user, setUser] = useState(JSON.parse(localStorage.getItem("dataKey")) || null)
const [loggedIn, setLoggedIn] = useState(localStorage.getItem("LogKey") ||false);

const login = (data) => {
    setLoggedIn(true);
    setUser(data);

    localStorage.setItem("dataKey", JSON.stringify(data))
    localStorage.setItem("LogKey", true)
};


const logout = async (callback) => {
    setLoggedIn(false);
    setUser(null);

    // localStorage.removeItem("dataKey")
    localStorage.removeItem("LogKey")
    
    callback()
};
// callback() parametresi ekledim çünkü profile componentinde,
// handleLogout = () => {} fonksiyonuna parametre olarak göndermek istiyorum. 


const values = {
    user,
    loggedIn,
    login,
    logout
};

return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

const useAuth = () => useContext(AuthContext);


export { AuthProvider, useAuth };