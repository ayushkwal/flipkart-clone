
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


const App = () => {
  return (
    <>
    <UserState>
      <BrowserRouter>
      <Header2 />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
      </UserState>
    </>
  )
}
export default App;