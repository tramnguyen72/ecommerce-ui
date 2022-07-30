import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from './component/Header';
import { Footer } from './component/Footer';
import { HomeScreen } from './screens/HomeScreen';
import { ProductScreen } from './screens/ProductScreen';

const App = () => {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/product/:id" element={<ProductScreen />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
