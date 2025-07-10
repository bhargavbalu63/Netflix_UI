
import './App.css';
import NavBar from './components/NavBar';
import Banner from './components/Banner';
import Rows from './components/Rows';
import request from './request';

function App() {
  return (
    <div className="App">
       <NavBar />
       <Banner />
       <Rows  title={"New Releases"} fetch_url={request.fetchReleases} />
       <Rows  title={"Romance Movies"} fetch_url={request.fetchReleases} />
        <Rows  title={"Action Movies"} fetch_url={request.fetchReleases} />
        <Rows  title={"Adventure Movies"} fetch_url={request.fetchReleases} />
        <Rows  title={"Horror Movies"} fetch_url={request.fetchReleases} />
   
    </div>
  );
}

export default App;
