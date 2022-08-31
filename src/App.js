import logo from './logo.svg';
import './App.css';
import { Some } from './routeComponents/some';
import { Charts } from './routeComponents/charts';
import { Routes, Route, Link } from "react-router-dom";
import { A } from './routeComponents/a';
import { B } from './routeComponents/b';
import { poolName, poolNameShort } from './utils/poolInfo';

function App() {
  return (
    <div style={{overflow: 'scroll', height: '100vh', background: '#198964', padding: '20px 2%'}}>
      <div ><span style={{fontSize: '40px'}}>Cardano 中文社区质押池</span></div>
      <div style={{marginTop: '10px'}}><i>{poolName} </i>[{poolNameShort}] </div> 
      {/* <div>Cardano Chinese Comunity Pool</div> */}
      <div style={{marginTop: '50px'}}>
        <Routes>
          <Route path="/" element={<A />} />
          <Route path="/b" element={<B />} />
        </Routes>
      </div>
      
    </div>
  );
}



export default App;
