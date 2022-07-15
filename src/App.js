import logo from './logo.svg';
import './App.css';
import { Link, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Category from "./Category";
import Products from "./Products";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      </header>
      <div className="App-content">
        <nav className="navbar navbar">
          <ul className="nav">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/category">Category</Link>
            </li>
            <li>
              <Link to="/products">Products</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="category" element={<Category />} />
          <Route path="products" element={<Products />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
