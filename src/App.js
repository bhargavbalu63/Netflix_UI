import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import Banner from './components/Banner';
import Rows from './components/Rows';

function App() {
  return (
    <div className="App">
       <NavBar />
       <Banner />
       <Rows  />
       <Rows />
       <Rows />
       <Rows />
       <Rows />
    </div>
  );
}

export default App;
