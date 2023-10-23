import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "../App";
import About from "../components/about-us/About";
import ProductDetail from "../components/product/ProductDetail";


export default function PageRoute() {
     return (
       <BrowserRouter>
         <Routes>
             <Route path="/" element={<App />} ></Route>
             <Route path="/product/:id" element={<ProductDetail />} ></Route>
             <Route path="/about-us" element={<About />} ></Route>
         </Routes>
       </BrowserRouter>
     )
}