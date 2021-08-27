import { useState } from 'react';
import './App.css';
import ColorContext from './ColorFactory/ColorContext';
import NavBar from './NavBar';
import Routes from './routes/Routes';

function App() {

  const [colors, setColors] = useState([])
  return (
    <ColorContext.Provider value={{colors, setColors}}>
      <div className="App">
        <NavBar/>
        <Routes/>
      </div>
    </ColorContext.Provider>
  );
}

export default App;
