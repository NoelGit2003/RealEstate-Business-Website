import './App.css';
import Companies from './Components/Companies/Companies';
import Contact from './Components/Contact/Contact';
import Extra from './Components/Extra/Extra';
import Header from './Components/Header/Header';
import Residencies from './Components/Residencies/Residencies';
import Value from './Components/Value/Value';

function App() {
  return (
    <div className="App">
      <div>
        <Header />
        <Extra />
      </div>
      <Companies />
      <Residencies />
      <Value />
      <Contact />
    </div>
  );
}

export default App;