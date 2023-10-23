import { Catalog } from "./components/Catalog/CatalogItem/Catalog";
import { Home } from "./components/Home/Home";
import { Route, Routes } from "react-router-dom";
import {  AuthProvider } from "./contexts/AuthContext";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import { Login } from "./components/Login/Login";
import { Register } from "./components/Register/Register";
import { Logout } from "./components/Logout/Logout";
import { CreateProduct } from "./components/CreateProduct/CreateProduct";
import { ProductDetails } from "./components/ProductDetails/ProductDetails";
import { EditProduct } from "./components/EditProduct.js/EditProduct";
import { RouteGuard } from "./components/common/RouteGuard";
import { ProductProvider } from "./contexts/ProductContext";
import { PageNotFound } from "./components/PageNotFound/PageNotFound";
import MapContainer from "./components/MapContainer/MapContainer";


function App() {

 

  return (
    <AuthProvider>
  <ProductProvider>
      <div id="box">
        <Header />


        <main id="main-content">
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/catalog' element={<Catalog />} />
            <Route path='/catalog/:productId' element={<ProductDetails />} />

            <Route element= {<RouteGuard /> }>
            
            <Route path='/logout' element={<Logout />} />
            <Route path='/create-product' element={<CreateProduct  />}/>
            <Route path='/catalog/:productId/edit' element={<EditProduct  />} />
            <Route path='/maps' element ={<MapContainer />}/>

            </Route>
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
      </ProductProvider>
    </AuthProvider>
  );

}

export default App;
