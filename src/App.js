import logo from './logo.svg';
import './App.css';
import Product from './Product';

function App() {
  return (
    <div className="App">
      <Product 
        img="https://thehouseofrare.com/cdn/shop/products/IMG_0053_5c650849-9d9d-4cc3-8863-6a23778cd9a0.jpg?v=1675170808" 
        
        description="Fancy T-Shirt"
        price={400}
      >
        Three Color T-Shirt
      </Product>
      <Product 
        img="https://fullyfilmy.in/cdn/shop/products/New-Mockups---no-hanger---TShirt-Yellow.jpg?v=1639657077" 
        description="Fancy T-Shirt"
        price={500}
      />
    </div>
  );
}

export default App;
