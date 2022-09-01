import logo from './logo.svg';
import './App.css';
import { Some } from './routeComponents/some';
import { Charts } from './routeComponents/charts';
import { Routes, Route, Link } from "react-router-dom";
import { A } from './routeComponents/a';
import { B } from './routeComponents/b';
import { poolName, poolNameShort } from './utils/poolInfo';
import { Typography, Window, Wallpaper } from 'react-windows-xp';

function App() {
  return (
    <div>
      <div style={{ 
        background: "url(https://i.imgur.com/Zk6TR5k.jpg) no-repeat center center fixed",
        padding: '10px 2%', 
        zIndex: '2'
        }}>
        <h1 style={{ margin: '20px 0px 0px 0px' }}><Typography style={{ margin: '0' }} variant='h2' >Cardano 中文社区质押池</Typography></h1>
        <Typography variant='paragraph' style={{ marginTop: '10px' }}><i>{poolName} </i>[{poolNameShort}] </Typography>
        {/* <div>Cardano Chinese Comunity Pool</div> */}
        <div style={{ marginTop: '20px' }}>
          <Routes>
            <Route path="/" element={<A />} />
            <Route path="/b" element={<B />} />
          </Routes>
        </div>

      </div>
    </div>

  );
}



export default App;
