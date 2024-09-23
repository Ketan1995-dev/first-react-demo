import logo from './logo.svg';
import './App.css';
import Product from './Product';
import { BrowserRouter,Link,Route,Routes,Outlet } from 'react-router-dom';
import Home from './Home';
import AboutUs from './AboutUs';
import ContactUs from './ContactUs';

function App() {
  return (
    <div className="App">
      <h1>React Routing</h1>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/AboutUs' element={<AboutUs />} />
          <Route path='/contact' element={<ContactUs />} />
        </Routes>
      </BrowserRouter>

    
    </div>
  );
}

export default App;
