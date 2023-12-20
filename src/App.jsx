import "bootstrap/dist/css/bootstrap.rtl.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Shop from "./pages/shop/Shop";
import Cart from "./pages/cart/Cart";
import NavBar from "./components/NavBar";
import { ShopContextProvider } from "./context/shopContext";
export default function App() {
  return (
    <>
      <ShopContextProvider>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<Shop />} />
            <Route path="/Cart" element={<Cart />} />
          </Routes>
        </BrowserRouter>
      </ShopContextProvider>
    </>
  );
}
