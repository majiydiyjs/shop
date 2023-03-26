import Home from './components/Home/Home'

import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";

import About from './components/About/About';
import Faq from './components/Faq/Faq';
import Login from './components/Login/Login';
import Contact from './components/Contact/Contact';
import Header from './components/Header/Header';
import Products from './components/Products/Products';
import Checkout from './components/Checkout/Checkout';
const App = () => {
  return (
    <div>
       <BrowserRouter>
      <Header/>
      
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/faq' element={<Faq/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/login' element={<Login/>}/> 
            <Route path='/products' element={<Products/>}/> 
            <Route path='/checkout' element={<Checkout/>}/>
              
        </Routes>
      </BrowserRouter>
    </div>
  )
};

export default App