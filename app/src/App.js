import { Catalog } from "./components/Catalog/CatalogItem/CatalogItem";
import { Home } from "./components/Home/Home";
import { useNavigate, Route, Routes } from "react-router-dom";
import { AuthContext } from "./contexts/AuthContext";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import { Login } from "./components/Login/Login";
import { Register } from "./components/Register/Register";
import { authServiceUser } from "./services/authService";
import { useState, useEffect } from "react";
import { productServiceFactory } from "./services/productService";
import { Logout } from "./components/Logout/Logout";
import { CreateProduct } from "./components/CreateProduct/CreateProduct";
import { ProductDetails } from "./components/ProductDetails/ProductDetails";
import { EditProduct } from "./components/EditProduct.js/EditProduct";


function App() {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [auth, setAuth] = useState({});
  const authService = authServiceUser(auth.accessToken)
  const productService = productServiceFactory (auth.accessToken)

useEffect(() => {
  productService.getAll()
  .then(result =>{
    setProducts(result)
  })
}, []);

  const onLoginSubmit = async (data) => {
    try {
        const result = await authService.login(data);

        setAuth(result);

        navigate('/catalog');
    } catch (error) {
        console.log('There is a problem');
    }
};
const onRegisterSubmit = async (values) => {
  const { confirmPassword, ...registerData } = values;
  if (confirmPassword !== registerData.password) {
      return;
  }

  try {
      const result = await authService.register(registerData);

      setAuth(result);

      navigate('/catalog');
  } catch (error) {
      console.log('There is a problem');
  }
};
 const onLogout = async () =>{
  await authService.logout();

  setAuth({});
 };

 const onCreateProductSubmit = async (data) => {
  const newProduct = await productService.create(data);

   setProducts(state => [...state, newProduct]);
   navigate('/catalog')
 };

 const onProductEdit = async (values) => {
  const result = await productService.edit(values._id, values)

   setProducts(state => state.map(e => e._id === values._id ? result : e))
   navigate(`/catalog/${values._id}`);
 }



  const contextValues = {
    onLoginSubmit,
    onRegisterSubmit,
    onLogout,
    userId: auth._id,
    token: auth.accessToken,
    userEmail: auth.email,
    isAuthenticated: !!auth.accessToken,
  }

  return(
    <AuthContext.Provider value={contextValues}>

  <div id="box">
    <Header/>
     

      <main id="main-content">
              <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/login' element= {<Login/>} />
                <Route path='/register' element= {<Register/>} />
                <Route path= '/logout' element= {<Logout/>} />
                <Route path= '/create-product' element= {<CreateProduct onCreateProductSubmit={onCreateProductSubmit}/>}/>
                <Route path= '/catalog' element= {<Catalog products={products}/>} />
                <Route path= '/catalog/:productId' element={<ProductDetails/>} />
                <Route path= '/catalog/:productId/edit' element={<EditProduct onProductEdit={onProductEdit}/>} />



              </Routes>
      </main>
      <Footer />
  </div>
    </AuthContext.Provider>
  )

}

export default App;
