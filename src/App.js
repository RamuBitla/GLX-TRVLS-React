import './App.css';
import Contact from './Pages/Contact/Contact';
import Home from './Pages/Home/Home';
import Pricing from './Pages/Pricing/Pricing';
import Training from './Pages/Training/Training';

import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import ScrollToTop from './Components/ScrollToTop';

function App() {
  return (
    <>
    <Router>
        <ScrollToTop>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/training' element={<Training/>}/>
          <Route path='/pricing' element={<Pricing/>}/>
          <Route path='/contact' element={<Contact/>}/>
        </Routes>
        </ScrollToTop>
    </Router>
   </>
  );
}

export default App;
