import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {Login} from './components/Login';
import {Register} from './components/Register';
import {ProductList} from './components/ProductList';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/products" element={<ProductList />} />
      </Routes>
    </Router>
  );
}

export default App;
