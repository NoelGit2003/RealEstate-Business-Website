import './App.css';
import Home from './Components/Home/Home';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import { Routes, Route } from 'react-router-dom';
import ReviewsPage from './Components/ReviewsPage/ReviewsPage';
import BangloreHomePricePrediction from './Components/PricePrediction/BangloreHomePricePrediction';

function App() {
  return (
    <div className="App">
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}> </Route>
          <Route path="/reviews" element={<ReviewsPage />}> </Route>
          <Route path="/pricePrediction" element={<BangloreHomePricePrediction />}> </Route>
        </Routes>
        <Footer />
      </div>
    </div>
  );
}

export default App;
