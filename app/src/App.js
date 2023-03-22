import { Catalog } from "./components/Catalog/CatalogItem/CatalogItem";
import { Home } from "./components/Home/Home";
import { useNavigate, Route, Routes } from "react-router-dom";
import { AuthContext } from "./contexts/AuthContext";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import { Login } from "./components/Login/Login";
import { authServiceUser } from "./services/authService";
import { useState, useEffect } from "react";

function App() {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [auth, setAuth] = useState({});
  const authService = authServiceUser(auth)

  const onLoginSubmit = async (data) => {
    try {
        const result = await authService.login(data);

        setAuth(result);

        navigate('/catalog');
    } catch (error) {
        console.log('There is a problem');
    }
};

  const contextValues = {
    onLoginSubmit
  }

  return(
    <AuthContext.Provider value={contextValues}>

  <div id="box">
    <Header/>
     

      <main id="main-content">
              <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/login' element= {<Login/>} />

              </Routes>
      </main>
      <Footer />
  </div>
    </AuthContext.Provider>
  )

}

export default App;
