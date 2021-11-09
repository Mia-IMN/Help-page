import './App.css';
import CheckoutNeighbourhood from './Pages/CheckoutNeighbourhood';
import FAQs from './Pages/FAQs';
import Featured from './Pages/Featured';
import Homepage from './Pages/Homepage';
import Secondsection from './Pages/Secondsection';


function App() {
  return (
    <div className="App">
      <Homepage />
      <Secondsection />
      <Featured />
      <FAQs />
      <CheckoutNeighbourhood />
    </div>
  );
}

export default App;
