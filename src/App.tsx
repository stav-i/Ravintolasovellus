import React from 'react';
import logo from './logo.svg';
import './App.css';
import Tominnappi from './testi';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img style={{borderRadius: '50%', marginBottom:"10px", marginTop:"80px", width: '300px', height: '300px'}} src="https://img.ilcdn.fi/u6iCznrrfHERlTAEkLjqdD7-qmA=/full-fit-in/920x0/img-s3.ilcdn.fi/e032936c41964bb05a0ec0a8b64620943b23765a69d057e34039ab95fe659bb6.jpg"  className="App-logo" alt="logo"  />
        <p>
          
          <Tominnappi />
          <br />
          <img style={{width: '500px', height: '500px', padding: "50px"}} src="https://www.sttinfo.fi/data/images/00167/3bf032f4-5128-4142-a3a6-336c5c2861ed.jpg"/>
        </p>
        
      </header>
    </div>
  );
}


export default App;