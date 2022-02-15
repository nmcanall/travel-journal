import './App.css';
import Header from "./components/Header";
import Locations from "./components/Locations";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <Locations/>
    </div>
  );
}

export default App;