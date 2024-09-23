import { BrowserRouter,Link,Route,Routes,Outlet } from 'react-router-dom';

const Home = ()=>{

    return (
        <>
        <h1>Home</h1>
          <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/AboutU'>AboutUs</Link></li>
        <li></li><Link to="/contact">Contact</Link>
      </ul>
      <Outlet />
        </>
        

    )

};

export default Home;