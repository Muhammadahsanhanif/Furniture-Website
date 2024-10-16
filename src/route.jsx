import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Shop from "./pages/shop";
import ProductDetail from "./pages/productdetail";
import Productvip from "./pages/product";
import Productcomperion from "./pages/productcamperision";
import Checkout from "./pages/checkout";
import Cart from "./pages/cart";


function Routingapp (){
    return(
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/shop" element={<Shop/>}/>
            <Route path="/product" element={<Productvip/>}/>
            <Route path="/product/:title/id/:id" element ={<ProductDetail/>}/>
            <Route path="/productcamperision" element={<Productcomperion/>}/>
            <Route path="/checkout" element={<Checkout/>}/>
            <Route path="/cart" element={<Cart/>}/>

            

        </Routes>
        </BrowserRouter>
    )
}
export default Routingapp;