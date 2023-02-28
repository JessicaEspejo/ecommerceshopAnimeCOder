import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cart from "./components/Cart";
import Home from "./components/Home";
import NavBar from "./components/hooks/NavBar";

import CartContext from "./context/CartContext";
import ItemDetailContainer from "./containers/ItemDetailContainer";
import ItemListContainer from "./containers/ItemListContainer";


const App = () => {
  return (
    <>
      <BrowserRouter>
        <CartContext>
          {/*  NavBar */}     
          <NavBar />
          <Routes>
            {/* Componente Item sera donde se componga el cuerpo de la pagina */}
            <Route exact path="/" element={<Home />} />
            <Route exact path="/cart" element={<Cart />} />
            <Route exact path="/Catalogo" element={<ItemListContainer  />} />
            <Route exact path="/category/:categoryid" element={<ItemListContainer />} />
            <Route exact path="/item/:id" element={<ItemDetailContainer />} />
          </Routes>
   
        </CartContext>
      </BrowserRouter>
    </>
  );
};

export default App;
