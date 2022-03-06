
//React Components
import { BrowserRouter, Route, Routes } from "react-router-dom"
//Components
import Header from './components/Header';
import Header2 from './components/Header2';
import NavItems from './components/NavItems';
import Banner from './components/Banner';
import Cart from './components/Cart';
import Home from './components/Home';
import UserState from "./context/UserState";
import Product from "./components/Product";
import Thankyou from './components/Thankyou';
import DownloadApp from "./components/DownloadApp";
import Orders from "./components/MyOrders"
import Footer from "./components/Footer"

const App = () => {
  return (
    <>
    <UserState>
      <BrowserRouter>
      <Header2 />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="cart" element={<Cart />} />
          <Route path="/thankyou" element={<Thankyou />} />
          <Route path="/downloadapp" element={<DownloadApp />} />
          <Route path="/myorders" element={<Orders />} />
        </Routes>
      <Footer />
      </BrowserRouter>
      </UserState>
    </>
  )
}
export default App;