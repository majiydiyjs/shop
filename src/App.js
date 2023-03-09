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
import Cart from './components/Cart/Cart';

const App = () => {
  return (
    <div>
      
       <BrowserRouter>
      <Header/>
        <Routes>
            <Route path='/' element={<Header/>}/>
            <Route path='/faq' element={<Faq/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/login' element={<Login/>}/> 
            <Route path='/cart' element={<Cart/>}/> 
              
        </Routes>
      </BrowserRouter>
    </div>
  )
};

export default App