import logo from './logo.svg';
import './App.css';
import Landing from './Components/Landing';
import Preloader from './Components/Preloader';
import Header from './Components/Header'
import { BrowserRouter, Route, Switch,Routes } from 'react-router-dom';
import NotFoundPage from './Components/Notfoundpage';
import AllItems from "./Components/Categorized/All_Items"
import Drinks from "./Components/Categorized/Drinks";
import Flowers from "./Components/Categorized/Flowers";
import Flyers from "./Components/Categorized/Flyer";
import Frozen from "./Components/Categorized/Frozen";
import IndianSnacks from "./Components/Categorized/IndianSnacks";
import Lentils from "./Components/Categorized/lentils";
import Vegetables from "./Components/Categorized/Vegitables";
import ProductDetails from './Components/ProductDetails';
function App() {
  return (
    <BrowserRouter basename="/Namaste">
      <Header/>
      <Routes>
        <Route path='Landing' element={<Landing />} />
        <Route path="/" element={<Preloader />}/>
        <Route path='All_items' element={<AllItems/>} />
        <Route path = 'Drinks' element={<Drinks/>}/>
        <Route path = 'Flowers' element = {<Flowers/>}/>
        <Route path='Flyers' element = {<Flyers/>} />
        <Route path='Frozen' element = {<Frozen/>}/>
        <Route path = 'IndianSnacks' element={<IndianSnacks/>}/>
        <Route path='Lentils' element={<Lentils/>}/>
        <Route path='Vegetable' element={<Vegetables/>}/>
        <Route path="*" element={<NotFoundPage />} />
        <Route path="ProductDetail" element={<ProductDetails/>}/>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
