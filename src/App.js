import React, {useState} from 'react';
import './App.css';
import NavBar from './Components/NavBar';
import InfoPanel from './Components/infoPanel';
import FootNav from './Components/FootNav';

function App() {
  const ScreenConfig = useState(0);
  return (
    <div>
      <NavBar />
      <InfoPanel CurrentScreen={ScreenConfig[0]} />
      <FootNav ScreenConfig={ScreenConfig} />
    </div>
  );
}

export default App;
