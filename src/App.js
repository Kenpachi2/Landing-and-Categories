import logo from './logo.svg';
import './App.css';
import { Route,Routes } from 'react-router-dom'

function App() {
  return (
    <div className="">

      <Routes>
        <Route path="/" />
        <Route path="/female" />
        
        <Route path="/accessories" />

        <Route path="/phonesAndTablet" />

      </Routes>
    </div>
  );
}

export default App;
